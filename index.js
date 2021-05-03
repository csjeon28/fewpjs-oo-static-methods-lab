class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }
  static titleize(string) {
    const sentence = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ')
    let capitalizedSentence = [];
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        capitalizedSentence.push(this.capitalize(words[i]))
      } else {
        if (sentence.includes(words[i])) {
          capitalizedSentence.push(words[i])
        } else {
          capitalizedSentence.push(this.capitalize(words[i]))
        }
      }
    }
    return capitalizedSentence.join(' ');
  }
}
