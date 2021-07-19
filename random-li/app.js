const main = document.getElementById('main');
const btnStart = document.getElementById('btnStart');
const btnAdd = document.getElementById('btnAdd');
const btnRemove = document.getElementById('btnRemove');

const btnStop = document.getElementById('btnStop');
btnStop.disabled = true;

function log(mutation) {
    for(let mut of mutation) {
        if(mut.type === 'childList') {
            console.log(mut);
        }
    }
};

const observer = new MutationObserver(log);

btnStart.addEventListener('click', () => {
    observer.observe(main, {
        childList: true
    })
    btnStart.disabled = true;
    btnStart.style.backgroundColor = 'red'
    btnStop.disabled = false;
    btnStop.style.backgroundColor = 'black'
});

let counter = 1;

btnAdd.addEventListener('click', () => {
    const li = document.createElement('li');
    li.id = 'limain';

    li.textContent = `list ${counter++}`;
    main.appendChild(li);

    if(li) {
        li.style.backgroundColor = color();
    }
    
});

btnRemove.addEventListener('click', () => {
    main.lastElementChild ? 
    main.removeChild(main.lastElementChild) :
    alert('no more to remove !');
});

btnStop.addEventListener('click', () => {
    observer.disconnect();

    btnStart.disabled = false;
    btnStart.style.backgroundColor = 'black';
    btnStop.disabled = true;
    btnStop.style.backgroundColor = 'red';
});


function color() {
    const li2 = document.getElementById('limain');

    let col = ['red', 'green', 'blue', 'orange', 'green', 'pink', 'grey', 'white', 'violet', 'cyan'];
    let media = Math.floor(Math.random() * 10);

    let rand = col[media];
    return rand;
}
