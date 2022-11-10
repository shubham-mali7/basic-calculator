function calc(opt){
    let a = document.getElementById('first').value
    let b = document.getElementById('second').value
    let out;
    if(opt=="add"){
        out = `Sum of the Numbers is ${Number(a) + Number(b)}`
    }else if(opt=="mul"){
        out = `Multiplication is ${Number(a)*Number(b)}`
    }else if(opt=="div"){
        out = `Division is ${Number(a)/Number(b)}`
    }else{
        out = `Substraction is ${Number(a)-Number(b)}`
    }
    document.getElementsByClassName('out')[0].innerText = out
}

const changeMode = () =>{
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}

// Remember it is case sensitive so write every code carefully

// function add() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) + Number(b);
//     document.getElementsByClassName(
//       "out"
//     )[0].innerText = `Sum of both numbers is ${out}`;
//   }
//   function sub() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) - Number(b);
//     document.getElementsByClassName(
//       "out"
//     )[0].innerText = `Substraction of both numbers is ${out}`;
//   }
//   function divide() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) / Number(b);
//     document.getElementsByClassName(
//       "out"
//     )[0].innerText = `Division of both numbers is ${out}`;
//   }
//   function mul() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) * Number(b);
//     document.getElementsByClassName(
//       "out"
//     )[0].innerText = `Multiplication of both numbers is ${out}`;
//   }