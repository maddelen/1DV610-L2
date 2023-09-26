/**
 * The my-text-analysis-module without a user interface.
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
  validateInput (text) {
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
 * Counts the number of vowels in the input text.
 *
 * @param {string} text - The input text to count vowels from.
 * @returns {number} - The number of vowels.
 */
countVowels(text) {
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
countConsonants(text) {
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
   * Provides character statistics.
   *
   * @param {string} text - The input text to count characters from.
   * @returns {object} - An object containing the character count and statistics.
   */
  countStatistics (text) {
    const characterStatistics = {
      uppercaseCount: 0,
      lowercaseCount: 0,
      digitCount: 0,
      whitespaceCount: 0,
      specialCharacterCount: 0
    }

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)

      if (char >= 'A' && char <= 'Z') {
        characterStatistics.uppercaseCount++
      } else if (char >= 'a' && char <= 'z') {
        characterStatistics.lowercaseCount++
      } else if (char >= '0' && char <= '9') {
        characterStatistics.digitCount++
      } else if (char === ' ' || char === '\t' || char === '\n' || char === '\r' || char === '\f') {
        characterStatistics.whitespaceCount++
      } else {
        characterStatistics.specialCharacterCount++
      }
    }

    return characterStatistics
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
      swe: ['och', 'det', 'att', 'är', 'i'],
      eng: ['the', 'and', 'you', 'that', 'this'],
      spa: ['el', 'y', 'que', 'en', 'por'],
      fre: ['le', 'et', 'que', 'en', 'à'],
      deu: ['und', 'die', 'der', 'ich', 'in']
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
