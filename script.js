Values = [];
let width = 0;

const next = event => {
   
    currentevent = event.currentTarget;
    currentValue = currentevent.innerText;
    progressBar = document.getElementById("bar");
    


    Values.push({
         currentValue,
    });

    allSections = document.querySelectorAll(".sections");
    for (i = 1; i < allSections.length;  i++){
        if(i === Values.length){
            allSections[i].style.display = "block";
            allSections[i-1].style.display = "none";
            width = width + 20;
            progressBar.style.width = width + '%';
        }
    }
    
}

const datasubmit = event => {
    event.preventDefault();
    confirmation = document.getElementById("confrimation");
    foamName = document.getElementById("foam-name");
    foamEmail = document.getElementById("foam-email");
    
    if(foamName.value !==  ""){ 
        foamName.style.border = "";
        confirmation.innerText = `Hi ${foamName.value} !!`;

        
        if(foamEmail.value !== ""){
        allSections[i-1].style.display = "block";
        allSections[i-2].style.display = "none";
        width = width + 20;
        progressBar.style.width = width + '%';
        foamEmail.style.border = "";
        }
        else{
            foamEmail.style.border = "2px red solid";
        }

    }
    else{
        foamName.style.border = "2px red solid";
    }

    
}