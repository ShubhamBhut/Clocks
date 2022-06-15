setInterval(() =>{

   a = new Date();
   
   const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};

   let date = a.toLocaleDateString(undefined, options);
   let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

   document.getElementById('clock').innerHTML = time +
   '<br/> on ' + date;

})
