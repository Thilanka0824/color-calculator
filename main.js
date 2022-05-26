const prompt = require('prompt-sync')({sigint: true});

const str = prompt("pick a color or two: ")

// =====================DECONSTRUCT========================
if (str.includes("purple")){
    console.log("purple is made by combining RED and BLUE")
} else if (str.includes("orange")){
    console.log("orange is made by combining RED and YELLOW")
} else if (str.includes("green")){
    console.log("green is made by combining BLUE and YELLOW")
}

// =====================CONSTRUCT=====================

else if (str.includes("red blue") || str.includes("blue red")){ 
    console.log("red and blue combined make PURPLE") 
} else if (str.includes("red yellow") || str.includes("yellow red")){
    console.log("red and yellow combined make ORANGE")
} else if (str.includes("blue yellow") || str.includes("yellow blue")){
    console.log("blue and yellow combined make GREEN")
} else {
    console.log("error")
}