export function pxToRem(px, basePx = 16) {
  let input;

  if (Number.isInteger(px)) {
    input = px;
  } else if (typeof px === 'string' || px instanceof String) {
    input = parseInt(px, 10);
  }

  return `${input / basePx}rem`;
}

export function rgbToRgba(rgbString, alpha) {
  return rgbString.replace('rgb', 'rgba').replace(')', `,${alpha})`);
}

export default {
  pxToRem,
  rgbToRgba
};