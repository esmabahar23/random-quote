const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')

const quotes = [
    'Do something today that your future self will thankyou for',
    'Your limitation is only your imagination',
    'Yesterday is history; tomorrow is a mystery. Today is a gift, which is why we call it the present.',
    'The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and draw and build and play and dance and live as only you can',
    'Stop being afraid of what could go wrong and start being positive about what could go right',
    'You can, you should, and if you’re brave enough to start, you will',
    "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day whispering, 'I will try again tomorrow.",
    'Yesterday is history; tomorrow is a mystery. Today is a gift, which is why we call it the present',
    'The world needs dreamers and the world needs doers. But above all, the world needs dreamers who do',
    'Start where you are. Use what you have. Do what you can',
    'Turn your wounds into wisdom'
]

function showQuote() {
    let randomNum = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNum]
    quoteDisplay.innerHTML = randomQuote 
}

button.addEventListener('click', showQuote)