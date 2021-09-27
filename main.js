const axios = require('axios')

const headers = {
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
  "Authorization": "[EDIT THIS FILE AND ENTER TOKEN HERE]"
}

exampleFrames = [  //example animation, cycles through rainbow circles
    "🔴",
    "🟠",
    "🟡",
    "🟢",
    "🔵",
    "🟣",
]
    
frames = [  //edit this to add different animations!  make sure any new lines are in quotes and have commas after them
"a mimir 😴💤",
"a mimir 😴　💤",
"a mimir 😴　　💤",
]



const timer = ms => new Promise(res => setTimeout(res, ms))
frame = 0;
async function loop () { //shouldn't need to touch this
  while(true) {
    axios.patch("https://discord.com/api/v9/users/@me/settings", //discord pls give us api v9 doccumentation
        {"custom_status":{"text":frames[frame],"expires_at":"2024-09-27T07:00:00.000Z"}},
        {headers: headers})
          .catch(error => {
            console.error(error)
          })
    frame++;
    frame = frame % frames.length;
    await timer(4000); //any less than 4000 ms and rate limiting gets angry
  }
}

loop();