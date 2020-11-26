const billAmount = document.getElementById('billAmount').value;
const serviceQuality = document.getElementById('serviceQuality').value;
const totalPeople = document.getElementById('totalPeople').value;
const calculateBtn = document.getElementById('calBtn');
// const tip = document.getElementById('tip');

calculateBtn.addEventListener('click', ()=>{

   if(billAmount === "" || serviceQuality == 0){
      window.alert("Please Enter some Values to get this baby up and running!");
  }

  //Check to see if this input is empty or less than or equal to 1
  if(totalPeople === "" || numPeople <= 1){
   numPeople = 1;

   document.getElementById("each").style.display ="none";

   }else{

      document.getElementById("each").style.display =" block";
   }

     //Do soe math!
     var total = (billAmount * serviceQuality) / numPeople;
     total = Math.round(total* 100) / 100;
     total= total.toFixed(2);
    

});