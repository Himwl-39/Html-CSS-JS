// //test 1
// let scoreDolphin = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);

// const chexkWinner = function (avgDolphin, avgKoalas)
// {
//   if(avgDolphin >= 2* avgKoalas){
//       console.log(`Dolphin win (${avgDolphin} vs ${avgKoalas})`);
//   }else if(avgKoalas >= 2* avgDolphin){
//       console.log(`Koa;as win (${avgKoalas} vs ${avgDolphin})`);
//   }else{
//       console.log('No team wins.....');
//   }
// }
// chexkWinner(scoreDolphin, scoreKoalas);

// chexkWinner(576, 111);

// // Test 2

// scoreDolphin = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphin, scoreKoalas);
// chexkWinner(scoreDolphin, scoreKoalas)



 // Coading ch-02
 
 const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 :
  bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// Coding Ch-3:

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / this.height ** 2;
      return this.bmi;
    }
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);
  
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
  }

  //coding Ch-4:
const TipC = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
     bill * 0.2;
  }
  const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tip = [];
  const total = [];
  
  for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    totals.push(tip + bill[i]);
  }
  console.log(bill, tip, total);
  
  const Average = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(Average([2, 3, 7]));
  console.log(Average(total));
  console.log(Average(tip));
  
  
  
  
  
