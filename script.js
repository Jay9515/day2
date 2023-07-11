function countChocolates(totalMoney, chocolateCost) {
  let money = parseFloat(totalMoney);
  let cost = parseFloat(chocolateCost);

  if (isNaN(money) || isNaN(cost) || money < 0 || cost <= 0) {
    return "Invalid Input";
  }

  let chocolates = Math.floor(money / cost);

  let wrappers = chocolates;
  while (wrappers >= 3) {
    let exchangedChocolates = Math.floor(wrappers / 3);
    chocolates += exchangedChocolates;
    wrappers = exchangedChocolates + (wrappers % 3);
  }

  return chocolates;
}

console.log(countChocolates("4$", "1$"));

console.log(countChocolates("55 $", "5$"));

console.log(countChocolates(" 68 $", "2$"));

console.log(countChocolates(" 100 $", "6$"));

console.log(countChocolates("I -80$ ", "5$"));

console.log(countChocolates("I got -68$ from my mom", "2$"));
