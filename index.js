var readlineSync= require('readline-sync');
//import chalk from 'chalk';
var chalk=require('chalk');

var userName=readlineSync.question("Hey! May I know your name? ");

console.log('Welcome '+userName+' ');

console.log("Let's see if you know Muskan ");

var score=0;

var questions=[
  {
    que:'Am I older than 25? ',
    ans:'no'
  },
  {
    que:'Where do I live? ',
    ans:'jaipur'
  },
  {
    que:'Have I done my graduation? ',
    ans:'no'
  }
  
]

function play(que,ans)
{
  var userAns=readlineSync.question(que);
  if(userAns===ans){
    console.log(chalk.green('You are right! '));
    score++;
    console.log(score );
  }
  else{
    console.log(chalk.red('You are wrong! '));
  }
}


for(var i=0;i<questions.length;i++){
  play(questions[i].que,questions[i].ans);
}  

console.log('--------------------------------')
console.log('\n\n'+ chalk.blue.underline('Yaay!! Your final score is '+ score));
// questions={
//   queOne: 'Am I older than 25? ',
//   ansOne: 'no',
// }

// userAns=readlineSync.question(questions.queOne);

// if(userAns===questions.ansOne)
//   console.log('You are Right ');
// else
//   console.log('You are wrong ');