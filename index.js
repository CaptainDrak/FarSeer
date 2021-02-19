const Discord = require("discord.js");
const config = require("./config.json");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(config.BOT_TOKEN);

bot.on("ready", () => {
  console.info("My eyes are open.");
});

const prefix = "!";

bot.on("message", msg => {
  if(msg.author.bot) return;
  if(!msg.content.startsWith(prefix)) return;
  console.info(`Original message: ${msg}`)

  const args = msg.content.slice(prefix.length).split(` `);
  const command = args.shift().toLowerCase();

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});

/*
  if (command === `ping`) {
    const latency = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! Message latency: ${latency}ms.`);
  }
});
*/
/*
require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
*/