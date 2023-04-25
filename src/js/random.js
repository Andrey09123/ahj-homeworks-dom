export default function getRandom(max, except) {
  const num = Math.floor(Math.random() * max);
  return num === except ? getRandom(max, except) : num;
}
