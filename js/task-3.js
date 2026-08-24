function getElementWidth(content, padding, border) {
  const contentValue = Number.parseFloat(content);
  const paddingValue = Number.parseFloat(padding);
  const borderValue = Number.parseFloat(border);
  return contentValue + paddingValue * 2 + borderValue * 2;
}

console.log(getElementWidth(50, 8, 4)); // 74
console.log(getElementWidth(60, 12, 8.5)); // 101
console.log(getElementWidth(200, 0, 0)); // 200
