var items = ["item 1", "item 2", "item 3", "item 4"];

var list = document.querySelector("#myList");

items.forEach(function (item) {


    CreateItem(item);

});




//getelementsbyclassname kullandığımız için foreach kullanamayız fakat queryselector kullansaydık rahatlıkla kullanabilirdik



list.addEventListener("click", function (item) {

    if(item.target.tagName== "LI"){
        item.target.classList.toggle("checked");
        ToggleDeleteButton();
    }


});

document.querySelector("#deleteAll").onclick = function(){
   
   var elements = document.querySelectorAll(".checked"); 
    
    elements.forEach(function(item){
       
        item.style.display="none";
        item.classList.remove("checked");
        ToggleDeleteButton();
    });
    
    
}







function ToggleDeleteButton(){
    var checkList=document.querySelectorAll(".checked");
    
    if(checkList.length>0){
        document.querySelector("#deleteAll").classList.remove("d-none");
    }
    else{
        document.querySelector("#deleteAll").classList.add("d-none");
    }
}



document.querySelector("#btnCreate").onclick = function () {

    var item = document.querySelector("#txtItem").value;

    if (item === "") {
        alert("Lütfen bir değer giriniz!");
        return;
    } else {
        CreateItem(item);

        document.querySelector("#txtItem").value = "";
    }

}



function CreateItem(item) {


    var li = document.createElement("li");
    var t = document.createTextNode(item);

    li.className = "list-group-item";
    li.appendChild(t);

    list.appendChild(li);

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    //    classlist.add ile className'in farkı classlist.add eğer class verilen elementin içinde zaten class varsa üstüne ekler fakat className içinde class varsa onları silip bizim eklediğimizi ekler
    //span.classList.add="";


    span.className = "close";
    span.appendChild(text);
    span.style.cursor = "pointer";
    li.appendChild(span);


    span.onclick = function () {
        //close spanının parentElementi li yani linin içinde close spanı var
        var li = this.parentElement;
        li.style.display = "none";
        li.classList.remove("checked");
        ToggleDeleteButton();
    }



}
