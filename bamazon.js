var mysql = require("mysql");
var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


function customerRequest (){
    inquirer
    .prompt([
        {
         type: "input",
         name: "idItem",
         message: "Please enter the ID of the product you would like to purchase"
        },
        {
        type: "input",
        name: "quanity",
        message: "How many of these items do you meed?",
    }
    ])
    .then(answers => {
      

    });

}
customerRequest();















connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);    



    connection.end();
  });
}
