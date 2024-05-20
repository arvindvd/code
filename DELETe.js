
var xhr = new XMLHttpRequest();


xhr.open ('DELETE', 'https://jsonplaceholder.typicode.com/users/1', true);
xhr. onreadystatechange = function() {
      if(xhr.onreadystatechange === 4 && xhr.status ===200) {
         var response = JSON.parse(xhr .responseText)
        document.getElementById("data")
      }  
    };      

xhr. send();
