const actualNum = () => {
  let sum = 0;
  return (num) => {
    return (sum += num);
  };
};
const sum = actualNum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
