let txt = document.getElementById("text");
let num = document.getElementById("number");
let button = document.getElementById("button");
var ctx = document.getElementById("chartHolder").getContent("2d");

let txtArray = [];
let numArray = [];

button.addEventListener("click", run);
function run() {
    txtArray.push(txt.value);
    numArray.push(num.value);
    txt.value = "";
    num.value = 0;
    if(txtArray.length>=5 && numArray.length>=5){
        document.getElementById("container").classList.add("show");
        document.getElementById("container").classList.remove("hidden");
        localStorage.setItem('txtArray ', txtArray);
        localStorage.setItem('numArray ', numArray);
    }
}

let textArray = localStorage.getItem('txtArray');
let numberArray = localStorage.getItem('txtArray');
var chart = new Chart (ctx, {
    type: "bar",
    data: {
        labels: [txt.value],
        datasets: [{
            label: "Chart",
            backgroundColor: "rgb(255,99,132)",
            borderColor: "rgb(255,99,132)",
            data: numberArray,
        }]

    },
    options:{},
});
