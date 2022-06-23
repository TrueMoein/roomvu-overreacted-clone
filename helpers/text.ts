export function splitWords(sentence: string, wordsCount = 8) {
  const words = sentence.split(" ");
  words.length = wordsCount;

  return `${words.join(" ")}${wordsCount > 5 ? "..." : ""}`;
}
