
function activateOption(option) {
    
    event.preventDefault();

    document.getElementById("option-" + option).style.display = "block";

    if(option != "All-the-models")
        document.getElementById("option-" + "All-the-models").style.display = "none";

    if(option != '1')
        document.getElementById("option-" + '1').style.display = "none";

    if(option != '2')
        document.getElementById("option-" + '2').style.display = "none";

    if(option != '3')
        document.getElementById("option-" + '3').style.display = "none";

    if(option != '4')
        document.getElementById("option-" + '4').style.display = "none";
        
    // if(option != '5')
    //     document.getElementById("option-" + '5').style.display = "none";

    // if(option != '6')
    //     document.getElementById("option-" + '6').style.display = "none";

    // if(option != '7')
    //     document.getElementById("option-" + '7').style.display = "none";

    // if(option != '8')
    //     document.getElementById("option-" + '8').style.display = "none";

    if(option != 'X')
        document.getElementById("option-" + 'X').style.display = "none";

    if(option != 'Z')
        document.getElementById("option-" + 'Z').style.display = "none";

    if(option != 'M')
        document.getElementById("option-" + 'M').style.display = "none";

    if(option != 'i')
        document.getElementById("option-" + 'i').style.display = "none";

    if(option != "Plug-in-Hybrids")
        document.getElementById("option-" + "Plug-in-Hybrids").style.display = "none";

    if(option != "Concept-Cars")
        document.getElementById("option-" + "Concept-Cars").style.display = "none";

}
