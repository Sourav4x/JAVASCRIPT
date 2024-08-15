const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const a=parseInt(document.querySelector('#t1').value)
    const b=parseInt(document.querySelector('#t2').value)
    const res=document.querySelector('#res')
    const m=a/100;
    const c=(b/(m*m)).toFixed(3);
    res.style.padding= '30 px'
                    res.style.border='6px white'
    if(a<0 || a==='' || isNaN(a))
        {
            const di=document.createElement('div')
            const add=document.createTextNode(`Oops! Please Enter valid height ${a}`)
            di.appendChild(add)
            res.appendChild(di)
            return;
        }
else if(b<0 || b==='' || isNaN(b))
    {
        const di=document.createElement('div')
            const add=document.createTextNode(`Oops! Please Enter valid weight ${b}`)
            di.appendChild(add)
            res.appendChild(di)
            return;
    }
    
        
    const advice=document.createElement('div')
    if(c<18.5)
        {
            advice.innerHTML=`You lie in underweight category `
            res.style.backgroundColor='blue'
        }
        else if(c>18.4 && c<24.9)
            {
                advice.innerHTML=`You lie in Normal category`
                res.style.backgroundColor="green"
                
            }
            else if(c>25 && c<29.9)
                {
                    advice.innerHTML='You lie in Overweight category'
                    res.style.backgroundColor="yellow"
                    
                }
                else {
                    advice.innerHTML="You are obese"
                    res.style.backgroundColor="red"
                }
                res.innerHTML=`Your BMI Index is <span>${c}</span>`
                res.appendChild(advice)
})