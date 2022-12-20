const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(3, 4, 5);

//test 1
let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphin, scoreKoalas);

const chexkWinner = function (avgDolphin, avgKoalas)
{
  if(avgDolphin >= 2* avgKoalas){
      console.log(`Dolphin win (${avgDolphin} vs ${avgKoalas})`);
  }else if(avgKoalas >= 2* avgDolphin){
      console.log(`Koa;as win (${avgKoalas} vs ${avgDolphin})`);
  }else{
      console.log('No team wins.....');
  }
}
chexkWinner(scoreDolphin, scoreKoalas);

chexkWinner(576, 111);

// Test 2

scoreDolphin = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoalas);
chexkWinner(scoreDolphin, scoreKoalas)