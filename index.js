function myFunction() { 
    var value  = +document.getElementById('submit').value; 

    var kelvin = 0; 
    var fahrenheit = 0;
    var celsius = 0; 

    
    if (document.getElementById('celsius').checked) {
        kelvin = (value + 273.15); 
        fahrenheit = (value * 9/5) + 32; 

        alert("Your temperature in Kelvin is: " + kelvin + " and in Fahrenheit is: " + fahrenheit) + "°"; 

    }

    if (document.getElementById('fahrenheit').checked) {
        kelvin = (value - 32) * (5/9) + 273.15; 
        celsius = (value - 32) * 5/9;
        
        alert("Your temperature in celsius is " + celsius + "°" + " and in Kelvin is: " + kelvin); 

    }

    if  (document.getElementById('kelvin').checked) {

        if (value < 0) {
            alert("Kelvin can't be negative stupid");
        
        }

        else {
            celsius = value - 273.15;
            fahrenheit = (value - 273.15) * (9/5) +32;

            alert("Your temperature in celsius is: " + celsius + "°" + " and in fahreneheit is: " + fahrenheit + "°");

        }

        
    }
}