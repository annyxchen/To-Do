var groceryList=$(`.groceryList`);
var button=$(`.submit`)
button.on("click",addGrocery);


function addGrocery(){
  var Groceries=$(`input`).val();
  groceryList.append(`<p>${Groceries}</p>`);




  event.preventDefault();
}
