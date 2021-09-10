const question = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["Where is my girl?"],
  ["bro"]
]


const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am iron-man"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["goodbye","see ya later"],
    ["sushi","pizaa","mala xiao gue"]
]


const random = [
  "Go ahead",
  "I feel bad ",
  "Bro...",
  "Try again",
  "I'm listening...",
  "Tell me more..",
  "Same"
]


document.addEventListener('DOMContentLoaded',() =>{
        const inputField = document.getElementById("input");
    
    inputField.addEventListener("keydown",(e)=>{
        if(e.code == "Enter"){
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }

    });
});

function output(input){
    let message;

    let text = input.toLowerCase();
   
  

    if(checkMessage(question,reply,text)){
      message = checkMessage(question,reply,text);
    }else{
      message = random[Math.floor(Math.random() * random.length)];
    }

    addChat(input,message);
}


function checkMessage(questionArray,answerArray,string){
    let reply ;
    let getAnswer = false;
    for(let x = 0 ; x < questionArray.length; x++){
        for(let y = 0; y < questionArray[x].length; y++){
                if(questionArray[x][y] == string){
                  let  answers = answerArray[x];
                  console.log(answers);
                  console.log(answers[Math.floor(Math.random() * answers.length)]);
                  reply = answers[Math.floor(Math.random() * answers.length)];
                  
                  getAnswer = true;
                  break;
                }
        }
        // to break loop
        if(getAnswer){
           break;
        }
    }
    return reply;
}



function addChat(input, message) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "../img/user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="../img/user.png" class="img-height"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "../img/bot-mini.png";
  botImg.className = "img-height";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${message}`;
  }, 2000
  )
}