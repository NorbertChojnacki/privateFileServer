"use strict";

/**
 * @param {string} text - tekst do podzielenia
 * @param {string} separator - separator
 * @returns {string[]} - array tekstow
 */
function stringDecompse(text, separator){
    return text.split(separator)
}

module.exports={
    stringDecompse
}