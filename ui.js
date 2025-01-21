import DataGenerator from "./generator.js";
const dataGenerator = new DataGenerator();

// Number panel
document.getElementById("gen-num").addEventListener("click", () => {
    const min = document.getElementById("min-num").value;
    const max = document.getElementById("max-num").value;

    if(min == "" || max == ""){
        return;
    }else if(max < min){
        return;
    }

    const result = dataGenerator.generateRandomNumber(parseInt(min), parseInt(max));
    document.getElementById("num-res").textContent = result;
});

document.getElementById("reset-num").addEventListener("click", () => {
    document.getElementById("min-num").value = 0;
    document.getElementById("max-num").value = 10;
    document.getElementById("num-res").innerHTML = "0";
});

// String panel
document.getElementById("gen-str").addEventListener("click", () => {
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


    const result = dataGenerator.generateRandomString(length, letters, numbers, symbols);
    document.getElementById("str-res").textContent = result;
});

document.getElementById("reset-str").addEventListener("click", () => {
    document.getElementById("length-str").value = 8;
    document.getElementById("letter-check").checked = true;
    document.getElementById("numbers-check").checked = true;
    document.getElementById("symbols-check").checked = false;

    document.getElementById("str-res").innerHTML = "ABC";
});

// Color panel
document.getElementById("gen-color").addEventListener("click", () => {
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

    const result = dataGenerator.generateRandomColor(minR, maxR, minG, maxG, minB, maxB);
    document.getElementById("color-res").textContent = result;
});

document.getElementById("reset-color").addEventListener("click", () => {
    document.getElementById("min-r").value = 0;
    document.getElementById("max-r").value = 255;
    document.getElementById("min-g").value = 0;
    document.getElementById("max-g").value = 255;
    document.getElementById("min-b").value = 0;
    document.getElementById("max-b").value = 255;

    document.getElementById("color-res").innerHTML = "#000000";
});

// Date panel
document.getElementById("gen-date").addEventListener("click", () => {
    const dateMin = document.getElementById("min-date").value;
    const dateMax = document.getElementById("max-date").value;

    if(!dateMin || !dateMax){
        return
    }

    const result = dataGenerator.generateRandomDate(dateMin, dateMax);
    document.getElementById("date-res").innerHTML = result;
});

document.getElementById("reset-date").addEventListener("click", () => {
    document.getElementById("min-date").value = "1970-01-01";
    document.getElementById("max-date").value = "1970-01-01";

    document.getElementById("date-res").innerHTML = "01/01/1970";
});

//switch

const switches = document.getElementsByClassName("switch-item");

for(let i = 0; i < switches.length; i++){
    switches[i].addEventListener("click", function(e){
        const switchPanel = document.getElementById("switch-panel");
        const switchPanelItems = switchPanel.children;
        
        for(let i = 0; i < switchPanelItems.length; i++){
            switchPanelItems[i].classList.remove("selected")
        }
        
        e.target.classList.add("selected");

        const panels = document.getElementsByClassName("generator-panel");
        Object.keys(panels).forEach(key => {
            panels[key].classList.add("hidden");
        });

        const switchPanelId = e.target.id.replace("switch", "panel");
        document.getElementById(switchPanelId).classList.remove("hidden");
    });
}
