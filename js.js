const counter=document.querySelector('#counter')
const btn=document.querySelectorAll('.btn');

let count=0;
btn.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(btn.classList.contains('lower')){
         count--;
        }
        else if(btn.classList.contains('add')){
            count++;
        }
        counter.textContent=count;
        if(count<0){
            counter.style.color="red";
        }
        else if(count>0){
            counter.style.color='green';
        }
        else if(count===0){
            counter.style.color='white';
        }
    })
})