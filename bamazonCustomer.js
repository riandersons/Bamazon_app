const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require('easy-table')

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
            
    const t = new Table;
    //const productPrice = product.price

    results.forEach(function(product){
      t.cell('Item: ', product.item_id);
      t.cell('Product: ', product.product_name);
      t.cell('Department: ', product.department_name);
      t.cell('Price: ', product.price.toFixed(2));
      t.cell('Quantity on hand: ', product.stock_quantity)
      t.newRow();  
     }); 
    console.log(t.toString());

    start();
   
  });
  }

  function start() {
    inquirer.prompt([{
        name: "item_id",
        type: "input",
        message: "What is the item id of the item you would like to buy?"},
        {
        name: "quantity",
        type: "input",
        message: "How many do you want to buy?"}
        ])
      .then(function(answers) {
       connection.query("SELECT * FROM products WHERE item_id =" + answers.item_id, function(error, results) {
         try{
           let currentPrice = results[0].price;
           const total = (currentPrice * answers.quantity).toFixed(2);
           if(results[0].stock_quantity < answers.quantity){
           console.log("\n\n\n");
           console.log("Insufficient quantity available");
           displayTable();
           exit();
         }
         else{
           connection.query("UPDATE products SET stock_quantity = stock_quantity - " + answers.quantity + 
           " WHERE item_id = " + answers.item_id, function(error, results){
             console.log('Inventory updated');
             console.log('Item ' + answers.item_id + ' inventory was reduced by ' + answers.quantity + ' units!');
             console.log('Your total is $'+ total);
             exit();
           })
         }
         }
      
      catch(e){
          console.log('There was an error in your request');
          exit();
      };
  })})}
        function exit(){
          connection.end();
        }