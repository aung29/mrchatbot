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
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
]




window.addEventListener('load',() =>{
        const inputField = document.getElementById("input");
    
    inputField.addEventListener("keydown",(e)=>{
        if(e.code == "Enter"){
            let input = inputField.value;
            
        }
    })
})