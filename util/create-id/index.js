export function createId() {
  return Math.ceil(new Date().getTime() * Math.random()).toString();
}
