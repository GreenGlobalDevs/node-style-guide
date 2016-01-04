# Use ESLint and JSBeautify

## Table of contents

* [Install eslint ](#install-eslint)
* [Install js-beautify](#install-jsbeautify)
* [Install Atom's plugins ](#install-atoms-plugins)
* [Install Sublime Text's plugins](#install-sublime-texts-plugins)
* [ESLint configuration](#set-eslints-config)
* [JSBeautify configuration](#set-jsbeautifys-config)

### ***

In order to install ESLint, you must have node.js already. So the first step is go to [nodejs.org](https://nodejs.org) and install latest node.js - 4.2 or 5.3. Rely on your platform, you can download .msi, .pkg or build from source.

ESLint and JSBeautify is the node.js packages that provide needed engine to check and format code. Primitively, they only have command line interface. But people can build GUI for them - in the format of plugins run on the source code editors like Atom and Sublime Text.


## Install ESLint

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



## Install JSBeautify

Similar to eslint, we install js-beautify with npm command:

Windows:

```
npm install -g js-beautify
```

Linux:

```
sudo npm -g install js-beautify
```

![Install js-beautify in Linux Mint 17.3](http://i.imgur.com/33XvRlX.png)


Okay, if everything is OK, let's start installing needed plugins.


## Install Atom's plugins

We would need the following 3 plugins: [linter](https://github.com/atom-community/linter), [linter-eslint](https://github.com/AtomLinter/linter-eslint), and [atom-beautify](https://github.com/Glavin001/atom-beautify).

Edit --> Preferences --> Install:

![Start installing](http://i.imgur.com/NIfXIwd.png)

In the "Search packages" field, type "linter", then Enter, then scroll down to the package named "linter". Press "install" button at right side:

![Search and install linter](http://i.imgur.com/9JDqM8j.png)

Do same thing with linter-eslint and atom-beautify.

Search and install linter-eslint:

![Search and install linter-eslint](http://i.imgur.com/4p6UYaK.png)

Search and install atom-beautify:

![Search and install atom-beautify](http://i.imgur.com/frKAMBf.png)


## Install Sublime Text's plugins

With Sublime Text, we also need 3 plugins: [SublimeLinter](http://www.sublimelinter.com/en/latest/installation.html), [SublimeLinter-contrib-eslint](https://github.com/roadhump/SublimeLinter-eslint) and  [Javascript Beautify](https://github.com/enginespot/js-beautify-sublime).

Because Sublime Text does not have built-in package management tool, we need Package Control plugin first. Please follow [the intructions here](https://packagecontrol.io/installation) to install if not yet.

Then, from Sublime Text interface, press "Ctrl + Shift + P" to open Package Control menu, choose "Install Package". 

![SublimeText - Install package](http://i.imgur.com/E7nxXcH.png)

In the empty field, type "SublimeLinter", then click on the matched item.

![SublimeText - Install SublimeLinter](http://i.imgur.com/OCgHzdx.png)

Do same thing with "SublimeLinter-contrib-eslint" and "Javascript Beautify".

Search and install SublimeLinter-contrib-eslint:

![Search and install SublimeLinter-contrib-eslint](http://i.imgur.com/6BMhzyB.png)

Search and install Javascript Beautify:

![Search and install Javascript Beautify](http://i.imgur.com/Oy7Z2xu.png)


## Set ESLint's config

Now, please take a look at the repository below:

[https://github.com/GreenGlobalDevs/node-style-guide](https://github.com/GreenGlobalDevs/node-style-guide)

You can see here a file named ".eslintrc". This is ESLint's config file, where we declare the rules matching with our convention. We would place this file at the root folder of the project. When we open project's folder with Atom or Sublime Text, ESLint will do its task.


Now, you can get down the repository by using "git clone" command or, simpler, [download it](https://github.com/GreenGlobalDevs/node-style-guide/archive/master.zip). Then, open it with Atom to and browse the JS files under /examples directory.

The following figure, I open the project "node-style-guide" and "examples/bad.js", the result is really bad:

![Atom: bad.js](http://i.imgur.com/hFoz5LS.png)

Sublime Text gives the same result:

![Sublime Text: bad.js](http://i.imgur.com/YtU7lis.png)

What we need to do here is fix the code until no any red flag appears :)

If the script file is too long, manual fixing may take a little time, you can use [JSBeautify](https://github.com/beautify-web/js-beautify) that supports auto formatting.


## Set JSBeautify's config

In the "node-style-guide" folder, you can see another file named ".jsbeautifyrc". This is config file used by atom-beautify plugin in Atom and JavaScript Beautify in Sublime Text. Each time when you press "Ctrl + Alt + B" key combination, these plugins can use JSBeautify core to reformat your source code. Unfortunately, this tool is not very powerful so it may leave some of the things that you need to fix by hand.


## Conclusion

In short, to follow convention, we would need to add 2 config files - .eslintrc and .jsbeautifyrc - into the root of project folder. Thus, the plugins of Atom and Sublime Text will handle about 80% of of the work for you.
