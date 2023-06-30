let button=document.querySelector('button');
button.addEventListener('click',function(){

        let r=0;
        let res="";
        let p=document.getElementById('present').value;
        let t=document.getElementById('total').value;
        let n=document.getElementById('needed').value;
        let v=document.getElementById('input');
        let u=document.getElementById('need');
        r=(p/t)*100;
    r=parseFloat(r).toFixed(2)
    res=res.concat(r,"% attendance.")
    v.innerText=res;
    
    let ab=t-p;
    // document.querySelector('#need').value=ab;
    let x;
    x=(ab*100)/(100-n);
    x=Math.ceil(x);
    x=x-t;
    let need='';
    need=need.concat(x,"lectures needed to reach ",n,"% attendance.");
    u.innerText=need;
    // document.getElementById('need').value=need;

})