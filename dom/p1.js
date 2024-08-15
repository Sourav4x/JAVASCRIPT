const s=document.querySelectorAll('.b')
const b=document.querySelector("body")
console.log(s)
s.forEach((button) =>{
    console.log(button)
    button.addEventListener('click',function(e)
    {
         if(e.target.id=='one')
            {
                document.body.style.backgroundColor="green"
            }
            else if(e.target.id=='two')
                {
                    document.body.style.backgroundColor="yellow"
                }
                else if(e.target.id=='three')
                    {
                        document.body.style.backgroundColor="red"
                    }
                    else if(e.target.id=='four')
                        {
                        document.body.style.backgroundColor="blue"
                    }
    })
})