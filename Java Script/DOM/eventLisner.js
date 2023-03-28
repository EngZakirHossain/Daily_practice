//event listener

const btn = document.querySelector('#add_task');
console.log(btn);

btn.addEventListener('click',(event)=>{
    event.preventDefault();

    console.log('event tigger',
    event.target.id,
    event.target.className,
    event.type,
    event.timeStamp,
    event.clientX,event.clientY,
    );
})

const title = document.querySelector('#task_title');

btn.addEventListener('mousemove',(e)=>{
    // e.defaultPrevented();
    title.textContent = `x: ${e.offsetX}; y:${e.offsetY}`;
    title.style.color ='#dddd';
    title.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},100)`
})