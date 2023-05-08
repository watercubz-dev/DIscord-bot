import { ExtendedClient } from "./structs/ExtendedClient"
export * from "colors";

const client = new ExtendedClient();

client.start();

export { client }

client.on("ready", () => {
  console.log("Bot is ready".green);
  
})

client.on("MessageCreate", (message) => {
    if (message.author.id == client.user?.id) return;

    message.reply({
      content: `ola ${message.author.username}`,
    })
})