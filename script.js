/*
let js = 'amazing';
      console.log(40+8+23-10);

      console.log("Mostafizur");
      console.log("23");

      let firstName = "Himel";
       
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);
      // Variable name conventions
      let mostafizur_Himel = 'MH'
      let $function = 27;

      let Person = 'mostafizur'
      let PI = 3.1415;

      let myFirstJob = 'CODER';
      let myCurrentJob = 'Teacher';

      let jon1 = 'programmer';
      let job2 = 'teacher';

      console.log (myFirstJob)
      console.log (myCurrentJob)
      
      
      
      
      
      ///////////////////////////////////
      //Data types
      let javasrcriptIsFun = true;
      console.log(javasrcriptIsFun);

      //console.log(typeof true);
      console.log(typeof javasrcriptIsFun);
      //console.log(typeof 23);
      //console.log(typeof 'Himel');

      javasrcriptIsFun = 'YES!';
      console.log(typeof javasrcriptIsFun);
      
      let year;
      console.log(year);
      console.log(typeof year);

      year = 1991;
      console.log(typeof year);

      console.log(typeof null)

      //////////////////////////////////
      //let,const and vra
      let age = 30;
      age = 31;

      const birthYear = 1991;
      //birthYear = 1990;
      //const job;

      var job = 'programmer';
      job = 'teacher'

      lastName = 'Schmedtmann';
      console.log (lastName)
      

      //Math Operators
      const now = 2037;
      const ageHimel = now - 1991;
      const ageSorme = now - 2018;
      console.log(ageHimel, ageSorme);

      console.log(ageHimel * ageHimel / 10,2 **3);
      // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

      const firstName = 'Himel';
      const lastName = 'Scmedtmann';
      console.log(firstName+ ''  + lastName)

      //Assignment operaters
      let x = 10 + 5; //15
      x += 10; //x=x+10
      x *=4; // x=x*4
      x++; //x=x+1
      x--; //x=x-1
      x--;
      console.log(x);

      
      // Comparison Operators
      console.log(ageHimel > ageSorme); //>, <, >+, <=
      console.log(ageSorme >= 18);

      const isFullAge = ageSorme >= 18;

      console.log(now - 1991 > now - 2018);
      

      const now = 2037;
      const ageHimel = now - 1991;
      const ageSorme = now - 2018;

      console.log(now - 1991 > now - 2018);
      //console.log(25 - 10 - 5);

      let x,y;
      x = y = 25 - 10 - 5;// x = y = 10, x = 10,
      console.log(x , y);

      const averageAge = (ageHimel + ageSorme) / 2
      console.log( ageHimel , ageSorme, averageAge)

      //////////////////////////////////

      //codinbg challenge

      // const massMark = 78;
      // const heightMark = 1.69;
      // const massJohn = 92;
      // const heightJohn = 1.95;

      const massMark = 95;
      const heightMark = 1.88;
      const massJohn = 85;
      const heightJohn = 1.76;

      const BMIMark = massMark / heightMark **2;
      const BMIJohn = massJohn / (heightJohn * heightJohn);
      const markHigherBMI = BMIMark > BMIJohn;  
      console.log(BMIMark, BMIJohn, markHigherBMI);
     
      
      //String/////////////

      const firstName = 'Himel';
      const job = 'Student'
      const birthYear = 2000;
      const year = 2022;

      const himel = "I'm " + firstName + ', a ' + (year-birthYear)+' years old ' +job + '!';
      console.log(himel);

      const himelnew =  `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
      console.log (himelnew);
      
      console.log(`Just a regulae Strihg....`);

      console.log('String with \n\
      multiple \n\
      line');

      console.log(`String with 
      multiple 
      line`);
    
//////////////////////////////////////////////////////
      


      // const age = 19;
      // const isOldEnough = age >= 18;

      // if(isOldEnough){
      //       console.log('Sorme can start driving licence ');
      // }

      const age = 15;
      if(age>=18){
            console.log('Sorme can start driving licence ');
      }else {
            const yearsleft = 18 - age;
            console.log(`Sorme is too young. With anothwe ${yearsleft} year :)`);
      }
      
      const birthYear = 2998;

      let century;
      if(birthYear <= 2000) {
            century = 20;
      
      }else {
            century = 21;
      }
      console.log(century);
    
//////////////////////////////////////////////
      //2nd coading Challenge


      // const massMark = 95;
      // const heightMark = 1.88;
      // const massJohn = 85;
      // const heightJohn = 1.76;

      // const BMIMark = massMark / heightMark **2;
      // const BMIJohn = massJohn / (heightJohn * heightJohn);
      // console.log(BMIMark,BMIJohn)
      // if(BMIMark > BMIJohn) {
      //       console.log("Mark's BMI is higher then John's!")
      // }else {
      //       console.log("John's BMI is higher then Mark's!")
      // }

      const massMark = 78;
      const heightMark = 1.69;
      const massJohn = 92;
      const heightJohn = 1.95;

      

      const BMIMark = massMark / heightMark **2;
      const BMIJohn = massJohn / (heightJohn * heightJohn);
      console.log(BMIMark,BMIJohn)
      if(BMIMark > BMIJohn) {
            console.log(`Mark's BMI (${BMIMark}) is higher then John's (${BMIJohn})!`)
      }else {
            console.log(`John's BMI (${BMIJohn}) is higher then Mark's! (${BMIMark})`)
      }
       
       //type conversion

      const inputYear = '1991';
      console.log(Number(inputYear), inputYear);
      console.log(Number(inputYear) + 18);

      console.log(Number('Hime;'));
      console.log(typeof NaN);

      console.log(String(23),23);

      // Type coercion
      console.log('I am ' + 23 + ' years old');
      //console.log('I am ' + '23'+ ' years old');
      console.log('23'-'10'-3);
      //console.log('23' + '10'+3);
      console.log('23' / '2');


      let n = '1' + 1; // '11'
      n = n - 1; 
      console.log(n);
      

      // 5 falsy balue: 0, '', undefined, nul,Nal

      console.log(Boolean(0));
      console.log(Boolean(undefined));
      console.log(Boolean('Tamim'));
      console.log(Boolean({}));
      console.log(Boolean());

      const money = 100;
      if(money){
            console.log("Don't spend it all :)");
      }else{
            console.log('You should get a job!');
      }

      let height;
      if (height){
            console.log('yey! Height is defined');
      }else{
            console.log('Height is Undefined');
      }
    

      const age = '18';
      if(age === 18) console.log('You judt become an adilt :D(strict)');

      if(age == 18) console.log('You judt become an adilt :D(loose)');

      //prompt("What's your favourite number?");
      const favourite =Number (prompt("What's your favourite number?"));
      console.log(favourite);
      console.log(typeof favourite);

      if (favourite === 23){ //22=== 23 -> False
            console.log('cool! 23 is an amazaing number!')
      }else if(favourite === 7){
            console.log('7 is also a cool number')
      }  else if(favourite === 9){
            console.log('9 is also a cool number')
      }else{
            console.log('Number is not 23 or 7')
      }

      if(favourite !== 23) console.log('Why not 23');
      


      ///////19///////


      const hasDriversLicense = true; // a
      const hasGoodVision = false; // B

      console.log(hasDriversLicense && hasGoodVision);
      console.log(hasDriversLicense || hasGoodVision);
      console.log(!hasDriversLicense);

      
       
      // if(hasDriversLicense && hasGoodVision){
      //       console.log('Sorme is able to drive!');
      // }else{
      //       console.log('Sorme rlse should dribe...');
      // }

      const isTired = true; //C
      console.log(hasDriversLicense && hasGoodVision && isTired);

      if(hasDriversLicense && hasGoodVision && !isTired){
            console.log('Sorme is able to drive!');
      }else{
            console.log('Sorme rlse should dribe...');
      }
      
/////////// Coading c-3 ///////////
/////video 20
      
      // const scoreDolphins = (96 + 108 + 89) / 3;
      // const scoreKoalas = (88 + 91 + 110) / 3;
      // console.log(scoreDolphins, scoreKoalas);

      // if(scoreDolphins > scoreKoalas) {
      //       console.log('Dolphin win the Trophu :)');
      // }else if(scoreKoalas > scoreDolphins){
      //       console.log('Koalas win the trophy :)')
      // } else if(scoreDolphins === scoreKoalas){
      //       console.log('Both win the trophy!')
      // }

      // Bonus

      const scoreDolphins = (97 + 112 + 80) / 3;
      const scoreKoalas = (109 + 95 + 50) / 3;
      console.log(scoreDolphins, scoreKoalas);

      if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
            console.log('Dolphin win the Trophu :)');
      }else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100 ){
            console.log('Koalas win the trophy :)')
      } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >=100){
            console.log('Both win the trophy!')
      }else{
            console.log('No one wins the trophy (:')
      }
      */

      // video 21/////

      // const day = 'monday'

      // switch(day) {
      //       case 'monday': // day === 'monday'
      //       console.log('Plan Course Structure');
      //       console.log('Go to coading meetup');
      //       break;
      //       case 'tuesday': 
      //       console.log('Prepare theory videos');
      //       break;
      //       case 'wednesday':
      //       case 'thurasday':
      //             console.log('Write coad example');
      //             break;
      //             case 'friday':
      //                   console.log('Recording day');
      //                   break;
      //                   case 'saturday':
      //                         case 'sunday':
      //                               console.log('Enjoy the weekrnd : D');
      //                               break;
      //                               default:
      //                               console.log('Not a valod day!');

      // }

