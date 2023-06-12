const { create, Client } = require('@open-wa/wa-automate');

// Manually set the operating system as Windows
const osName = () => 'Windows';

create().then((client) => start(client));

function start(client) {
  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃                                                                                                   ┃
  ┃  TESTE DE CONSOLE
  ┃                                                                                                   ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);

  // Your code here

  // Example: Send a message
  client.sendText('5548988064794', 'Hello, World!')
    .then(() => console.log('Message sent successfully'))
    .catch((error) => console.error('Error sending message:', error));
}

