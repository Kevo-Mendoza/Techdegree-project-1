/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Initial quotes, sources, citations, and years had a single letter string for testing
// current quotes taken directly from https://teamtreehouse.com/community/random-quote-generator-calling-arraylength-within-a-function , a fellow treehouse student with great quotes!
let quotes = [
  {
    quote: "I'm not sure if I was the first man in space or the last dog.",
    source: "Yuri Gagarin",
    year: "1961"
  },

  {
    quote: "'We willl never survive!' 'Nonsense. You are only saying that because no one ever has.'",
    source: "William Goldman",
    citation: "The Princess Bride",
    year: "1987"
  },

  {
    quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
    source: "Bill Watterson",
    citation: "Calvin and Hobbes"
  },

  {
    quote: "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
    source: "Neil Gaiman",
    citation:"American Gods",
    year: "2001"
  },

  {
    quote:"Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
      source: "Alexandre Dumas",
      citation: "The Count of Monte Cristo",
      year: "1844"
  },

]

/***
 * `getRandomQuote` function
***/
// The function to get random number obtains the length of the objects in the quotes array
// Then multiplies that length by Math.random to receive a random number of that size
// Initially I placed -1 at the end thinking that it would not count the 0 index and start at 1, results were that sometimes the random number returned undefined
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
// Transforms function getRandomQuote to variable randomQuote 
function printQuote(){
  let randomQuote = getRandomQuote();
  // Initialized an html string to hold objects of the array 'quotes'
  let html = ``
  html += `<p class="quote"> ${randomQuote.quote} </p>` 
  html += `<p class="source">${randomQuote.source}`
// added two individual if statements to add onto the html string as needed 

  if(randomQuote.citation){
    html += `<span class="citation"> ${randomQuote.citation} </span>`
  }
  
  if( randomQuote.year){
    html += `<span class= "year"> ${randomQuote.year} </span>`
  }
  // Gave the html string a closing tag
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html; 

  return html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// i wanted to do the extra credit work but truthfully i barely was able to do this without smashing my head against a wall, i had alot of trouble and didnt want to risk a lesser grade