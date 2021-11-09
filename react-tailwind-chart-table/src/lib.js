export default function getColorFromNum(
  num,
  data = {
    a: 'bg-green-500',
    b: 'gray-500',
  }
) {
  const prefix = 'bg-';
  if (num === 1) {
    return prefix + 'red-500';
  } else if (num === 2) {
    return prefix + 'yellow-500';
  } else if (num === 3) {
    return data.a;
  } else if (num === 4) {
    return prefix + data.b;
  } else {
    return '';
  }
}
