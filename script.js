function add(){
    document.getElementById("error").innerHTML="";
    let name = document.getElementById("enter").value;
    if(name==''){
        document.getElementById("error").innerHTML="Enter Task!!";
    }
    else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        let a = document.createElement('p');
        let b=document.createElement('i');
        let c = document.createElement('i');
        b.className='bx bxs-message-rounded-check';
        c.className='bx bxs-message-rounded-x';
        a.textContent=name;
        li.style.animation="slidein 0.5s";
        li.appendChild(b);
        li.appendChild(c);
        li.appendChild(a);
        let position = box.firstElementChild;
        if(position==null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,position);
        }
    }
    document.getElementById("enter").value="";
}

let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li =e.target.parentNode;
    if(e.target.className=='bx bxs-message-rounded-x'){
        li.style.animation="slideout 0.5s";
        setTimeout(function(){
            box.removeChild(li);
        },400);
    }
    else if(e.target.className=="bx bxs-message-rounded-check"){
        li.children[2].style.textDecoration="line-through";
        var a=li.children[0];
        var b =li.children[1];
        li.removeChild(a);
        li.removeChild(b);
    }
});

function enter(event){
    if(event.keyCode == 13){
        add();
    }
}