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
    const result = {
      wordCount: 0,
      characterCount: 0,
      sentenceCount: 0,
      longestWord: '',
      errorMessage: ''
    }

    // Check if the text contains < and > characters using a regex pattern.
    const invalidCharacterPattern = /[<>]/

    if (invalidCharacterPattern.test(text)) {
      result.errorMessage = 'The characters < and > are not allowed'
      return result
    }

    // Calculate the word count.
    const words = text.split(/\s+/).filter(word => word !== '')
    const wordCount = words.length

    if (wordCount > 2000) {
      result.errorMessage = 'Text cannot exceed 2000 words.'
      return result
    }

    result.wordCount = wordCount
    result.characterCount = text.length
    result.sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence !== '').length

    if (words.length > 0) {
      let longestWord = words[0] // Initialize with the first word.

      for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]
        }
      }

      result.longestWord = longestWord
    }

    return result
  }

  /**
   * Counts the number of words in the input text.
   *
   * @param {string} text - The input text to count words from.
   * @returns {number} - The word count.
   */
  countWords (text) {
    const words = text.split(/\s+/).filter(word => word !== '')
    return words.length
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
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence !== '')
    return sentences.length
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
      let longestWord = words[0] // Initialize with the first word.

      for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i]
        }
      }

      return longestWord
    }
  }
}
