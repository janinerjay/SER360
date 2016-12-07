var chosenPatient = false;

function patient(patNum){
    if(patNum==1){
        document.getElementById("allergy").innerHTML = 'Peanuts';
        document.getElementById("height").innerHTML = '67 inches';
        document.getElementById("weight").innerHTML = '115 pounds';
        document.getElementById("age").innerHTML = '56 years and 10 months';
        chosenPatient = true;
    }
    if(patNum==2){
        document.getElementById("allergy").innerHTML = 'None';
        document.getElementById("height").innerHTML = '5 foot 7 inches';
        document.getElementById("weight").innerHTML = '130 pounds';
        document.getElementById("age").innerHTML = '34 years and 5 months';
        chosenPatient = true;
    }
    if(patNum==3){
        document.getElementById("allergy").innerHTML = 'Pollen, grass, air';
        document.getElementById("height").innerHTML = '5 foot 4 inches';
        document.getElementById("weight").innerHTML = '125 pounds';
        document.getElementById("age").innerHTML = '14 years and 7 months';
        chosenPatient = true;
    }
}

function medicationChoice(choice){
    var medChoice = '';
    if (choice==1){
        medChoice = 'Humalog';
        document.getElementById("medication").innerHTML = medChoice;
    }
    if (choice==2){
        medChoice = 'Nomalog';
        document.getElementById("medication").innerHTML = medChoice;
    }
}