// getElementsByClassName method to apply styles for all the items in the list
const fruit = document.getElementsByClassName("fruit")
fruit[2].style.backgroundColor= ("yellow");

for (let i =0; i<fruit.length; i++){
    fruit[i].style.fontWeight = ("bold");
}