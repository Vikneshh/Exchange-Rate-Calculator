const currencyElOne=document.getElementById("currency-one");
const currencyElTwo=document.getElementById("currency-two");
const amountOne=document.getElementById("amount-one");
const amountTwo=document.getElementById("amount-two");

const rateEl=document.getElementById("rate");
const swap=document.getElementById("swap");

//this calculate function do all the things like fetch exchange rates and update the dom

function calculate(){
    const currencyOne=currencyElOne.value;
    const currencyTwo=currencyElTwo.value;
    // const amountone=amountOne.value;
    // const amonuttwo=amountTwo.value;

    fetch(`https://open.exchangerate-api.com/v6/latest/${currencyOne}`)
    .then(res=>res.json())
    .then(data=>{
        const rate=data.rates[currencyTwo];
       rateEl.innerText=`1 ${currencyOne} = ${rate} ${currencyTwo}`;

       amountTwo.value=(amountOne.value*rate).toFixed(2);
    })
   


}

// Event Listeners

currencyElOne.addEventListener("change",calculate);
currencyElTwo.addEventListener("change",calculate);
amountOne.addEventListener("input",calculate);
amountTwo.addEventListener("input",calculate);
swap.addEventListener("click",()=>{
    const temp=currencyElOne.value;
    currencyElOne.value=currencyElTwo.value;
    currencyElTwo.value=temp;
    calculate();
})
calculate();//Normally this function is present to show the initial value to the users.




