function counter(StartNum,EndNum){
    let num1 = StartNum;
    let list = document.getElementById('list');
    let btn = document.getElementById('btn');
    if(list.hasChildNodes()){
        alert('既にリストが存在しているので、リロードを行います。');
        location.reload();
    }else if(StartNum > EndNum){
        alert('EndNumはStartNumより大きくしてください。');
    }else{
        for(let i = 1; i <= EndNum; i++){
            let li = document.createElement('li');
            let beforeNum = num1;
            num1 += i;
            let results = beforeNum + '+' + i + '=' + num1;
            li.classList.add('child'+i);
            li.innerHTML = results;
            list.appendChild(li);
            btn.innerHTML = '書き出し済みです。';
            btn.setAttribute("disabled", true);
        }
    }
}
function connect(){
var blink = true;
}
while(blink){
console.log(blink);
blink = false;
}
console.log(blink);