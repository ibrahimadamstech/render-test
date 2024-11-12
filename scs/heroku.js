const { adams } = require("../Ibrahim/adams");
const s = require("../config");
const fs = require('fs');
const Heroku = require('heroku-client');

// Function to get a description of an environment variable
function getDescriptionFromEnv(varName) {
  const filePath = "./app.json";
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const config = JSON.parse(fileContent);
  return config.env[varName]?.description || "The environment variable description was not found.";
}


// For ATIDELETE_MESSAGE command
adams({
  nomCom: 'atidelete',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "atidelete yes" to enable or "atidelete no" to disable.');
  }

  // Process command options and set ATIDELETE status
  const option = arg.join(' ').toLowerCase();
  let responseMessage;

  switch (option) {
    case "yes":
      s.ATIDELETE_MESSAGE = 'enabled';  // Enable ATIDELETE_MESSAGE
      responseMessage = 'ATIDELETE_MESSAGE has been enabled successfully.';
      break;

    case "no":
      s.ATIDELETE_MESSAGE = 'disabled';  // Disable ATIDELETE_MESSAGE
      responseMessage = 'ATIDELETE_MESSAGE has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'atidelete yes' or 'atidelete no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});


// For AUTO_SAVE_CONTACTS command
adams({
  nomCom: 'autosave',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autosave yes" to enable or "autosave no" to disable.');
  }

  // Process command options and set AUTO_SAVE_CONTACTS status
  const option = arg.join(' ').toLowerCase();
  let responseMessage;

  switch (option) {
    case "yes":
      s.AUTO_SAVE_CONTACTS = 'enabled';  // Enable AUTO_SAVE_CONTACTS
      responseMessage = 'AUTO_SAVE_CONTACTS has been enabled successfully.';
      break;

    case "no":
      s.AUTO_SAVE_CONTACTS = 'disabled';  // Disable AUTO_SAVE_CONTACTS
      responseMessage = 'AUTO_SAVE_CONTACTS has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autosave yes' or 'autosave no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
adams({
  nomCom: 'autorecord',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autorecord yes" to enable or "autorecord no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PRESENCE = '3';  // Enable Autorecord
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.PRESENCE = 'no';  // Disable Autorecord
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autorecord yes' or 'autorecord no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'alwaysonline',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "alwaysonline yes" to enable or "alwaysonline no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PRESENCE = '1';  // Enable Always Online
      responseMessage = 'Always online has been enabled successfully.';
      break;

    case "no":
      s.PRESENCE = 'no';  // Disable Always Online
      responseMessage = 'Always online has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'alwaysonline yes' or 'alwaysonline no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'autotyping',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autotyping yes" to enable or "autotyping no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PRESENCE = '2';  // Enable Autotyping
      responseMessage = 'Autotyping has been enabled successfully.';
      break;

    case "no":
      s.PRESENCE = 'no';  // Disable Autotyping
      responseMessage = 'Autotyping has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autotyping yes' or 'autotyping no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
adams({
  nomCom: 'anticall',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "anticall yes" to enable or "anticall no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ANTICALL = 'yes';
      responseMessage = 'Anti-call has been enabled.';
      break;

    case "no":
      s.ANTICALL = 'no';
      responseMessage = 'Anti-call has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'anticall yes' or 'anticall no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'antidelete',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "antidelete yes" to enable or "antidelete no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ANTI_DELETE_MESSAGE = 'yes';
      responseMessage = 'Anti-delete has been enabled.';
      break;

    case "no":
      s.ANTI_DELETE_MESSAGE = 'no';
      responseMessage = 'Anti-delete has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'antidelete yes' or 'antidelete no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'autobio',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autobio yes" to enable or "autobio no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_BIO = 'yes';
      responseMessage = 'Auto-bio has been enabled.';
      break;

    case "no":
      s.AUTO_BIO = 'no';
      responseMessage = 'Auto-bio has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autobio yes' or 'autobio no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'autodownloadstatus',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autodownloadstatus yes" to enable or "autodownloadstatus no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_DOWNLOAD_STATUS = 'yes';
      responseMessage = 'Auto-download status has been enabled.';
      break;

    case "no":
      s.AUTO_DOWNLOAD_STATUS = 'no';
      responseMessage = 'Auto-download status has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autodownloadstatus yes' or 'autodownloadstatus no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'autoread',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoread yes" to enable or "autoread no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_READ = 'yes';
      responseMessage = 'Auto-read has been enabled.';
      break;

    case "no":
      s.AUTO_READ = 'no';
      responseMessage = 'Auto-read has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autoread yes' or 'autoread no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'autoreadstatus',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoreadstatus yes" to enable or "autoreadstatus no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_READ_STATUS = 'yes';
      responseMessage = 'Auto-read status has been enabled.';
      break;

    case "no":
      s.AUTO_READ_STATUS = 'no';
      responseMessage = 'Auto-read status has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autoreadstatus yes' or 'autoreadstatus no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'pmpermit',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "pmpermit yes" to enable or "pmpermit no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PM_PERMIT = 'yes';
      responseMessage = 'PM Permit has been enabled.';
      break;

    case "no":
      s.PM_PERMIT = 'no';
      responseMessage = 'PM Permit has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'pmpermit yes' or 'pmpermit no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'publicmode',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "publicmode yes" to enable or "publicmode no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PUBLIC_MODE = 'yes';
      responseMessage = 'Public mode has been enabled.';
      break;

    case "no":
      s.PUBLIC_MODE = 'no';
      responseMessage = 'Public mode has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'publicmode yes' or 'publicmode no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

adams({
  nomCom: 'startingbotmessage',
  categorie: "HEROKU-CLIENT"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  if (!superUser) {
    return repondre("*This command is restricted to the bot owner.*");
  }

  if (!arg[0]) {
    return repondre('Instructions:\n\nType "startingbotmessage yes" to enable or "startingbotmessage no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.STARTING_BOT_MESSAGE = 'yes';
      responseMessage = 'Starting bot message has been enabled.';
      break;

    case "no":
      s.STARTING_BOT_MESSAGE = 'no';
      responseMessage = 'Starting bot message has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'startingbotmessage yes' or 'startingbotmessage no'.");
  }

  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

