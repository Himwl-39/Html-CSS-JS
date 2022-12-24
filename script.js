
//cc 01
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}c...${data1[1]}c...${data1[2]}c...`);


const printForecast = function(arr) {
  let str = '';
  for(let i = 0; i , arr,length; i++){
    str = str + `$${arr[i]}c in ${i+1} day ...`;
  }
  console.log(str);
};
printForecast(data1);


