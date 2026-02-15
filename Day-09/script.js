
const particlesContainer = document.querySelector('.particles');

for(let i=0;i<20;i++){
    const span=document.createElement('span');
    span.style.left=Math.random()*100+'vw';
    span.style.animationDuration=(5+Math.random()*5)+'s';
    particlesContainer.appendChild(span);
}

const modal=document.getElementById('modal');
document.getElementById('notifyBtn').onclick=()=> modal.style.display='block';
document.querySelector('.close').onclick=()=> modal.style.display='none';
window.onclick=(e)=>{ if(e.target==modal) modal.style.display='none'; }
