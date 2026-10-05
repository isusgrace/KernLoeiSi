const currency_one=document.getElementById('currency-one');
const currency_two=document.getElementById('currency-two');

const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');

const swap01=document.getElementById('swap01');
const rateMoney=document.getElementById('rate');

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);
amount_one.addEventListener('input',calculateMoney);
amount_two.addEventListener('input',calculateMoney);

function calculateMoney() {
    const eins = currency_one.value;
    const zwei = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${eins}`)
    .then(res=>res.json()).then(data=>{
        const rate=data.rates[zwei];
        rateMoney.innerText=`1 ${eins} = ${rate} ${zwei}`;
        amount_two.value=(amount_one.value*rate).toFixed(2);
    })
}
swap01.addEventListener('click',()=>{
    // USD => THB || THB => USD
    // ATM = USD || THB = ATM (USD)
    const atm = currency_one.value; //ต้นทาง
    currency_one.value = currency_two.value;
    currency_two.value = atm;
    calculateMoney();
})