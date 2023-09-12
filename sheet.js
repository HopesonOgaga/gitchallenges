const sheet = ["A10", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A1"];
const new_arr = sheet.map(function (index) {
  const new_value = index.slice(1);
  return Number(new_value);
});
const sort = new_arr.sort(function (a, b) {
  return a - b;
});

function solve(meal_cost, tip_percent, tax_percent, total_cost) {
  // Write your code here
  meal_cost = 12;
  tip_percent = 12 * 0.2;
  tax_percent = 0.08 * meal_cost;
  total_cost = meal_cost + tip_percent + tax_percent;
  return Math.round(total_cost);
}
const test = solve();
