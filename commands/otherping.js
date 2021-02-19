module.exports = {
    name: 'otherping',
    description: 'OtherPing!',
    execute(msg, _args) {
      const latency = Date.now() - msg.createdTimestamp;
      msg.reply(`Pong! Message latency: ${latency}ms.`);
    },
  };
  