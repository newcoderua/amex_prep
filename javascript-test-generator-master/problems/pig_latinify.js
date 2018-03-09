// Write a method that translates a sentence into pig latin. You may want a helper method.
// 'apple' => 'appleay'
// 'pearl' => 'earlpay'
// 'quick' => 'ickquay'

function piglatinify(sentence) {
  let vowels = "aeiou".split('');
  let res = [];
  let words = sentence.split(' ');
  for (var i = 0; i < words.length; i++) {
    let word = words[i];
    if (vowels.includes(word[0])){
      res.push(vowelsStart(word));
    } else {
      res.push(consStart(word))
    }
  }
  return res.join(' ');
}

function vowelsStart(word){
  return word + 'ay';
}

function consStart(word){
  let vowels = "aeiou".split('');
  for(let i = 0; i < word.length; i++){
    if ((word[i] === 'q') && (word[i + 1] === 'u')){
      continue;
    } else if ((word[i] === 'u') && (word[i - 1] === 'q')){
    } else {
      if(vowels.includes(word[i]))
      return word.slice(i) + word.slice(0, i) + 'ay'
    }
  }
  return word + 'ay';
}

console.log(piglatinify('hey there apples quick'));
