elnm = localStorage["elname"];

if (elnm == "H") {
    document.getElementById('elname').innerHTML = "H";
    document.getElementById('elname').style.fontSize = "70px";

    document.getElementById('est').innerHTML = "H";
    document.getElementById('est').style.fontSize = "70px";


    document.getElementById('grp').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; 1";
    document.getElementById('prd').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; 1";
    document.getElementById('blk').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S";

    document.getElementById('p').innerHTML = "1";
    document.getElementById('e').innerHTML = "1";
    document.getElementById('n').innerHTML = "0";


    document.getElementById('enx').innerHTML = "HYDROGEN";

    document.getElementById('ehct').innerHTML = "Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.<br><br>In 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.<br><br>French scientist Antoine Lavoisier later named the element hydrogen in 1783."
    }

if (elnm == "He") {
    document.getElementById('elname').innerHTML = "He";
    document.getElementById('elname').style.fontSize = "70px";
    document.getElementById('ec12').style.visibility = "visible";

    document.getElementById('est').innerHTML = "He";
    document.getElementById('est').style.fontSize = "70px";


    document.getElementById('grp').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; 18";
    document.getElementById('prd').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp; 1";
    document.getElementById('blk').innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; S";

    document.getElementById('p').innerHTML = "2";
    document.getElementById('e').innerHTML = "2";
    document.getElementById('n').innerHTML = "2";

    document.getElementById('enx').innerHTML = "HELIUM";

    document.getElementById('ehct').innerHTML = "French astronomer Jules Janssen obtained the first evidence of helium during the solar eclipse of 1868.<br><br>Norman Lockyer and Edward Frankland suggested the name helium for the new element.<br><br>In 1895, Sir William Ramsay discovered helium in the uranium mineral cleveite.<br><br>It was independently discovered in cleveite by Per Teodor Cleve and Abraham Langlet.";
}

if (elnm == "Li") {
    document.getElementById('elname').innerHTML = "Li";
    document.getElementById('elname').style.fontSize = "70px";
    document.getElementById('ec12').style.visibility = "visible";

    document.getElementById('two').style.visibility = "visible";
    document.getElementById('ec21').style.visibility = "visible";
}