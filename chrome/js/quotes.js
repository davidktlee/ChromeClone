const quotes = [
  {
    quote: 'Be your self. No matter what they say',
    author: 'none',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote: 'So many books, so little time.',
    author: 'Frank Zappa',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    author: 'Anne Frank',
  },
]
const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)]
console.log(todayQuotes)

quote.innerText = todayQuotes.quote
author.innerText = todayQuotes.author
