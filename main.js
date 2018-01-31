"use strict";

console.log("DATE SHIT MR OR MRS.BROWSER");

let startTime = Date.now();
console.log("start time", startTime);

for (let i = 0; i < 2000000; i++) {
    let x = i +i/2 * 6;
}


let bigDataRequest = new XMLHttpRequest();

bigDataRequest.addEventListener("load", bigDataComplete);
bigDataRequest.addEventListener("error", bigDataFailed);

function bigDataComplete(event){
    console.log("event", event);
    if (event.target.status === 200){
        let bigData = JSON.parse(event.target.responseText);
        console.log("data", bigData);
        console.log("newTime", Date.now() - startTime);
    }else{
        console.log("check the spelling of your file");
    }
}

function bigDataFailed(event) {
    console.log("oops something went wrong");
}

bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
bigDataRequest.send();

let dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event){
    console.log("colors have loaded");
    let colorData = JSON.parse(event.target.responseText);
    console.log("colorData", colorData);
    showData(colorData);
};

function showData(wookie){
    let colorDiv = document.getElementById("all-my-colors");
    let colorData = "";
    for (let item in wookie){
        let colorItem = wookie[item];
        colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`;
    };

    colorDiv.innerHTML = colorData;
    console.log("the colors are done", Date.now()); 
}

function dataRequestFailed(event){
    console.log("colors did not load", event);

}

dataRequest.open("GET", "color.json");
dataRequest.send();
























