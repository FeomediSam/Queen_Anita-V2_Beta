//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUEyamhOemJaOHROSDNvOU80cENqTWk1VTVaVHhiOXFlcXRVamZqL05rYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGVqYnVjUzVqcFZta095cUxiQjZ2dnl6SWFFQWNKL2VRSkFaNFdDN1Yzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRFNUdmFHc3RSQ21mTmdXTmN1cFFoWFVRRU1SZ3dOU1d6OE52SWhYclZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNbkwwOHFlN20vTnNjVkJGSENsNWVDdUkzL3pRREdZb2JndlRyTERQQmdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCUmV1NWg4MVoxc2JGenA2ZExJcm1Lcll3OGdaUVJKTTQwdHF4clovbkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNSaDNsTUdCd1U1Tmkrbmc4VTlsY3h2MEwzNU5sejgzMCthU3J4SkRsVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9SbXByVGNROFVIejN4SkR2WnFYRlhJVkU1Q0NMazduRElRV3Jqa2dsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3FtY2MxN2VUR211WmhMZ0lCd3BnellkRk5nUTlFLzRMdjFQcERMOXBpRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVrUlU5TklaUGNEVUVLYWVnOVl5eTJRaU5nS1lyNWIzaHpFQzNQTmxXNlc0b1R2Vyt6alJhQ3BEL2tscyttUGxlc1ZSQWVseHZNSkw2S0hLcWtsZEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJ4NisyYzdSdUlmZzVCNUtiT2Y5OXNacVRaM2lXMVB6V0lWdkFxVVlrWjJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjEzNDc1ODkxMTkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI2REQ2QTgyODg3NjAyRTcyRDlFQjYxOUNBNDhDRUFEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM3NTgzNTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjEzNDc1ODkxMTkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRGOUJCMDU1QzYxMjFGM0ZENkM5N0Y4QjhCNUUwNTk1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM3NTgzNTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImR0NllSTHFlUmtXMmhKbHFOekVULUEiLCJwaG9uZUlkIjoiZWQ5NjU3Y2QtMDE4MS00NmNiLWEyMDEtMWE1NTExNjUxOGU0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ3RTdwVjJZTmljR2FhSEErVHNHQzhiM295cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUHZmbFFzT2JvVXEzQWtyM1NDUDVwSnlTQWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTlKRTNNRFQiLCJtZSI6eyJpZCI6IjEzNDc1ODkxMTkzOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT3ppbCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0dvbEk4R0VJWHUrYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTWxUV2Jpa3ZaZFRyQ244eHlHam52K3JPeFVETy9tbUE0WE42Mjh6VC9UND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmxnbzVmWHBZTElEOGRwL1VDR1l2ejlHVVNha29DN2tMTVZ4WE1xellZT0xTRmxEYWVVMEw5SjVIN0lnRjc2Ykh4eGdhRG5ZTWsrNi9BNVArN2hRRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IlRPaGJObG5sdUpOYkJNSkRUK0NNSTc2LzhTdGQyMlBBSHo0Z09kUjZsSUd2NWlvcUEwUkVwLysycW13RzNUNXBjbkxNZkVCYUJzbjRHWVF4c3hWcEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTM0NzU4OTExOTM6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSlUxbTRwTDJYVTZ3cC9NY2hvNTcvcXpzVkF6djVwZ09GemV0dk0wLzArIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNzU4MzU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURWOCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
