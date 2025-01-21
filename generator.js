export default class DataGenerator{
    generateRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    generateRandomString(length, letters, numbers, symbols){

        let charSet = "";
        let result = "";
    
        if(letters){
            charSet += "abcdefghijklmnopqrstuvwxyz"
        }
    
        if(numbers){
            charSet += "0123456789"
        }
    
        if(symbols){
            charSet += "!@#$%&?*";
        }
    
        charSet = charSet.split("").sort(() => Math.random() - 0.5).join('');;
    
        for(let i = 0; i < length; i++){
            result += charSet[this.generateRandomNumber(0, charSet.length)];
        }
    
        return result;
    }

    generateRandomColor(rMin, rMax, gMin, gMax, bMin, bMax){
        const R = this.generateRandomNumber(rMin, rMax);
        const G = this.generateRandomNumber(gMin, gMax);
        const B = this.generateRandomNumber(bMin, bMax);
    
        return `#${R.toString(16).padStart(2, '0')}${G.toString(16).padStart(2, '0')}${B.toString(16).padStart(2, '0')}`;
    }

    generateRandomDate(minDate, maxDate){
        const min = Date.parse(minDate);
        const max = Date.parse(maxDate);
    
        if(min > max){
            return document.getElementById("date-res").innerHTML;
        }
    
        const result = new Date(this.generateRandomNumber(min, max));
    
        return `${(result.getMonth() + 1).toString().padStart(2, '0')}/${result.getDate().toString().padStart(2, '0')}/${result.getFullYear()}`;
    }
}