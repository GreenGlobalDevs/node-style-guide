# JavaScript Style Guide

This is a guide for writing consistent and aesthetically pleasing JavaScript code in [Green Global Co.,Ltd](http://greenglobal.vn).

## Table of contents

### Formatting
* [2 Spaces for indentation](#2-spaces-for-indentation)
* [Newlines](#newlines)
* [No trailing whitespace](#no-trailing-whitespace)
* [Use Semicolons](#use-semicolons)
* [120 characters per line](#120-characters-per-line)
* [Use single quotes](#use-single-quotes)
* [Use === and !== Operators](#use--and--operators)
* [Use {} and []](#use--and-)
* [Require padding inside curly braces](#require-padding-inside-curly-braces)

### Naming
* [Basic rules](#basic-rules)
* [Properties and methods](#properties_and_methods)

### Variables
* [Declare one variable per var statement](#declare-one-variable-per-var-statement)
* [Object / Array creation](#object--array-creation)

### Statements

* [Loops](#loops)
* [if else](#if-else)
* [switch case](#switch-case)
* [try catch](#try-catch)


### Functions
* [Write small functions](#write-small-functions)
* [Return early from functions](#return-early-from-functions)
* [Name your closures](#name-your-closures)
* [No nested closures](#no-nested-closures)
* [Method chaining](#method-chaining)

### Comments
* [Use slashes for comments](#use-slashes-for-comments)
* [Top/File-Level Comments](#topfile-level-comments)
* [ESDoc style](#esdoc-style)

### Multiline string literals
* [Use string concatenation](#use-string-concatenation-instead)
* [Use array.join](#use-string-concatenation-instead)
* [Use Template Literals](#use-template-literals-in-es6)


### Miscellaneous
* [Do not use *eval*, *delete*, *with*, *continue*](#do-not-use-eval-delete-with-continue)
* [Do not extend built-in prototypes](#do-not-extend-built-in-prototypes)


### [Reference](#ref-links)

### [Finally](#in-the-end)


## ***


## Formatting


### 2 Spaces for indentation

* Use 2 spaces for indenting your code
* Never mix tabs and spaces

![Error because mixing spaces and tabs](http://i.imgur.com/3lN3lsM.png)

If the editor supports, you should configure to show invisible characters.

### Newlines

* Use UNIX-style newlines (`\n`)
* Always add a newline character as the last character of a file.

![Error because missing newline at the end of file](http://i.imgur.com/2Mv7xKb.png)

### No trailing whitespace

Must clean up any trailing whitespace before committing.

![Error with trailing spaces](http://i.imgur.com/fyDGeXb.png)


### Use Semicolons

Always use semicolons.

Note that, semicolons should be included at the end of function expressions, but not at the end of function declarations. The distinction is best illustrated with an example:

```js
var foo = app.user; // semicolon here.

var foo = {
  key: 'abc',
  value: 1234
};  // semicolon here.

var foo = function() {
  return true;
};  // semicolon here.

function foo() {
  return true;
}  // NO semicolon here.
```


### 120 characters per line

Keep lines shorter than 120 characters. It's better for lines to be too short than to be too long. Break up long lists, objects, and other statements onto multiple lines.

![Error with too long line](http://i.imgur.com/GnkYVKK.png)


### Use single quotes

Use single quotes, unless you are writing JSON.

*Good:*

```js
var foo = 'bar';
```

*Bad:*

```js
var foo = "bar";
```

### Use === and !== Operators

Use the === and !== operators. The == and != operators do type coercion and should not be used.

*Good:*

```js
var a = 0;
if (a !== '') {
  console.log('winning');
}

```

*Bad:*

```js
var a = 0;
if (a == '') {
  console.log('losing');
}
```

### Use {} and []

* Use {} instead of new Object()
* Use [] instead of new Array()

Use arrays when the member names would be sequential integers. Use objects when the member names are arbitrary strings or names.

*Good:*

```js
var a = [1, 2, 3];
var b = { name: 'Albert' };

```

*Bad:*

```js
var a = new Array(1, 2, 3);
var b = new Object();
b.name = 'Albert';
```

### Require padding inside curly braces

*Good:*

```js
var user = { name: 'Alice', age: 15 };

var customer = {
  name: 'Bob',
  age: 16
};

```

*Bad:*

```js
var user = {name: 'Alice', age: 15};
```

*Very bad:*

```js
var user = {name:'Alice',age: 15};
```

## Naming Conventions

### Basic rules

In general, use *functionNamesLikeThis*, *variableNamesLikeThis*, *ClassNamesLikeThis*, *EnumNamesLikeThis*, *methodNamesLikeThis*, *CONSTANT_VALUES_LIKE_THIS*, *foo.namespaceNamesLikeThis.bar*, and *filenameslikethis.js*.

### Properties and methods

* Private properties and methods should be named with a trailing underscore.
* Protected properties and methods should be named without a trailing underscore (like public ones).

## Variables

### Declare one variable per var statement

Declare one variable per var statement, it makes it easier to re-order the
lines.

*Good:*

```js
var keys = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (keys.length) {
  var key = keys.pop();
  object[key] = values.pop();
}
```

*Bad:*

```js
var keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (keys.length) {
  key = keys.pop();
  object[key] = values.pop();
}
```


## Statements

Your opening braces go on the same line as the statement.

*Good:*

```js
if (isAudio(source)) {
  return estimateAudio(source);
} else if (isMovie(source)) {
  return estimateMovie(source);
}
```

*Bad:*

```js
// Stroustrup style: https://en.wikipedia.org/wiki/Indent_style#Variant:_Stroustrup
if (isAudio(source)) {
  return estimateAudio(source);
}
else if (isMovie(source)) {
  return estimateMovie(source);
}

// Allman style: https://en.wikipedia.org/wiki/Indent_style#Allman_style
if (isAudio(source))
{
  return estimateAudio(source);
}
else if (isMovie(source))
{
  return estimateMovie(source);
}
```

Also, notice the use of whitespace before and after the condition statement.


### Loops

A **for** class of statements should have the following form:

```
for (initialization; condition; update) {
  statements
}

for (variable in object) {
  if (filter) {
    statements
  }
}
```

The first form should be used with arrays and with loops of a predeterminable number of iterations.

The second form should be used with objects. Be aware that members that are added to the prototype of the object will be included in the enumeration. It is wise to program defensively by using the hasOwnProperty method to distinguish the true members of the object:

```
for (variable in object) {
  if (object.hasOwnProperty(variable)) {
    statements
  }
}
```

A **while** statement should have the following form:

```
while (condition) {
  statements
}
```

A **do** statement should have the following form:

```
do {
  statements
} while (condition);
```


### if else

The **if** class of statements should have the following form:

```
if (condition) {
  statements
}

if (condition) {
  statements
} else {
  statements
}

if (condition) {
  statements
} else if (condition) {
  statements
} else {
  statements
}
```


### switch case

A **switch** statement should have the following form:

```
switch (expression) {
  case expression:
    statements
  case expression:
    statements
  default:
    statements
}
```

Each group of statements (except the default) should end with **break**, **return**, or **throw**, or a comment indicating a fall-through.

### try catch

The **try** class of statements should have the following form:

```
try {
  statements
} catch (variable) {
  statements
}

try {
  statements
} catch (variable) {
  statements
} finally {
  statements
}
```


### Object creation

Use trailing commas and put *short* declarations on a single line. Only quote
keys when your interpreter complains:

*Good:*

```js
<<<<<<< HEAD
var fib = [ 1, 2, 3, 5, 8, 13 ];

var hi = [
  'hello',
  'world'
];

=======
>>>>>>> f9ac9c30dd19af3580d393c4bdf3c8ec8378c7dc
var fo = {
  good: 'code',
  'is generally': 'pretty',
};
```

*Bad:*

```js
var a = [
  'hello', 'world'
];
var b = {"good": 'code'
        , is generally: 'pretty'
        };
```


## Functions

### Write small functions

Keep your functions short. A good function fits on a slide that the people in
the last row of a big room can comfortably read. So don't count on them having
perfect vision and limit yourself to ~15 lines of code per function.

### Return early from functions

To avoid deep nesting of if-statements, always return a function's value as early
as possible.

*Good:*

```js
function isPercentage(val) {
  if (val < 0) {
    return false;
  }

  if (val > 100) {
    return false;
  }

  return true;
}
```

*Bad:*

```js
function isPercentage(val) {
  if (val >= 0) {
    if (val < 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

Or for this particular example it may also be fine to shorten things even
further:

```js
function isPercentage(val) {
  var isInRange = (val >= 0 && val <= 100);
  return isInRange;
}
```

### Name your closures

Feel free to give your closures a name. It shows that you care about them, and
will produce better stack traces, heap and cpu profiles.

*Good:*

```js
req.on('end', function onEnd() {
  console.log('winning');
});
```

*Bad:*

```js
req.on('end', function() {
  console.log('losing');
});
```

### Method chaining

One method per line should be used if you want to chain methods.

You should also indent these methods so it's easier to tell they are part of the same chain.

*Good:*

```js
User
  .findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });
````

*Bad:*

```js
User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
  .exec(function(err, user) {
    return true;
  });
````

## Comments

### Use slashes for comments

Use slashes for both single line and multi line comments. Try to write
comments that explain higher level mechanisms or clarify difficult
segments of your code. Don't use comments to restate trivial things.

Add empty lines before or after comments to make the it easier to read.


### Top/File-Level Comments

A copyright notice and author information are optional. File overviews are generally recommended whenever a file consists of more than a single class definition. The top level comment is designed to orient readers unfamiliar with the code to what is in this file. If present, it should provide a description of the file's contents and any dependencies or compatibility information. As an example:

```
/**
 * Description of file, its uses and information
 * about its dependencies.
 * @creator: toanpc
 * @contributors: binhqd, ducl, thanhnt
 * Copyright 2015, Green Global Co.,Ltd.
 */
```


### ESDoc style

If the project requires auto-generating documentation, all files, classes, methods and properties should be documented with [ESDoc](https://esdoc.org/). Textual descriptions for properties, methods, method parameters and method return values should be included unless obvious from the property, method, or parameter name.

Complete sentences are recommended but not required. Complete sentences should use appropriate capitalization and punctuation.

Example:

```
/**
 * What a great class this is!
 * @example
 * let myClass = new MyAwesomeClass(foo, bar);
 */
class MyAwesomeClass {  
  /**
   * Constructor for my awesome class
   * @param {number} foo The foo for my awesome class
   * @param {string} bar The bar for my awesome class
   */
  constructor(foo, bar) {...}
  /**
  * @emits {my.event} Emit an event
  */
  myEvent() {...}
}
```

If you have to line break a block tag, you should treat this as breaking a code statement and indent it four spaces.

```
/**
 * Illustrates line wrapping for long param/return descriptions.
 * @param {string} foo This is a param with a description too long to fit in
 *     one line.
 * @return {number} This returns something that has a description too long to
 *     fit in one line.
 */
project.MyClass.prototype.method = function(foo) {
  return 5;
};
```


## Multiline string literals

Do not do this:

```js
var myString = 'A rather long string of English text, an error message \
                actually that just keeps going and going -- an error \
                message to make the Energizer bunny blush (right through \
                those Schwarzenegger shades)! Where was I? Oh yes, \
                you\'ve got an error and all the extraneous whitespace is \
                just gravy.  Have a nice day.';
```        

The whitespace at the beginning of each line can't be safely stripped at compile time; whitespace after the slash will result in tricky errors; and while most script engines support this, it is not part of ECMAScript.

### Use string concatenation instead

```
var myString = 'A rather long string of English text, an error message ' +
    'actually that just keeps going and going -- an error ' +
    'message to make the Energizer bunny blush (right through ' +
    'those Schwarzenegger shades)! Where was I? Oh yes, ' +
    'you\'ve got an error and all the extraneous whitespace is ' +
    'just gravy.  Have a nice day.';
```

### Use array.join

This is the best way before ES6:

```
var myString = [
  'A rather long string of English text, an error message',
  'actually that just keeps going and going -- an error',
  'message to make the Energizer bunny blush (right through',
  'those Schwarzenegger shades)! Where was I? Oh yes,',
  'you\'ve got an error and all the extraneous whitespace is',
  'just gravy.  Have a nice day.'
].join(' ');

```

### Use Template Literals in ES6

With ECMAScript 2015, you should do this:

```
var myString = `A rather long string of English text, an error message
    actually that just keeps going and going -- an error
    message to make the Energizer bunny blush (right through
    those Schwarzenegger shades)! Where was I? Oh yes,
    you've got an error and all the extraneous whitespace is
    just gravy.  Have a nice day.`
```


## Miscellaneous

### Do not extend built-in prototypes

Do not extend the prototype of native JavaScript objects. Your future self will
be forever grateful.

*Good:*

```js
var a = [];
if (!a.length) {
  console.log('winning');
}
```

*Bad:*

```js
String.prototype.trim = function(s) {
  return s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
}

Array.prototype.empty = function() {
  return !this.length;
}

var a = [];
if (a.empty()) {
  console.log('losing');
}
```

### Do not use *eval*, *delete*, *with*, *continue*

These statements should not be used.


## Ref links

This style guide is inspired by what is popular within the community, and the best practices from:

* [Google JavaScript style guide](http://google.github.io/styleguide/javascriptguide.xml)
* [Node.js Style Guide](https://github.com/felixge/node-style-guide)
* [npm's "funny" coding style](https://docs.npmjs.com/misc/coding-style)
* [Douglas Crockford: Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html)
* [Addy Osmani: JavaScript Style Guides And Beautifiers](http://addyosmani.com/blog/javascript-style-guides-and-beautifiers/)
* [ESLint recommended rules](http://eslint.org/docs/rules/)


## In the end

BE CONSISTENT.

If you're editing code, take a few minutes to look at the code around you and determine its style. If they use spaces around all their arithmetic operators, you should too. If their comments have little boxes of hash marks around them, make your comments have little boxes of hash marks around them too.

The point of having style guidelines is to have a common vocabulary of coding so people can concentrate on what you're saying rather than on how you're saying it. We present global style rules here so people know the vocabulary, but local style is also important. If code you add to a file looks drastically different from the existing code around it, it throws readers out of their rhythm when they go to read it. Avoid this.
