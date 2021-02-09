# message-scheduler
This program is designed to make scheduling Discord messages free and easy.

## Usage
1) Install Node.js on your computer from [here](https://nodejs.org/en/download/),
if you don't have it already.
2) Download this project to your PC and unzip it.
3) Populate the `botToken` section of `config.json` with your login token, which
you can find by following the instructions [here](https://github.com/Tyrrrz/DiscordChatExporter/wiki/Troubleshooting#my-token-is-disappearing-too-quickly-i-cant-copy-it).
4) From the project directory, run `npm install` to gather all the necessary
packages to run the program locally.
5) Enable Developer Mode on Discord as demonstrated [here](https://discordia.me/en/developer-mode),
then grab the server ID and channel ID of where you want to send the scheduled message in
the `bot.js` file. You can also change the `message` variable to say whatever you want.
6) Also in `bot.js`, change the `desired_hour` and `desired_minute` variables to the
scheduled time of your choice, then run `node bot.js` and leave the computer on so
it can send the message when the time rolls around :)

### TODO
The plan is to a web interface with Discord authentication, so users can schedule 
multiple messages via a GUI rather than one-by-one by hand.
