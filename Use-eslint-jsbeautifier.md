# How to use JavaScript style guide

## Table of contents

* [Install eslint](#cài-đặt-eslint)
* [Install Atom's plugins](#cài-đặt-các-plugins-cho-atom)
* Install Sublime Text's plugins
* [linter-eslint's configuration](#thiết-lập-cấu-hình-cho-eslint)
* [atom-beautify's configuration](#thiết-lập-cấu-hình-cho-atom-beautify)

#*

## Install ESLint

In order to install ESLint, you must have node.js already. So the first step is go to [nodejs.org](https://nodejs.org) and install latest node.js - 4.2 or 5.3. Rely on your platform, you can download .msi, .pkg or build from source.

Once you have got node.js, it's easy to install eslint with npm command:

Windows:

```
npm install -g eslint
```

![Install eslint in Windows 10](http://i.imgur.com/OpmaRRB.png)

Linux:

```
sudo npm install -g eslint
```

![Install eslint in Linux Mint 17.3](http://i.imgur.com/y4sxoN0.png)


If everything is OK, let's start installing needed plugins.

## Install Atom's plugins

We would need the following 3 plugins: [linter](https://github.com/atom-community/linter), [linter-eslint](https://github.com/AtomLinter/linter-eslint), and [atom-beautify](https://github.com/Glavin001/atom-beautify).

Edit --> Preferences --> Install:

![Start installing](http://i.imgur.com/NIfXIwd.png)

In the "Search packages" field, type "linter", then Enter, then scrollow to the package named "linter". Press "install" button at right side:

![Search and install linter](http://i.imgur.com/9JDqM8j.png)

Do same thing with linter-eslint and atom-beautify.

![Search and install linter-eslint](http://i.imgur.com/4p6UYaK.png)

![Search and install atom-beautify](http://i.imgur.com/frKAMBf.png)

## Set ESLint's config

Now, please take a look at the repository below:

[https://github.com/GreenGlobalDevs/node-style-guide](https://github.com/GreenGlobalDevs/node-style-guide)

You can see here a file named ".eslintrc". This is ESLint's config file, where we declare the rules matching with our convension. We would place this file at the root folder of the project. When we open project's folder with Atom or Sublime Text, ESLint will do its task.


Now, you can get down the repository by using "git clone" command or, simpler, [download it](https://github.com/GreenGlobalDevs/node-style-guide/archive/master.zip). Then, open it with Atom to and browse the JS files under /examples directory.

The following figure, I open the project "node-style-guide" and "examples/bad.js", the result is really bad:

![bad.js](http://i.imgur.com/hFoz5LS.png)

What we need to do here is fix the code until no any red flag shows :)

If the script file is too long, manual fixing may take a little time, you can use [atom-beautify](https://github.com/Glavin001/atom-beautify) that supports auto formatting.


## Thiết lập cấu hình cho atom-beautify

In the "node-style-guide" folder, you can see another file named ".jsbeautifyrc". This is config file used by atom-beautify. Each time when you press "Ctrl + Alt + B" key combination, atom-beautify will reformat your source code. This plugin's ability is quite limit so it may leave some of the things that you need to fix by hand.


## Conclusion

In short, to follow convension, we would need to add 2 config files - .eslintrc and .jsbeautifyrc - into the root of project folder. Thus, the plugins linter-eslint and atom-beautify will handle about 80% of of the work for you.


