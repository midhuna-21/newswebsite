function splitParagraphs(description: string, maxParagraphs = 10): string[] {
  const sentences = description.split('. ');
  const paragraphs = sentences.slice(0, maxParagraphs).map((sentence) => {
    return sentence.trim().endsWith('.') ? sentence.trim() : sentence.trim() + '.';
  });
  return paragraphs;
}
