const { Client, Events, GatewayIntentBits } = require('discord.js');
const { discord_token } = require('./src/config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client(this bot) is ready, run this code (only once)
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with bot token
client.login(discord_token);