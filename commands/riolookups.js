module.exports = {
    name: 'riolookups',
    description: 'RioLookups',
    execute(msg, _args) {
      charlook(msg);
    },
  };

function charlook(msg) {
  const latency = Date.now() - msg.createdTimestamp;
  msg.reply(`Pong! Message latency: ${latency}ms.`);
}
