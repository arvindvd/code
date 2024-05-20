
var xhr = new XMLHttpRequest();


xhr.open ('POST', 'https://thetestingworldapi.com/api/studentsDetails', true);
{
  "id": 1,
  "first_name": "Arving",
  "middle_name": "Vijayanand",
  "last_name": "Dubey",
  "date_of_birth": "02/07/1980"
}

xhr. onreadystatechange = function() {
      if(xhr.onreadystatechange === 4 && xhr.status ===200) {
         var response = JSON.parse(xhr .responseText)
        document.getElementById("data")
      }  
    };      

xhr. send();