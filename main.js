menu_list_array = ["Veg Margherita Pizza",
"Premium veg pizza",
"chees burst pizza",
"bean pizza",
"chilli pizza (super spicy)"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<il>' + menu_list_array[i] + '</il>'   
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for (var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class "card">'
    +'<img src="https://www.pngkit.com/png/full/9-92696_classic-pizza-garden-fresh-pizza-hd.png"/>'
    +menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value
menu_list_array.push(item);
add_item();
}