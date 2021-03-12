window.onload = function() {
  var BaseURL = 'http：//8.129.238.142/zzj'
  var getRequest = new XMLHttpRequest()
  getRequest.withCredentials= true; 
  getRequest.open('GET', BaseURL + '/users/show_all_message') 
  getRequest.send()
  getRequest.onreadystatechange = function() {
    if (getRequest.readyState == 4)
     {  if (getRequest.status == 200) 
     {  console.log(getRequest.responseText)
        var a = getRequest.response;
        var all = JSON.parse(getRequest.responseText);
        var fatherComponent = document.getElementsByClassName('OUTBOX')[0];
        for(var i =0; i<a.length; i++)
        {var b=all[i].username;
          var c=all[i].message;
           var message = document.createElement("div");
            message.innerHTML = `
             <div class='bubble_other' style="display:block">
                <div class='username_other'> ${b} </div>
                <div class='date1'>[日期]</div>
                <div class='str1'> ${c} </div>
             </div>
            `  
            fatherComponent.appendChild(message);       
        }
     } 
      else {alert(getRequest.responseText)
     }
    }
 }
}
