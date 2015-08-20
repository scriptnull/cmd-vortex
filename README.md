Transfer files from command line.

cmd-vortex helps you to send and receive files via command line. Most of the developers like to do all their operation on the command line.

Git is cool , file sharing sites are cool ! But sometimes all we need is a single command that can make you transfer files without making you jump out of terminal.

## Platforms
cmd-vortex is built as a node.js module , which means it can run on all platforms wherever you can run node.

__Windows , Linux , Mac ! One app to rule them all.__

## Installation 

### Step 1 
Install [node.js](https://nodejs.org) which comes with node and npm command lines

### Step 2
Open terminal and install it via npm 
```bash 
npm install -g cmd-vortex 
```

or 
Install via git
```bash
git clone https://github.com/scriptnull/cmd-vortex.git 
cd cmd-vortex
npm install
```
## Usage
After installing , cmd-vortex will be available as a command line.
you have type ``vortex`` to access it on the command line.

### send a file 
```bash
vortex send <filename> 
```
![](https://raw.githubusercontent.com/scriptnull/cmd-vortex/master/sendOneFile.gif)

### receive a file 
```bash
vortex receive <key>
```
![](https://raw.githubusercontent.com/scriptnull/cmd-vortex/master/reveiveOneFile.gif)
### send multiple files 
```bash
vortex send <filename1> <filename2> <filename3> 
```
### receive multiple files 
```bash
vortex receive <key1> <key2> <key3>
```

## Contribution 
More than welcomed !

## Features to be added 
- Sending and receiving directories by compressing it.
- Detailed documentation and usage instructions

## License
![](https://raw.githubusercontent.com/scriptnull/bagpack/master/GPL.png)

