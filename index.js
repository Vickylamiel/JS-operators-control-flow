// Question 3
let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

let dept = 'Arts';

if (dept == 'Science') {
    console.log(`These are your subjects: ${generalSubjects}, ${scienceSubjects}`);
} else if (dept == 'Social Science') {
    console.log(`These are your subjects: ${generalSubjects}, ${socialScienceSubjects}`);
} else if (dept == 'Arts') {
    console.log(`These are your subjects: ${generalSubjects}, ${artsSubjects}`);
} else{
    console.log(`These are your subjects: ${generalSubjects}`);
}

// Question 5

// let pwr; 
// let firstValue; 
// const nearestPower = (num) => {
//   for (let i = 0; i < num; i++) {
//     pwr = 2 ** i;
//     if (pwr < num) {
//       firstValue = pwr;
//     }
//   }
//   pwr = num - firstValue > firstValue * 2 - num ? firstValue * 2 : firstValue;
//   console.log(pwr);
//   return `The number ${pwr} is the power of 2 nearest to ${num}`;
// };
// console.log(nearestPower(100));


// const num = parseInt(60);
// let pwr = Math.pow(2, Math.round(Math.log2(num)));


function nearestPower (number) {
  const log2 = Math.log2(number)
  const round = Math.round(log2)
  const pwr = Math.pow(2, round)


  if (number >= 0) {
      console.log(`The number ${pwr} is the power of 2 nearest to ${number}.`);
  } else if (number < 0) {
    console.log('Invalid number')
  }

}

nearestPower(8)