import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['917378384410', 'SID', true],
  [''], 
  [''] 
] //Numeros de owner 

global.mods = ['917378384410'] 
global.prems = ['917378384410', '923258787253', '919398758484']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam:'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'SID' 
global.author = '@Asahi' 
global.igfg = '▢ Follow on Instagram\https://instagram.com/__sid__99__?igshid=YmMyMTA2M2Y=' 
global.dygp = 'https://chat.whatsapp.com/FYvu6iqA7UA3sGePjPK636'
global.fgsc = 'https://github.com/Guru322/GURU-BOT-V1' 
global.fgyt = 'https://youtube.com/@Asliguru'
global.fgpyp = 'https://youtube.com/@Asliguru'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
