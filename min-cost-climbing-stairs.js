// For this full problem see ...
// https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=daily-question&envId=2023-10-13

/** Start at element zero, and step through this array
 * and return whether the next element or the next next element
 * is a higher value */
// [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

const findCost1 = function (arr) {
  let values = [];

  for (let i = 0; i < arr.length; i++) {
    let oneStepCost = arr[i + 1];
    let twoStepCost = arr[i + 2];
    let min = Math.min(oneStepCost, twoStepCost);
    values.push(min);

    if (i === arr.length - 3) {
      break;
    }
  }
  return values;
};

/** You can build an array and then track the cost cumulatively by
 * tracking along another array that is storing the values. */
// [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

const findCost2 = function (arr) {
  let cost = new Array(arr.length + 1).fill(0);
  console.log(arr);

  // it has to go one past the end
  for (let i = 2; i <= arr.length; i++) {
    let oneStepCost = arr[i - 1] + cost[i - 1];
    let twoStepCost = arr[i - 2] + cost[i - 2];
    let min = Math.min(oneStepCost, twoStepCost);

    // add to what's been spent
    cost[i] = min;

    console.log("OneStep", oneStepCost);
    console.log("TwoStep", twoStepCost);
    console.log("min", min);
    console.log(cost);
  }
  return cost[cost.length - 1];
};

/** This is a clever way to see which move is cheaper:
 * one steps or two steps. It takes the minimum of that and
 * adds it to what's already been spent. */
