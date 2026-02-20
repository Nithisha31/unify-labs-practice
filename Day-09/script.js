
// 1. Function to trim and convert string to Title Case
const toTitleCase = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// 2. Function to count vowels in a string
const countVowels = (str) => {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(char => vowels.includes(char)).length;
};

// 3. Secret Message generator (replaces specific words with '***')
const secretMessage = (str, wordsToHide) => {
  let cleanedStr = str.trim();
  wordsToHide.forEach(word => {
    const regex = new RegExp(`\\b${word.trim()}\\b`, "gi");
    cleanedStr = cleanedStr.replace(regex, "***");
  });
  return cleanedStr;
};

// Handlers
const handleTitleCase = () => {
    const input = document.getElementById("inputText").value;
    document.getElementById("output").innerText = toTitleCase(input);
};

const handleVowelCount = () => {
    const input = document.getElementById("inputText").value;
    document.getElementById("output").innerText = "Vowel Count: " + countVowels(input);
};

const handleSecretMessage = () => {
    const input = document.getElementById("inputText").value;
    const words = document.getElementById("secretWords").value.split(",");
    document.getElementById("output").innerText = secretMessage(input, words);
};
