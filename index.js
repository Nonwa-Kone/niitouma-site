// import axios from "axios";

var data = JSON.stringify({
    "collection": "adherents",
    "database": "niitouma",
    "dataSource": "niitouma",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'get',
    url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-icxal/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'CIq5LHirGrpTfEJtR2rxUVYHmJUq9MWtJmeWJ207LAE7MCwLbVntq7Gp9hwenZ1s',
    },
   
};

fetch('https://data.mongodb-api.com/app/application-0-qlzlt/endpoint/data/v1/action/findOne',{
    method: "get",
    mode: "no-cors",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'CIq5LHirGrpTfEJtR2rxUVYHmJUq9MWtJmeWJ207LAE7MCwLbVntq7Gp9hwenZ1s',
    }
}).then(response => response.json())
            
// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });