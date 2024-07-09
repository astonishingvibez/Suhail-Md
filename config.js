const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_28_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqNmV0RU5wODVKWmREQXRSVDhiWUYvQ0R6L1RSTmVUQ09vZFhhclh5SVBnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxQ0VUWENwOFFrZXRpcy1pRE4zSDl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5ZDBkZTk3LWQ1MmYtNGM1Ni04MjYwLWQxNTg4NzYwODA0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyMzksXG4gICAgICAxNDAsXG4gICAgICAxNTcsXG4gICAgICAxODQsXG4gICAgICAxOCxcbiAgICAgIDgsXG4gICAgICA5MixcbiAgICAgIDExOSxcbiAgICAgIDYxLFxuICAgICAgODcsXG4gICAgICAxMzcsXG4gICAgICA1MSxcbiAgICAgIDY4LFxuICAgICAgMTk2LFxuICAgICAgMTg1LFxuICAgICAgMjIyLFxuICAgICAgOTAsXG4gICAgICAxNTMsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyMDEsXG4gICAgICA1LFxuICAgICAgMjQyLFxuICAgICAgMjIyLFxuICAgICAgMzcsXG4gICAgICAyMDUsXG4gICAgICA5MyxcbiAgICAgIDE3NSxcbiAgICAgIDE1MSxcbiAgICAgIDE5MyxcbiAgICAgIDcsXG4gICAgICA4LFxuICAgICAgMzIsXG4gICAgICAyMTEsXG4gICAgICA0OCxcbiAgICAgIDY3LFxuICAgICAgMTAsXG4gICAgICAyMSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MTRKWDVaU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQwOTQ3ODA2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzUzNzE1MTA0OTgzMDoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdUVxc3NGRU1YbXRiUUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVaT0hqNmFKVW9WcTZpc3c2UDFMakR3TklOdERMV2szZllOZmdXdzBJaHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHBsVmxlNHRBUUJqMmRjalBJdU42Yzd2S1J6UWhGRlFOTVV3ejlrejNaTExwU29vcjFScllYTW9VL0VicGYvY1pRYVZVRENTZXVtRllWTjlZNm01Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjk4c1hBQTc3UDB5c1VyQ0tSTUdOSmFBSG5pc09WbEZmSlZBYjg1WDVyWWV4ZnNnRHlOaFhRTEFTSENSNy9pYXZxT2pwRjR6UlJhYVVRdHVUZ3ZxQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQwOTQ3ODA2OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTQ2MTIyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
