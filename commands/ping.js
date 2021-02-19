module.exports = {
  name: 'ping',
  description: 'Ping!',
  execute(msg, _args) {
    const latency = Date.now() - msg.createdTimestamp;
    msg.reply(`Pong! Message latency: ${latency}ms.`);
  },
};
