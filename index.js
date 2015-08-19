#!/usr/bin/env node
var furious = require('furious');
var os = require('os');
var path = require('path');
var fs = require('fs');

var config = {
	API_KEY: 'db61271267a777500b86290005fc16b346b34049',
	PROFILE_NAME: os.hostname()
};
var sa = require('send-anywhere')(config);

var uploadFile = function (fileName) {
	var filePath = path.join(process.cwd(), fileName);
	fs.exists(filePath, function (exists) {
		if (exists) {
			console.log('FOUND - ' + fileName);
			sa.sendFile(filePath, function (err, details) {
				if (err) c.printError(err.error);
				else {
					c.printFileSendDetail(fileName, details);
					//loadingBarProvider.startTimer('Transfer in progress - ' + fileName);
				}

			}, function (err, completed) {
				if (err) c.printError(err.error);
				else {
					//loadingBarProvider.stopTimer();
					c.printSuccess("Transfer Complete - " + fileName);
				}
			});
		} else {
			c.printError(fileName + " - File does not exists");
		}
	});
};

//var downloadFile = function()

furious
	.command('send', 'Send a file.', function (args) {
		if (args.length == 1) {
			//only one file
			uploadFile(args[0]);
		} else {
			args.forEach(function (val) {
				uploadFile(val);
			});
		}
	})
	.alias(['s']);



furious
	.command('receive', 'Receive a file.', function (args) {
		sa.receiveAsData(args[0], function (err, data, response) {
			if (err) {
				c.printError(err.error);
			} else {
				var fileName = response.headers['content-disposition'].split('filename="')[1].replace('"', '');
				var filePath = path.join(process.cwd(), fileName);
				fs.writeFile(filePath, data, function (err) {
					if (err) c.printError(err);
					else c.printSuccess('Received - ' + fileName);
				});
			}
		});
	})
	.alias(['r']);

furious.execute(process.argv, 'Transfer files from command line.', function () {
	console.log('cmd-vortex - File Transfer for Developers');
}, function () {
	console.log();
});



var c = (function () {
	var chalk = require('chalk');
	var error = chalk.bold.red;
	var underline = chalk.underline;
	return {
		printError: function (msg) {
			console.log(error(msg));
		},
		printSuccess: function (msg) {
			console.log(chalk.bgGreen(msg));
		},
		printFileSendDetail: function (fileName, detail) {
			console.log(chalk.green(fileName));
			console.log('Key  - ' + detail.key);
			console.log('Link - ' + detail.link);
			console.log('File ready to be transferred - ' + fileName);
		}
	};
})();

// var loadingBarProvider = (function(){
// 	var loading = ['|', '/', '-', '\\', '|', '/' , '-' , '\\'];
// 	var i = 0 ;
// 	var timer ;
// 	return {
// 		startTimer : function(msg){
// 			var f = function (){
// 				console.log(msg);
// 				//process.stdout.clearLine();
// 				//process.stdout.cursorTo(0);  // clear current text
// 				//process.stdout.write(chalk.bgGreen('Waiting for the file to be transferred' +  new Array((i++) % loading.length).join('.'))  );
// 				//process.stdout.write( msg +  loading[(i++) % loading.length]);
// 			};
// 			timer = setInterval( f , 20000);
// 		} ,
// 		stopTimer : function(){
// 			clearInterval(timer);
// 		}
// 	}
// })();


