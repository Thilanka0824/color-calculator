const prompt = require('prompt-sync')({sigint: true});

/*

let choose = Number(prompt("Select 1 to combine colors or 2 to deconstruct a color, then press ENTER: "))

if (choose === 1){
    console.log("Let's combine colors");
    color1 = prompt("please choose between 'red', 'blue', or 'yellow' for color 1: ");
    color2 = prompt("please choose between 'red', 'blue', or 'yellow' for color 2: ");

   // ===============[CONSTRUCTOR]====================
    if (color1 + color2 === ("red" + "blue") || color1 + color2 === ("blue" + "red")){
        console.log("red and blue combined make PURPLE")
    } else if (color1 + color2 === ("red" + "yellow") || color1 + color2 === ("yellow" + "red")){
        console.log("red and yellow combined make ORANGE")
    } else if (color1 + color2 === ("blue" + "yellow") || color1 + color2 === ("yellow" + "blue")){
        console.log("blue and yellow combined make GREEN")
    } else {
        console.log("error")
    }

    // ================[DECONSTRUCTOR]=================
} else if (choose === 2){
    console.log("Lets deconstruct colors");
    deconstructColor = prompt("Choose between 'purple', 'orange', or 'green' to deconstruct: ");
} else if (deconstructColor === ("purple")){
    console.log("purple is made by combining RED and BLUE" )
} else if (deconstructColor === ("orange")){
    console.log("orange is made by combining RED and YELLOW")
} else if (deconstructColor === ("green")){
    console.log("green is made by combining BLUE and YELLOW")
} else {
    console.log("error")
}


*/

const str = prompt("pick a color or two: ")

// =====================CONSTRUCT========================
if (str.includes("purple")){
    console.log("purple is made by combining RED and BLUE")
} else if (str.includes("orange")){
    console.log("orange is made by combining RED and YELLOW")
} else if (str.includes("green")){
    console.log("green is made by combining BLUE and YELLOW")
}

// =====================DECONSTRUCT=====================

else if (str.includes("red blue") || str.includes("blue red")){ 
    console.log("red and blue combined make PURPLE") // this happens if 2 colors are picked
} else if (str.includes("red yellow") || str.includes("yellow red")){
    console.log("red and yellow combined make ORANGE")
} else if (str.includes("blue yellow") || str.includes("yellow blue")){
    console.log("blue and yellow combined make GREEN")
} else {
    console.log("error")
}