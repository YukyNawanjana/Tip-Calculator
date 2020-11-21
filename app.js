const billAmount = document.getElementById('billAmount').value;
const serviceQuality = document.getElementById('serviceQuality').value;
const totalPeople = document.getElementById('totalPeople').value;
const calculateBtn = document.getElementById('calBtn');


calculateBtn.addEventListener('click', ()=>{

   if(billAmount === "" || serviceQuality == 0 || totalPeople === ""){
      window.alert("Please Enter some Values to get this baby up and running!");
  }

});