window.onload = function() {
  var BaseURL = 'http://127.0.0.1:5000'
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
                <div class='like1'>点赞</div>
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
function sub() {
  var BaseURL = 'http://127.0.0.1:5000'
   var postRequest = new XMLHttpRequest();
   postRequest.withCredentials= true;
   postRequest.open("POST", BaseURL + '/message/post_message');
   message=document.getElementById('message').value;
    var postData = {
        'message': String(message)       
    }
   postRequest.setRequestHeader("Content-type", "application/json")
   postRequest.send(JSON.stringify(postData))
   postRequest.onreadystatechange = function() {
    if (postRequest.readyState == 4) {
    if (postRequest.status == 200) { 
        console.log(postRequest.responseText)
        confirm('发布成功！')
        var myObj = JSON.parse(postRequest.responseText);
        var fatherComponent = document.getElementsByClassName('OUTBOX')[0];
        var b=myObj.nickname;
          var c=myObj.message;
        var bub = document.createElement("div");
         bub.innerHTML = `
             <div class='bubble_my' style="display:block">
                  <div class='username_my'>${b} </div>
                  <div class='date2'>[日期]</div>
                  <div class='str2'>${c} </div>
                  <div class='like2'>点赞</div>
                  <div class='del'>删除留言</div>
                 <div class='re'><a href="留言修改界面.html" target="_self">修改留言</a></div>
  </div>
            `  
        fatherComponent.appendChild(bub); 
    
       } 
        else 
       { confirm(postRequest.responseText)}
       }
    }
} 
