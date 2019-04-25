// Prototypal Inheritance

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }
  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get puzzle() {
    return this.word.map(letter => this.guessedLetters.includes(letter) || letter === ' ' ? letter : '*').join('')
  }
  makeGuess(guess) {
    if (this.status === 'playing') {
      guess = guess.toLowerCase()
      const isUnique = !this.guessedLetters.includes(guess)
      const isBadGuess = !this.word.includes(guess)
      if (isUnique) {
        // this.guessedLetters.push(guess)
        this.guessedLetters = [...this.guessedLetters, guess]  // spread operator
        if (isBadGuess && this.remainingGuesses > 0) {
          this.remainingGuesses--
        }
      }
      this.calculateStatus()
    }
  }
  get StatusMessage() {
    switch (this.status) {
      case 'playing':
        return `Guesses left: ${this.remainingGuesses} `
      case 'failed':
        return `Nice try! The word was "${this.word.join('')}"`
      case 'finished':
        return `Great work! You've guessed the word.`
    }
  }
}

export { Hangman as default }