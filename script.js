 //+
 let addButtons=Array.from(document.querySelectorAll("#add-button"))
 console.log(addButtons)

 //-
 let minusButtons=Array.from(document.querySelectorAll("#minus-button"))
 console.log(minusButtons)

 //quantité
 let quantitys=Array.from(document.querySelectorAll("#quantity"))
 console.log(quantitys)

 //delete
 let deletes =Array.from(document.querySelectorAll("#delete"))
 console.log(deletes)

 //price
 let prices=Array.from(document.querySelectorAll("#price"))
 console.log(prices)

 //parent
 let parents=Array.from(document.querySelectorAll("#parent"))
 console.log(parents)

 //heart (9aleb el m3ebi wel feragh)
 let hearts=Array.from(document.querySelectorAll("#hear"))
 console.log(hearts)

let arrOfQuantitiy=[]
let arrOfPrices=[]

for(let i in quantitys){
    arrOfQuantitiy[i]=0; //intialistaion (?)
}
for(let i in prices){
    arrOfPrices[i]=+prices[i].innerHTML; // 
}

function updateTotale(){
    let totale=0
    for(let i in quantitys){
totale+=arrOfPrices[i]*arrOfQuantitiy[i];
document.getElementById('totale-price').textContent=`Totale price:$${totale}`
}

}
updateTotale();

//button + 
for(let i in addButtons){
    addButtons[i].addEventListener("click",function(){
arrOfQuantitiy[i]++;
quantitys[i].innerHTML = arrOfQuantitiy[i];
updateTotale();
    });
}

//button -
for(let i in minusButtons){
    minusButtons[i].addEventListener("click",function(){
        if(arrOfQuantitiy[i]>0)
arrOfQuantitiy[i]--;
quantitys[i].innerHTML = arrOfQuantitiy[i];
updateTotale();
    });
}

//delete button
for (let i in deletes){
    deletes[i].addEventListener("click",function(){
arrOfQuantitiy[i]= 0;
updateTotale();
parents[i].remove()

})}
//heart button
  for(let i in hearts){
    hearts[i].addEventListener("click",function(){
    if(hearts[i].getAttribute("src")=="coeur feragh.jpg")
        hearts[i].setAttribute("src",'coeur m3ebi.jpg');
    else
        hearts[i].setAttribute('src','coeur feragh.jpg');
    });
  }



 