const expectedres=['A','A','A','A'];
const quizform=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const span=document.querySelector('span');
quizform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userres=[];
    userres.push(quizform.q1.value);
    userres.push(quizform.q2.value);
    userres.push(quizform.q3.value);
    userres.push(quizform.q4.value);
    let res=0;
    userres.forEach(x=>{
        if(x==expectedres[userres.indexOf(x)])
            res+=25;
    });
    
    let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === res){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
    scrollTo(0,0);
    result.classList.remove('d-none');
});

