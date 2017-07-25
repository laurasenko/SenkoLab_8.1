$(document).ready(function() {

//Set up variable with grocery items that have name, price, & quantity variables.
var grocery = [
  { name: "Apples",
    price: 2,
    quantity: 3},
  { name: "Oranges",
    price: 2,
    quantity: 3},
  { name: "Strawberries",
    price: 3,
    quantity: 3},
  { name: "Pineapple",
    price: 4,
    quantity: 1},
  { name: "Nutella",
    price: 5,
    quantity: 2}
];

  /*  function addItem(){
        var $item = $("<li>");
        var $input = $('#newItem');
        $input.val(newItem.innerHTML);
        $input.val(newItem.innerHTML);
        var $listItems = $("#listItems");
        $listItems.append($li);
    }*/

    for (var i = 0; i < grocery.length; i++)
    {
        var $item = $("<li>");
        $item.text("Item: " + grocery[i].name + "  Price: " + "$" + grocery[i].price.toFixed(2) + "  Quantity: " + grocery[i].quantity);
        $("#listItems").append($item);
    }

     function totalBillNoTax () {
         var itemNsame;
         var itemPrice;
         var itemQuantity;
         var totalBillNoTax = 0;
         //for loop counts indexes in array
         // stores values into item variables
         // prints list items
         //multiplies item prices by their quantities and adds items together for total bill
         for (i = 0; i < grocery.length; i++)
         {
           totalBillNoTax += grocery[i].price * grocery[i].quantity;

         //console.log( "Item: " + itemName + "  Price: " + "$" + itemPrice.toFixed(2) + "  Quantity: " + itemQuantity);}
         //prints bill w/o tax and converts to 2 decimal points
         //console.log ("Total bill without tax = $" + totalBillNoTax.toFixed(2));
          }
          return totalBillNoTax;  //return this into variable that can be accessed in totalBill function
      }
     //calculates tax
     function calcTax(subtotal) {
          return subtotal * 0.06;
     }
$('button').on('click', function()
{
     //function totalBill() {
          var noTax = totalBillNoTax();
          var total = noTax + calcTax(noTax); /*totalBillNoTax();*/
          var $target = $("#total");
          $target.text(total.toFixed(2));
    //  }
});

});
