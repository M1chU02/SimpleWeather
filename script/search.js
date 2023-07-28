const api = '3d0e75b1809f78f44935c36ada7b307f';
function weatherApp()
{
    var cityForm = document.getElementById("cityform").value;
    if(cityForm!="")
    {
        let input = document.getElementById("cityform");
        input.value = "";
        main(cityForm, api);
        hour(cityForm, api);
        more(cityForm, api); 
        var mainbody = document.getElementById("all");
        var formbody = document.getElementById("weatherform");
        mainbody.style.visibility = "visible";
        formbody.style.visibility = "hidden";   
    }
    else
    {
        location.reload;
        console.log("blad");
    }
}

function changeCity()
{
    var cityinput = prompt("Enter city: ");
    const hourly_div = document.getElementById("hourlyforecast");
    hourly_div.innerHTML = "";
    main(cityinput, api);
    hour(cityinput, api);
    more(cityinput, api); 
}