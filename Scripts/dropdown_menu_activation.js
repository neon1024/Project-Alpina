
var firstToggle = false;

function activateDropdownMenu(type) {

    if(type == "models")
        if(firstToggle == false)
        {
            firstToggle = !firstToggle;

            document.getElementById("option-All-the-models").style.display = "block";
        }

    document.getElementById(type + '-dropdown-menu').style.display = "block";

    document.getElementById("nav").style.borderBottomColor = "transparent";

    if(type == "search")
        document.getElementById("close-search-btn").style.display = "block";

    if(type != "models")
        document.getElementById("models-dropdown-menu").style.display = "none";

    if(type != "search-and-buy")
        document.getElementById("search-and-buy-dropdown-menu").style.display = "none";

    if(type != "electric-mobility")
        document.getElementById("electric-mobility-dropdown-menu").style.display = "none";

    if(type != "owners")
        document.getElementById("owners-dropdown-menu").style.display = "none";

    if(type != "bmw-world")
        document.getElementById("bmw-world-dropdown-menu").style.display = "none";
    
    if(type != "search")
    {
        document.getElementById("search-dropdown-menu").style.display = "none";

        document.getElementById("close-search-btn").style.display = "none";
    }

}
