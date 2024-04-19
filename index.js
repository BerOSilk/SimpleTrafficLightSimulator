function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var x = document.getElementById('red')
var y = document.getElementById('yellow')
var z = document.getElementById('green')
var w = document.getElementById('trigger')
var timer = document.getElementById('timer');
var h = 0;
function toggle(){
    if(h == 0){
        h = 1;
    timer.textContent = '0';
    x.style.backgroundColor = 'red';
    z.style.backgroundColor = 'darkgreen';
    w.style.backgroundColor = 'green';
    sleep(1000).then(() => { timer.textContent = '1' });
    sleep(2000).then(() => { timer.textContent = '2' });
    sleep(3000).then(() => { timer.textContent = '3'; x.style.backgroundColor = "darkred"; y.style.backgroundColor = 'orange'; w.style.backgroundColor = 'red' });
    sleep(4000).then(() => { timer.textContent = '4' });
    sleep(5000).then(() => { timer.textContent = '5'; y.style.backgroundColor = 'orangered'; z.style.backgroundColor = 'green'; h = 0;});}
}