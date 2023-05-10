let count = 1;
const answear = "Это должно быть число";
let num1 = +prompt(`Введите число ${count++}`);

if (Number.isNaN(+num1)) {
  console.log(`${answear}`);
} else {
  const num2 = +prompt(`Введите число ${count++}`);

  if (Number.isNaN(+num2)) {
    console.log(`${answear}`);
  } else {
    const num3 = +prompt(`Введите число ${count++}`);

    if (Number.isNaN(+num3)) {
      console.log(`${answear}`);
    } else {
      const sum = (num1) => {
        return (num2) => {
          return (num3) => {
            return num1 + num2 + num3;
          };
        };
      };
      const result = sum(num1)(num2)(num3);
      if (result === 0) {
        console.log("Вы ничего не ввели");
      } else {
        console.log(`Сумма чисел: \n ${result}`);
      }
    }
  }
}
