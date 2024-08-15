const a=document.querySelector('.bar')
setInterval(function(){
    let d=new Date();
    let cur=d.toLocaleTimeString();
    a.innerHTML=cur;
},1000);