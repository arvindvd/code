
var xhr = new XMLHttpRequest();


xhr.open ('POST', 'https://jsonplaceholder.typicode.com/users', true);
{
  
    "id": 11,
    "name": "arvind dubey",
    "username": "arvindd",
    "email": "arv@gmail.com",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "18.2386",
        "lng": "24.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }

xhr. onreadystatechange = function() {
      if(xhr.onreadystatechange === 4 && xhr.status ===200) {
         var response = JSON.parse(xhr .responseText)
        document.getElementById("data")
      }  
    };      

xhr. send();
