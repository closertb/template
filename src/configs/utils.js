export function DateFormat(str = '') {
  return str.includes('T') ? str.replace(/T.*/, '') : str;
}
