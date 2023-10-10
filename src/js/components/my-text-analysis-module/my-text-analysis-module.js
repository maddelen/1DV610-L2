/**
 * The my-text-analysis-module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a text analysis program.
 */
export class MyTextAnalysisModule {
  /**
   * Validates the input text for invalid characters and word count limits.
   *
   * @param {string} text - The input text to analyze.
   * @returns {object} - An object containing the analysis results or error messages.
   */
  validateUserInput (text) {
    const validationError = {
      errorMessage: ''
    }

    if (text.includes('<') || text.includes('>')) {
      validationError.errorMessage = 'The characters < and > are not allowed'
    } else if (text.split(/\s+/).filter(word => word !== '').length > 2000) {
      validationError.errorMessage = 'Text cannot exceed 2000 words.'
    }

    return validationError
  }

  /**
   * Counts the number of characters in the input text.
   *
   * @param {string} text - The input text to count characters from.
   * @returns {number} - The character count.
   */
  countCharacters (text) {
    return text.length
  }

  /**
   * Counts the number of sentences in the input text.
   *
   * @param {string} text - The input text to count sentences from.
   * @returns {number} - The sentence count.
   */
  countSentences (text) {
    const sentenceEndings = ['.', '!', '?']
    let sentenceCount = 0

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)

      if (sentenceEndings.includes(char)) {
        sentenceCount++

        while (i < text.length - 1 && sentenceEndings.includes(text.charAt(i + 1))) {
          i++
        }
      }
    }

    return sentenceCount
  }

  /**
   * Finds the longest word in the input text.
   *
   * @param {string} text - The input text to find the longest word from.
   * @returns {string} - The longest word.
   */
  findLongestWord (text) {
    const words = text.split(/\s+/).filter(word => word !== '')

    if (words.length === 0) {
      return ''
    } else {
      let longestWord = words[0]

      for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]
        }
      }

      return longestWord
    }
  }

  /**
   * Finds the most frequent word in the input text.
   *
   * @param {string} text - The input text to find the most frequent word from.
   * @returns {string} - The most frequent word.
   */
  findMostFrequentWord (text) {
    const words = text.split(/\s+/).filter(word => word !== '')

    if (words.length === 0) {
      return ''
    } else {
      const wordFrequency = {}

      for (const word of words) {
        const lowercaseWord = word.toLowerCase()
        if (!wordFrequency[lowercaseWord]) {
          wordFrequency[lowercaseWord] = 0
        }
        wordFrequency[lowercaseWord]++
      }

      let mostFrequentWord = ''
      let maxFrequency = 0

      for (const word in wordFrequency) {
        if (wordFrequency[word] > maxFrequency) {
          mostFrequentWord = word
          maxFrequency = wordFrequency[word]
        }
      }

      return mostFrequentWord
    }
  }

  /**
   * Counts the number of vowels in the input text.
   *
   * @param {string} text - The input text to count vowels from.
   * @returns {number} - The number of vowels.
   */
  countVowels (text) {
    const vowels = 'aeiouAEIOU'
    let vowelCount = 0

    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text.charAt(i))) {
        vowelCount++
      }
    }

    return vowelCount
  }

  /**
   * Counts the number of consonants in the input text.
   *
   * @param {string} text - The input text to count consonants from.
   * @returns {number} - The number of consonants.
   */
  countConsonants (text) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    let consonantCount = 0

    for (let i = 0; i < text.length; i++) {
      if (consonants.includes(text.charAt(i))) {
        consonantCount++
      }
    }

    return consonantCount
  }

  /**
   * Counts the number of uppercase characters in the input text.
   *
   * @param {string} text - The input text to count uppercase characters from.
   * @returns {number} - The number of uppercase characters.
   */
  countUppercase (text) {
    let uppercaseCount = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (char >= 'A' && char <= 'Z') {
        uppercaseCount++
      }
    }
    return uppercaseCount
  }

  /**
   * Counts the number of lowercase characters in the input text.
   *
   * @param {string} text - The input text to count lowercase characters from.
   * @returns {number} - The number of lowercase characters.
   */
  countLowercase (text) {
    let lowercaseCount = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (char >= 'a' && char <= 'z') {
        lowercaseCount++
      }
    }
    return lowercaseCount
  }

  /**
   * Counts the number of digits in the input text.
   *
   * @param {string} text - The input text to count digits from.
   * @returns {number} - The number of digits.
   */
  countDigits (text) {
    let digitCount = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (char >= '0' && char <= '9') {
        digitCount++
      }
    }
    return digitCount
  }

  /**
   * Counts the number of whitespaces in the input text.
   *
   * @param {string} text - The input text to count whitespaces from.
   * @returns {number} - The number of whitespaces.
   */
  countWhitespace (text) {
    let whitespaceCount = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (char === ' ' || char === '\t' || char === '\n' || char === '\r' || char === '\f') {
        whitespaceCount++
      }
    }
    return whitespaceCount
  }

  /**
   * Counts the number of special characters in the input text.
   *
   * @param {string} text - The input text to count special characters from.
   * @returns {number} - The number of special characters.
   */
  countSpecialCharacters (text) {
    let specialCharacterCount = 0
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z') && !(char >= '0' && char <= '9') && !(char === ' ' || char === '\t' || char === '\n' || char === '\r' || char === '\f')) {
        specialCharacterCount++
      }
    }
    return specialCharacterCount
  }

  /**
   * Analyzes the language of the input text.
   *
   * @param {string} text - The input text to analyze the language from.
   * @returns {string} - The analyze language code (e.g., 'eng' for English).
   */
  analyzeLanguage (text) {
    // Define common words/phrases in different languages
    const languagePatterns = {
      Swedish: ['och', 'det', 'att', 'är', 'i'],
      English: ['the', 'and', 'you', 'that', 'this'],
      Spanish: ['el', 'y', 'que', 'en', 'por'],
      French: ['le', 'et', 'que', 'en', 'à'],
      German: ['und', 'die', 'der', 'ich', 'in']
    }

    const wordFrequency = {}

    // Split the input text into words
    const words = text.split(/\s+/)

    words.forEach((word) => {
      word = word.toLowerCase()
      for (const language in languagePatterns) {
        if (!wordFrequency[language]) {
          wordFrequency[language] = 0
        }
        if (languagePatterns[language].includes(word)) {
          wordFrequency[language]++
        }
      }
    })

    // Find the language with the highest word frequency
    let analyzedLanguage = ''
    let maxFrequency = 0

    for (const language in wordFrequency) {
      if (wordFrequency[language] > maxFrequency) {
        analyzedLanguage = language
        maxFrequency = wordFrequency[language]
      }
    }

    return analyzedLanguage
  }
}
