/**
 * Store module
 * Using memory for caching data in app life circle
 * Also using file-based cache to support persistent data
 * @creator: dongnd
 * Copyright 2016, Green Global Co.,Ltd.
 */

import bella from 'bellajs';
import fs from 'fs';

var store = {};
var ttl = 15 * 6e4;

var cacher = {
  set: (key, val, lifeTime = 0) => {
    store[key] = {
      value: val,
      expires: bella.time() + (lifeTime > 0 ? lifeTime : ttl)
    };
    return cacher;
  },
  get: (key) => {
    let d = store[key] || null;
    if (!d) {
      return null;
    }
    let t = d.time;
    let now = bella.time();
    if (now > t) {
      store[key] = null;
      return null;
    }
    return d.value;
  },
  del: (key) => {
    if (bella.hasProperty(store, key)) {
      store[key] = null;
    }
    return cacher;
  },
  empty: () => {
    store = {};
    return cacher;
  }
};

bella.scheduler.every('10m', () => {
  if (bella.isEmpty(store)) {
    return false;
  }
  let now = bella.time();
  for (let k in store) {
    if (bella.hasProperty(k, store)) {
      let d = store[k] || null;
      if (d) {
        let t = d.time;
        if (now > t) {
          store[k] = null;
        }
      }
    }
  }
  return true;
});

export var get = (id) => {
  return cacher.get(id) || null;
};

export var set = (id, data) => {
  return cacher.set(id, data);
};

export var del = (id) => {
  return cacher.del(id);
};

export var fget = (f) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(f)) {
      return reject(new Error('File not found'));
    }
    return fs.readFile(f, 'utf8', (err, s) => {
      if (err) {
        return reject(err);
      }
      return resolve(s);
    });
  });
};

export var fset = (f, data) => {
  return new Promise((resolve, reject) => {
    let s = bella.isString(data) ? data : JSON.stringify(data);
    return fs.writeFile(f, s, 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(f);
    });
  });
};

export var fdel = (f) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(f)) {
      return resolve(f);
    }
    return fs.unlink(f, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(f);
    });
  });
};

export var fgetSync = (f) => {
  let s = '';
  if (fs.existsSync(f)) {
    s = fs.readFileSync(f, 'utf8');
  }
  return s;
};

export var fsetSync = (f, data) => {
  let s = bella.isString(data) ? data : JSON.stringify(data);
  return fs.writeFileSync(f, s, 'utf8');
};

export var fdelSync = (f) => {
  if (fs.existsSync(f)) {
    return fs.unlinkSync(f);
  }
  return null;
};
