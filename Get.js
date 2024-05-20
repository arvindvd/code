
var xhr = new XMLHttpRequest();


xhr.open ('GET', 'https://thetestingworldapi.com/api/studentsDetails/4165325', true);
xhr. onreadystatechange = function() {
      if(xhr.onreadystatechange === 4 && xhr.status ===200) {
         var response = JSON.parse(xhr .responseText)
        document.getElementById("data")
      }  
    };      

xhr. send();