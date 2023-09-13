// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});
// Set up list
//add items
//remove items
//have items been bought
let grocery_list = [];


options();

function showItems(){
    console.log("--------Grocery List----------");
    grocery_list.forEach((item,index)=> {
        console.log(`Item: ${index + 1}`);
        console.log(`Name: ${item.name}`);
        console.log(`Quantity: ${item.quantity}`);
        console.log(`Price: ${item.price}`);
        console.log(`Bought: ${item.bought ? 'Yes' : 'No'}`);
    });
    options();
}


function addingItemstolist(){
        rl.question("Enter item name: " , (name) =>{
            rl.question("Quantity: " ,(quantity) =>{
                rl.question("Price: ", (price) =>{
                    grocery_list.push({
                        name,
                        quantity: Number(quantity),
                        price: Number(price),
                        bought: false,
                    });
                    console.log("Item added to grocery list");
                    options();
                });
            });
        });
       
    }

function removeItems(){
    if(grocery_list.length === 0){
        console.log("List is Empty");
        options();
        return;
    }
    rl.question("Enter the index of item you want to remove: ", (index) =>{
        if(index >=0 && index <= grocery_list.length){
            const removedItem = grocery_list.splice(index - 1, 1);
            console.log(`Deleted Item: ${removedItem[0].name}`);
        }else{
            console.log("Invalid item index. No items were deleted")
        }
        options();
    })

}

function checkout(){
    if(grocery_list.length === 0){
        console.log("Grocery list is Empty");
        options();
        return;
    }

    rl.question("Enter the index of the item to buy: ", (index) => {
        if (index >=0 && index <= grocery_list){
            grocery_list[index-1].bought = true;
            console.log(`${grocery_list[index -1].name} has been bought`);
        }else{
            console.log("Invalid index. No items were bought");
        }
        options();
    });

}


 //Main options
function options(){
    rl.question(
       " What would you like to do? \n1) Show List \n2) Add Items \n3) Remove Items \n4) Checkout \n5) Exit \n", (answer) => {
        switch (answer) {
            case '1':
                showItems();
                break;
            case '2':
                addingItemstolist();
                break;
            case '3':
                removeItems();
                break;
            case '4':
                checkout();
                break; 
            case '5':
                console.log("GoodBye!");
                rl.close(); 
                break;          
            default:
                console.log("Invalid choice. Please try again?");
                options();
                break;
        }
       }
    )
}