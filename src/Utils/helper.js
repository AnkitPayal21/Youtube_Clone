const chatNames = [
"Liam","Olivia","Noah","Emma","Oliver","Charlotte","Elijah","Amelia","James","Ava","William","Sophia","Benjamin"]
 export function generateChatNames(){
    return chatNames[Math.floor(Math.random()* chatNames.length)]
 }

 const chatMessages = [
    "If you're visiting this page,",
    " you're likely here because you're searching ",
    "for a random sentence. Sometimes a random",
    " enough, and that is where the random sentence",
     "generator comes into play. By inputting",
     " the desired number, you can make a",
     " list of as many random sentences",
     " as you want or need. Producing ",
     "random sentences can be helpful",
     " in a number of different ways.",
     "For writers, a random sentence",
      "can help them get their creative juices",
      " flowing. Since the topic of the",]

      export function generateChatMessages(){
        return chatMessages[Math.floor(Math.random()* chatMessages.length)]
     }