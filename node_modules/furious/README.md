Meet __furious__ - [commander](https://www.npmjs.com/package/commander) inspired elegant solution for creating command line tools.

[![Build Status](https://travis-ci.org/scriptnull/furious.svg?branch=master)](https://travis-ci.org/scriptnull/furious)

__furious__ is ultra __lightweight__ and __less than 100 lines of code__. The API is dead simple and have been modified from commander to make few things simpler.


Installation
============
```bash 
npm install furious --save
```

API
===
### furious
```javascript
var furious = require('furious');
//add commands and options here 
furious.execute(process.argv , 'Tool for doing string operations'); //execute the user given command.  
```
> __NOTE__ : Don't forget to call furious.execute() at the end. It is responsible for executing the user command.

### .command(commandName , description , callback)
Create a command with this function.
- commandName `string` - Command Name. 
- decription `string` - Description for the Command.
- callback `function(args)` - function to be executed when command is given in the command line. _args_ - array of arguments.
- Example : `programname upper hello` - Here _upper_ is the Command name and _hello_ is available in _args_ of the callback.

```javascript
furious
  .command('upper' , 'print upper case values' , function(args){
    var firstArg = args[0];
    console.log(firstArg.toUpperCase());
  });
```

### .option(optionNamesArray , description , callback)
Create options for already existing command.
- optionNamesArray `array` - Option names. Each option name __should start with - or --__
- description `array` - Description about the Option.
- callback `function(args)` - function to be executed when option is given in the command line. _args_ - array of arguments.
- Example : `programname upper -h` - Here _upper_ is Command name and _-h_ is the option.

```javascript
furious
  .command('upper' , 'print upper case values' , function(args){
    var firstArg = args[0];
    console.log(firstArg.toUpperCase());
  })
  .option(['-h' ,'--help'] , 'Help for Upper' , function(args){
    console.log('You can provide help for this command here.');
  });
```
In this case ,both  ``programname upper -h`` and  ``programname upper --help`` invoke the same callback.

### .alias( aliasArray )
Specify Alias for commands.
```javascript
furious
  .command('upper' , 'print upper case values' , function(args){
    var firstArg = args[0];
    console.log(firstArg.toUpperCase());
  })
  .alias(['up' , 'u']);
```

### .execute(argv , description , noCommandOrOptionOperation , commonOperation)
This is where the user given command on the terminal is parsed and executed. 
- argv `array` - send in __process.argv__ to execute the command given by user.
- description `string` - Description of the command line tool.
- noCommandOrOptionOperation `function()` - function to be executed when there is no commands given by user or the command definition is not available.
- commonOperation `function(argv)` - function to be executed commonly for all the commands. Eg. You may instantiate timers for measuring the performance of your utility here.

```javascript
var noCommandOrOptionOperation = function(){ console.log('Please Specify a Command or Option'); };
var commonOperation = function(argv){console.log('Welcome to the cli');};

furious.execute(process.argv , 'Cli for something' , noCommandOrOptionOperation , commonOperation );
```
Expect for a `printHelp` function in future versions , that can be easily used in _noCommandOrOptionOperation_ and _commonOperation_.

Caveats
=======
- If definition for a command is specified twice then , first definition will be considered and rest are rejected.
- The package is in beta phase and has few things left behind to do. So watch out for version 1.0.0 , until then , try to play around with it.

Contribution
============
More than welcomed. Feel free to send in a pull request or file an issue.

License
=======
[The MIT License](https://github.com/scriptnull/furious/blob/master/LICENSE).
