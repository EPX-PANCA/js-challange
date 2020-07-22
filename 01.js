const checkPalindrome = (string = "") => {
  const text = string.replace(/\W/g, "").toLowerCase()
  const reverseText = text.split("").reverse().join("")
  
  return text == reverseText;
}

console.log(checkPalindrome("ibu ratna antar ubi"));
console.log(checkPalindrome("kasur ini rusak"));
console.log(checkPalindrome("A nut for a jar of tuna."));
console.log(checkPalindrome("Borrow or rob?"));
console.log(checkPalindrome("Was it a car or a cat I saw?"));
console.log(checkPalindrome("Yo, banana boy!"));
console.log(checkPalindrome("UFO tofu?"));