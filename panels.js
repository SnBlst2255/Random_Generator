// Number panel
document.getElementById("gen-num").addEventListener("click", function(){
    const min = document.getElementById("min-num").value;
    const max = document.getElementById("max-num").value;

    if(min == "" || max == ""){
        return;
    }else if(max < min){
        return;
    }

    document.getElementById("num-res").innerHTML = generateRandomNumber(parseInt(min), parseInt(max));
});

document.getElementById("reset-num").addEventListener("click", function(){
    document.getElementById("min-num").value = 0;
    document.getElementById("max-num").value = 10;
    document.getElementById("num-res").innerHTML = "0";
});

// String panel
document.getElementById("gen-str").addEventListener("click", function(){
    const length = parseInt(document.getElementById("length-str").value);
    const letters = document.getElementById("letter-check").checked;
    const numbers = document.getElementById("numbers-check").checked;
    const symbols = document.getElementById("symbols-check").checked;

    if(!length || length < 1){
        return;
    }

    if(!letters && !numbers && !symbols){
        return;
    }

    document.getElementById("str-res").innerHTML = generateRandomString(length, letters, numbers, symbols)
});

document.getElementById("reset-str").addEventListener("click", function(){
    document.getElementById("length-str").value = 8;
    document.getElementById("letter-check").checked = true;
    document.getElementById("numbers-check").checked = true;
    document.getElementById("symbols-check").checked = false;

    document.getElementById("str-res").innerHTML = "ABC";
});

// Color panel
document.getElementById("gen-color").addEventListener("click", function(){
    const minR = document.getElementById("min-r").value;
    const maxR = document.getElementById("max-r").value;
    const minG = document.getElementById("min-g").value;
    const maxG = document.getElementById("max-g").value;
    const minB = document.getElementById("min-b").value;
    const maxB = document.getElementById("max-b").value;

    if (!minR || !maxR || !minG || !maxG || !minB || !maxB) {
        return;
    }

    if(minR < 0 || maxR > 255 || minG < 0 || maxG > 255 || minB < 0 || maxB > 255){
        return;
    }

    document.getElementById("color-res").innerHTML = generateRandomColor(minR, maxR, minG, maxG, minB, maxB);
});

document.getElementById("reset-color").addEventListener("click", function(){
    document.getElementById("min-r").value = 0;
    document.getElementById("max-r").value = 255;
    document.getElementById("min-g").value = 0;
    document.getElementById("max-g").value = 255;
    document.getElementById("min-b").value = 0;
    document.getElementById("max-b").value = 255;

    document.getElementById("color-res").innerHTML = "#000000";
});

// Date panel
document.getElementById("gen-date").addEventListener("click", function(){
    const dateMin = document.getElementById("min-date").value;
    const dateMax = document.getElementById("max-date").value;

    if(!dateMin || !dateMax){
        return
    }

    document.getElementById("date-res").innerHTML = generateRandomDate(dateMin, dateMax);
});

document.getElementById("reset-date").addEventListener("click", function(){
    document.getElementById("min-date").value = "1970-01-01";
    document.getElementById("max-date").value = "1970-01-01";

    document.getElementById("date-res").innerHTML = "01/01/1970";
});
