const TelegramApi = require("node-telegram-bot-api");

const token = "5655377963:AAHkJTwfswn5qzyUCQVgxRyQDJVALqiz2QY";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async ({ text, chat }) => {
  clearInterval();

  await setInterval(() => {
    bot.sendMessage(chat.id, new Date().toLocaleTimeString("ru"));
  }, 30000);
});
