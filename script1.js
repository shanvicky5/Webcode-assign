let form = document.getElementById("form");
let search =document.getElementById("search");
let name =" " ;
let type = "";
let address = "";
let phone = "";
let website ="";

form.addEventListener("submit",(e) => e.preventDefault());
console.log("cliked");

try{
fetch(
    'GET https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3'

);
console.log(" receving data");
}catch(err){
    console.log("error in api"+err);
}


var xhr = new XMLHttpRequest();
setTimeout(() =>{
    xhr.open(
    "GET",
    "GET https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3"
    );
    xhr.send();
},4000);
switch(search)

xhr.responseType= "json";
xhr.onload = function(){
    var responseobj = xhr.response;
    var ul =  document.createElement("ul");
    console.log(responseobj[i].city);
    document.appendChild("ul");
    for (var i=0; i < responseobj.lenght; i++){
        var li = document.createElement("li");
        li.className="file"

        var a = document.createElement("a");
        a.innerHTML= responseobj [i].name +"<br>"+
        responseobj[i].type +"<br>"+
        responseobj[i].phone + "<br>"+
        responseobj[i].address + "<br>"+
        responseobj[i].website;
        li.appendChild(a);
        a.appendChild(li);

    }
}