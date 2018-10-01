function pxToRem(px, basePx = 16) {
  let input;

  if (Number.isInteger(px)) {
    input = px;
  } else if (typeof px === 'string' || px instanceof String) {
    input = parseInt(px, 10);
  }

  return `${input / basePx}rem`;
}

export { pxToRem };