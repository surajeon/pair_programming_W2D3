// PAIR PROGRAMMING BY ROSSANNE & SURA

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    let VerticalString = "";
    for (let y = 0; y < letters[0].length; y++) {
      for (let x = 0; x < letters.length; x++) {
        VerticalString += letters[x][y];
      }
    }
    if (VerticalString.includes(word)) {
      return true;
    }
  return false; 
  };
  
  module.exports = wordSearch;
  
