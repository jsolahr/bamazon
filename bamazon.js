var mysql = require("mysql");
var inquirer = require('inquirer');
var cTable = require ("console.table");


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


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    customerRequest();
  })  

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
            message: "How many of these items do you need?",
            }
        ])
          .then(answers => {
          var itemNum = answers.idItem;
          var quanityNum = answers.quanity;
          
          console.log("You selected item: " + itemNum + " and chose a quanity of: " + quanityNum, "\n");
          console.log("I'm working on getting your order!","\n");
        
          //GETTING ITEMS
          connection.query("SELECT * FROM products WHERE ?", [{id : answers.idItem}], function(err, res) {
            
            console.table(res);
            
            if (err) throw err;

            
          //CHECKING CURRENT STOCK and SUBTRACTING current from REMAINING
            var current_quanity = res[0].stock_quanity;
			     	console.log("Current quantity in stock: " , current_quanity);
             var price = res[0].price;
             var remaining_quanity = current_quanity - quanityNum;
            console.log("Remaining quantity in stock: " , remaining_quanity);
          
            if (current_quanity > quanityNum) {

              console.log("Amount Remaining: " + remaining_quanity);
              console.log("Total Cost: " + (quanityNum * price) + "\n");
            
            //UPDATING ITEMS  
            connection.query("UPDATE products SET stock_quanity=? WHERE id=?",
            [
              remaining_quanity, itemNum,
              ],
              function(err, res){
                if (err) throw err;
              })
            
            connection.query("SELECT * FROM products", function(err, res) {
              if (err) throw err;
                console.table(res);
          
              })
            }
            
              connection.end();
          })
        })
      }
    }