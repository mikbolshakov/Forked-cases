export function getNextAge(age) {
  if (age >= 1) {
    return Number.parseInt(age, 10) + 1;
  }
  return "0";
}
