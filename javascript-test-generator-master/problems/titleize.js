// Write a method that capitalizes each word in a string like a book title
// Do not capitalize words like 'a', 'and', 'of', 'over' or 'the'

function titleize(title) {
  let words = title.split(' ');
  let res = [];
  let except = 'a and of over the'.split(' ');
  for(let i = 0; i < words.length; i++){
    if (i === 0 && !except.includes(words[i])){
      res.push(words[i][0].toUpperCase() + words[i].slice(1));
    } else if (!except.includes(words[i])){
      res.push(words[i][0].toUpperCase() + words[i].slice(1));
    } else {
      res.push(words[i]);
    }
  }
  return res.join(' ');
}

console.log(titleize("monday great stiry of a and apples"));
