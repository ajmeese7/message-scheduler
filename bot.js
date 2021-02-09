const Discord = require('discord.js');
const config = require('./config.json');
const cron = require('node-cron');

const server_id = 'SERVER_ID_HERE';
const channel_id = 'CHANNEL_ID_HERE';
const desired_hour = 07;
const desired_minute = 15;
const message = "Squad leader I'm hereeeeeee xD";

process.on('unhandledRejection', error => {
	console.error(
		"There was an error! Did you update the config.json file? " +
		"If you did, let me know what the error message says so I can try to help. \n",
		error
	);
	process.exit();
});

console.log("Ready to send scheduled message!");
const client = new Discord.Client();
client.login(config.botToken);

// https://crontab.guru/
cron.schedule(`${desired_minute} ${desired_hour} * * *`, function() {
	console.log("Sending message...");

	let guild = client.guilds.get(server_id);
	if (guild && guild.channels.get(channel_id))
		guild.channels.get(channel_id).send(message);
	else
		console.log("You fricked it up, kid. That channel ID doesn't exist in the specified server!");
});