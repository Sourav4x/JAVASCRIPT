let a=parseInt((Math.random()*100)+1).toFixed(0);
const sub=document.querySelector('#subt')
 const inp=document.querySelector('#guessField')
 const pg=document.querySelector('.res')
 const rem=document.querySelector('.rem')
 const low=document.querySelector('.low')
 const p=document.createElement('p')
 const st=document.querySelector('.result')
 let prev=[]
 let start=1;   
 x=1;
 let game=true
 if(game)
    {
        sub.addEventListener('click',function(e){
            e.preventDefault();
            const guess=parseInt(inp.value)
            vlidite(guess)
        })
    }
    
    const vlidite=(guess) =>{
        if(!(guess>=0 && guess<=100 || isNaN(guess)))
            {
                alert('Please Enter a Valid Number')
            }
            else{
                if(start<11)
                    {
                start++;
                prev.push(guess)
                displayguess(guess)
                checkguess(guess)
                    }

                    else if(start===11)
                        {
                            displayguess(guess)
                            displayMessage(`Game over.The Random  Number is ${a}`);
                            endgame()
                        }

            }
    }
    const checkguess=(guess) =>{
        if(a===guess)
            {
                displayMessage(`You guessed it right`)
                endgame();
            }
            else if(a<guess)
                {
                    displayMessage('Number is High')
                }
                else{
                    displayMessage('Number is Low')
                }
    }
 function displayguess(guess)
 {
    inp.value=''
    pg.innerHTML +=` ${guess}`
    rem.innerHTML=`${10-x}`
    x++;
 }
 displayMessage=(message) =>{
    low.innerHTML=`${message}`
 }
 endgame=() =>{
    inp.value=''
    inp.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h3 id='ng'>Start A New Game</h3>`
    st.appendChild(p)
    playgame=false;
    newgame()
 }
 function newgame()
 {
    const n=document.querySelector('#ng')
    n.addEventListener('click',function(e){
a=parseInt((Math.random()*100)+1).toFixed(0);
playgame=true;
pg.innerHTML=''
x=0;
rem.innerHTML=`${10-x}`
start=1;
inp.removeAttribute('disabled')
st.removeChild(p);

    })
 }