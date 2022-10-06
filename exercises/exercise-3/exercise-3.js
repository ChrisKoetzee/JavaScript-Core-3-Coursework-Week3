let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 2.78 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 2.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 1.60 },
];

const [one, two = 1.39, three, four, five = 1.00, six = 0.40] = order;
console.log(`QTY  TEM  TOTAL`);

// console.log(one);
order.forEach(({itemName, quantity, unitPrice})=>{
  console.log(`${quantity}   ${itemName}  ${unitPrice}`)
})
console.log(`Total : ${one.unitPrice + two.unitPrice + three.unitPrice + four.unitPrice + five.unitPrice + six.unitPrice}`);