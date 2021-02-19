const Discord = require('discord.js');
const config = require('./config.json');
const cron = require('node-cron');

const server_id = 'SERVER_ID_HERE';
const channel_id = 'CHANNEL_ID_HERE';
const times = ["07:15", "21:45"];
const message = "Squad leader I'm asleep ;)";
times.forEach(time => scheduleMessage(time));

process.on('unhandledRejection', error => {
	console.error(
		"There was an error! Did you update the config.json file? " +
		"If you did, let me know what the error message says so I can try to help. \n",
		error
	);
	process.exit();
});

console.log("Ready to send scheduled message!");

// https://crontab.guru/
function scheduleMessage(time) {
	const [desired_hour, desired_minute] = time.split(":");
	cron.schedule(`${desired_minute} ${desired_hour} * * *`, function() {
		console.log("Sending message...");

		try {
			const client = new Discord.Client();
			client.login(config.botToken).then(() => {
				let guild = client.guilds.get(server_id);
				if (guild && guild.channels.get(channel_id))
					guild.channels.get(channel_id).send(message);
				else
					console.log("You fricked it up, kid. That channel ID doesn't exist in the specified server!");
			});

			client.destroy();
		} catch (error) {
			console.error("There was an error:", error);
		}
	});
}