////////////////////////////////////////////////////////////

      // const day = 'monday'

      // switch(day) {
      //       case 'monday': // day === 'monday'
      //       console.log('Plan Course Structure');
      //       console.log('Go to coading meetup');
      //       //break;
      //       case 'tuesday': 
      //       console.log('Prepare theory videos');
      //       break;
      //       case 'wednesday':
      //       case 'thurasday':
      //             console.log('Write coad example');
      //             break;
      //             case 'friday':
      //                   console.log('Recording day');
      //                   break;
      //                   case 'saturday':
      //                         case 'sunday':
      //                               console.log('Enjoy the weekrnd : D');
      //                               break;
      //                               default:
      //                               console.log('Not a valod day!');

      // }
      
      ////////////////////////////////////////////////////////

      const day = 'saturday'

      switch(day) {
            case 'monday': // day === 'monday'
            console.log('Plan Course Structure');
            console.log('Go to coading meetup');
            break;
            case 'tuesday': 
            console.log('Prepare theory videos');
            break;
            case 'wednesday':
            case 'thurasday':
                  console.log('Write coad example');
                  break;
                  case 'friday':
                        console.log('Recording day');
                        break;
                        case 'saturday':
                              case 'sunday':
                                    console.log('Enjoy the weekrnd : D');
                                    break;
                                    default:
                                    console.log('Not a valod day!');

      }


      if (day === 'monday') {
            console.log('Plan Course Structure');
            console.log('Go to coading meetup');

      } else if (day === 'tuesday') {
            console.log('Prepare theory videos');

      } else if (day === 'wednesday' || day === 'theusday')
      {
            console.log('Write coad example');

      }else if (day === 'friday'){
            console.log('Recording day');

      }else if( day === 'saturday' || dsy === 'sunday'){
            console.log('Enjoy the weekrnd : D');

      }else {
            console.log('Not a valod day!');
      }


      const day = 'monday'

      switch(day) {
            case 'monday': // day === 'monday'
            console.log('Plan Course Structure');
            console.log('Go to coading meetup');
            break;
            case 'tuesday': 
            console.log('Prepare theory videos');
            break;
            case 'wednesday':
            case 'thurasday':
                  console.log('Write coad example');
                  break;
                  case 'friday':
                        console.log('Recording day');
                        break;
                        case 'saturday':
                              case 'sunday':
                                    console.log('Enjoy the weekrnd : D');
                                    break;
                                    default:
                                    console.log('Not a valod day!');

      }


      if (day === 'monday') {
            console.log('Plan Course Structure');
            console.log('Go to coading meetup');

      } else if (day === 'tuesday') {
            console.log('Prepare theory videos');

      } else if (day === 'wednesday' || day === 'theusday')
      {
            console.log('Write coad example');

      }else if (day === 'friday'){
            console.log('Recording day');

      }else if( day === 'saturday' || dsy === 'sunday'){
            console.log('Enjoy the weekrnd : D');

      }else {
            console.log('Not a valod day!');
      }

     
      
    /////22 no vdo //////////

      3 + 4
      1991
      true && false && !false

      if (23 > 10){
            const str = '23 is bigger';
      }

      const me = 'Himel';
      console.log(`I am ${2037 - 1991} year old ${me}`)

      // video 23 ///

      // const age = 15;
      // age >= 18 ? console.log('I loke to drink wine :)'):
      // console.log('I loke to drink with water :)')

      const age = 15;
      // age >= 18 ? console.log('I loke to drink wine :)'):
      // console.log('I loke to drink with water :)');

      const drink = age >= 18 ? 'wine' : 'water';
      console.log (drink);
      
      let drink2;
      if (age >= 18){
            drink2 = 'wine:)'
      }else{
            drink2 = 'water'
      }
      console.log(drink2)

      console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

      /// Video no 24//////
      ////////coading challenge 04

      // const bill = 275;
      // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : 
      // bill * 0.2
      // console.log(`the boll was ${bill}, the tip was 4{tip}, and the total value $ {bil}`)


      // const bill = 40;
      // const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : 
      // bill * 0.2
      // console.log(`The boll was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

       

      const bill = 430;
      const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
      console.log(`the boll was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
      

      

      
