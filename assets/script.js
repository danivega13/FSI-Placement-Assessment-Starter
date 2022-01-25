// NAME UPDATE

let yourName = "Daniela Vega" 

// COOKIE VARIABLES
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let addGingerbread = document.getElementById('add-gb')
let minusGingerbread = document.getElementById('minus-gb')
let minusCC = document.getElementById('minus-cc')
let addCC =  document.getElementById('add-cc')
let minusSugar = document.getElementById('minus-sugar')
let addSugar = document.getElementById('add-sugar')

let updateGbCount = 0
let updateCCcount = 0
let updateSugarCount = 0
let total = 0

// NAME UPDATE
document.getElementById('credit').textContent = `Created by ${yourName}`

// GINGERBREAD EVENT LISTENERS
addGingerbread.addEventListener('click', function() {
   if(addGingerbread){
    updateGbCount++;
    total++;
    document.getElementById('qty-gb').innerHTML = (updateGbCount);
    document.getElementById('qty-total').innerHTML = (total);
   }
})
 
minusGingerbread.addEventListener('click', function(){

    if(updateGbCount > 0){
        updateGbCount --; 
        total--;
        document.getElementById('qty-gb').innerHTML = (updateGbCount);
        document.getElementById('qty-total').innerHTML = (total);
    }


 })

// CHOCOLATE CHIP EVENT LISTENERS

 addCC.addEventListener('click', function() { 
   if(addCC){
    updateCCcount++;
    total++;
    document.getElementById('qty-cc').innerHTML = (updateCCcount);
    document.getElementById('qty-total').innerHTML = (total);
   }
})
 
minusCC.addEventListener('click', function(){

    if(updateCCcount > 0){

        updateCCcount --; 
        total--;
        document.getElementById('qty-cc').innerHTML = (updateCCcount);
        document.getElementById('qty-total').innerHTML = (total);

    }
 })

// SUGAR COOKIE EVENT LISTENERS

addSugar.addEventListener('click', function() {
    if(addSugar){
     updateSugarCount++;
     total++;
    document.getElementById('qty-sugar').innerHTML = (updateSugarCount);
    document.getElementById('qty-total').innerHTML = (total);
    }
 })
 
 minusSugar.addEventListener('click', function(){
     if(updateSugarCount > 0){
 
         updateSugarCount --; 
         total--;
         document.getElementById('qty-sugar').innerHTML = (updateSugarCount);
         document.getElementById('qty-total').innerHTML = (total);
     }
    })