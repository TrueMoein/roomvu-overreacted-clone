export function splitWords(sentence: string, wordsCount = 8) {
  const words = sentence.split(" ");
  words.length = wordsCount;

  return `${words.join(" ")}${wordsCount > 5 ? "..." : ""}`;
}

export function calculateReadingTime(text: string) {
  const wordsLength = text.split(" ").length;
  const time = Math.round(wordsLength / 3);
  return `${"☕️".repeat(time / 3)} ${time} min read`;
}
