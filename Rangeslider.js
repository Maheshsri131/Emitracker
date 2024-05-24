const x = document.getElementById("tp");
const a = document.getElementById("amount");
a.innerHTML = x.value;
x.oninput = function() {
   a.innerHTML = this.value;
}


const z=document.getElementById("tq");
const b=document.getElementById("rate");
b.innerHTML=z.value;
z.oninput=function(){
   b.innerHTML=this.value;
}


const e=document.getElementById("tz");
const f=document.getElementById("months");

f.innerHTML=e.value;
e.oninput=function(){
  f.innerHTML=this.value;
}


function showpay() {
      var princ = document.calc.loan.value;
      var month = document.calc.month.value;
      var perce  = document.calc.rate.value;
      var interest   = (princ*month*perce)/100; /*must include taxes, depending on your country, in my case is 16%*/

      
      document.calc.pay.value = Number((princ/month)+interest);
    // payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))
  }


  function totalpay(){
      var princ = document.calc.loan.value;
      var month = document.calc.month.value;
      var perce  = document.calc.rate.value;

      var interest   = (princ*month*perce)/100;

      document.calc.total.value= Number(princ)+interest;

  }


  document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault();
});