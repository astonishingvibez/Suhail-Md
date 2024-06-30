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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "256740947806";
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_51_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDcsXG4gICAgICAgIDY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICA3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU2tyRW9ET2o2UVZwYjRXaXozdC90YVZRY0RwejdBaTRKZjYzdUM2Ti9ncz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNHZzUEp3QUhUUzZkY041RkpGdnZyQVwiLFxuICBcInBob25lSWRcIjogXCJmMmVjM2QzMy03NmJkLTQ2ODMtYTFkNS1hYWIzNGI3OTkzMWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgOTUsXG4gICAgICAxNzksXG4gICAgICAxNjMsXG4gICAgICAxOTEsXG4gICAgICA2NCxcbiAgICAgIDM2LFxuICAgICAgODMsXG4gICAgICA3MixcbiAgICAgIDE5NixcbiAgICAgIDg2LFxuICAgICAgMTcyLFxuICAgICAgMTgsXG4gICAgICAxNzYsXG4gICAgICAyMjQsXG4gICAgICAyNTUsXG4gICAgICAyMSxcbiAgICAgIDIzNyxcbiAgICAgIDkzLFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA1OCxcbiAgICAgIDgwLFxuICAgICAgMTI3LFxuICAgICAgNCxcbiAgICAgIDIzNCxcbiAgICAgIDMzLFxuICAgICAgNjgsXG4gICAgICA1LFxuICAgICAgMTM5LFxuICAgICAgMTExLFxuICAgICAgMjQ3LFxuICAgICAgMTk3LFxuICAgICAgMjAsXG4gICAgICAxMTksXG4gICAgICAyMTAsXG4gICAgICA2NCxcbiAgICAgIDIxOCxcbiAgICAgIDE5NyxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQ0U3TjNLN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQwOTQ3ODA2OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzUzNzE1MTA0OTgzMDoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdUVxc3NGRUxTUjI3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVaT0hqNmFKVW9WcTZpc3c2UDFMakR3TklOdERMV2szZllOZmdXdzBJaHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnAxeVAvcUdxT1BYSDRKRDVteThBRjZRQTZlNEpNeDdlTmZtWWZOTmFMaUFzcEJGTWlYeGloTDZCem45SkpxZWd1a0VmM2hmZHovMlZ1WWhPUFRnQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRzBnVGtOZVl0YzNrRmduem12K3hGb09KeHpCMHNkY0x6eVNvZXdpWWlwWmZLVUEwV3pBQkZGYWZCc2FhWmVVUVpFbm1jNXVIZzRBa0pORjB1ZTJoZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQwOTQ3ODA2OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MDYwNjYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0thXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLS2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnVURvZFQySHFyT01xVFJxT0VIUzVVL2hxa2UxN2Vjekx6K0Z5aGpaK0RNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MDAxNTI0MjQsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzE1MjgzOTkyODAzXCJ9Igp9"  // PUT your SESSION_ID 


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
