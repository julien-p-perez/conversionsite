function rootCalc() {
    var a = +document.getElementById('a').value;
    var b = +document.getElementById('b').value;
    var c = +document.getElementById('c').value;

    d = (b**2)- 4*a*c;

    if (d > 0) {

        sol1 = ((b * -1) + math.sqrt(d)) / (2*a);
        sol2 = ((b * -1) - math.sqrt(d)) / (2*a);

        document.getElementById('write0').textContent = "Because the discriminant is greater than 0, there are two real solutions to this equation:";
        document.getElementById('write1').textContent = 'Your discriminant value is ' + d + '.'; 
        document.getElementById('write2').textContent = "x = " + sol1 + ' or ' + "x =  " +sol2; 
    }


    else if (d < 0) {
        document.getElementById('write0').textContent = "Because the discriminant is less than 0, there are no real solutions to this equation: ";
        document.getElementById('write1').textContent = "Your discriminant value is " + d + ".";
        document.getElementById('write2').textContent = -b/(2*a) + " ± " + math.sqrt(d) + 1/(2*a);
        
    }

    else if (d = 0) {
        document.getElementById('write0').textContent = "Because the discriminant is equal to 0 there is one real identical solution to this equation: ";
        document.getElementById('write1').textContent = "Your discriminant value is " + d + "."; 
        document.getElementById('write2').textContent = "x = " + ((-b)/(2*a));

    }

    else {
        alert('error bro'); 
    }


}   
