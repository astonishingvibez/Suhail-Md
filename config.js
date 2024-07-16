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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3dU81NHVSOHI3VVVJWHEzMWxzQ1l4WmdDTVdiQVpLMkZqS3FrenR5SEJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkNVVfT01DeVFEaXBHT3JTZ21DaFh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM4YjZhY2NmLWI1Y2QtNGViNS1iMTY2LTM0YmUzNzg4YzhkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICA3OCxcbiAgICAgIDIxLFxuICAgICAgMTkxLFxuICAgICAgMTExLFxuICAgICAgMTUsXG4gICAgICAyNDAsXG4gICAgICAxLFxuICAgICAgMjA3LFxuICAgICAgMzAsXG4gICAgICA1LFxuICAgICAgMjE0LFxuICAgICAgMTk3LFxuICAgICAgMTIxLFxuICAgICAgMSxcbiAgICAgIDIxMixcbiAgICAgIDc5LFxuICAgICAgMTA0LFxuICAgICAgMTc5LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgMTE1LFxuICAgICAgMyxcbiAgICAgIDkyLFxuICAgICAgMTE5LFxuICAgICAgMjUsXG4gICAgICA2NyxcbiAgICAgIDIxLFxuICAgICAgMTYzLFxuICAgICAgNSxcbiAgICAgIDE4LFxuICAgICAgMjQ4LFxuICAgICAgNjIsXG4gICAgICAxMzIsXG4gICAgICA3NCxcbiAgICAgIDI0MCxcbiAgICAgIDEyOCxcbiAgICAgIDEwMCxcbiAgICAgIDEzLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktKREtGVEtOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDA5NDc4MDY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ3NTM3MTUxMDQ5ODMwOjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091RXFzc0ZFSmpiMmJRR0dBNGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVpPSGo2YUpVb1ZxNmlzdzZQMUxqRHdOSU50RExXazNmWU5mZ1d3MElodz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzYjcyYWpJcDlnYUVYWnFSSG1FcFBORmRBVG1oQ0ZuZGU1bklVdXM4c2tJVFVjYzVRRFo5K2dmci9lU0ZkRzJWdE10VTRna3JzaEF3eld1M2gvNXBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJQ3NDMXhWTjU5Ni9VQ3dBQnpxT0VKOExicUpUYkNEQWEvdk5YTlZJUHpZOEY0WXBteWZqK1F5WFF2OUhxK1Naa2dMTk9kR1hEbnVZbW1PcVpQS0pqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NDA5NDc4MDY6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMzQ0OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLS3lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtLeS5qc29uIjogIntcImtleURhdGFcIjpcIkJmOE1hZjE0TEk3SmtsSkFYTGV0Zkt3L0VmRlRXM0Y4MlVQYVFTdHRLOEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwMDE1MjQyNyxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDcsMTFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "溫塔格維貝茲 ",
  ownername:process.env.OWNER_NAME|| "溫塔奇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
