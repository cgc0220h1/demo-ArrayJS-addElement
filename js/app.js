let index = 0;
let demoArray = Array();

function addValueArray() {
    demoArray[index] = document.getElementById('valueInput').value;
    alert("Phần tử thứ " + index + " vừa được thêm vào với giá trị là: " + demoArray[index]);
    index++;
    document.getElementById('valueInput').value = "";
}

function displayValueArray() {
    let display = "<hr>";
    for (index = 0; index < demoArray.length; index++) {
        display = display + "Phần tử thứ: " + index + " có giá trị là: " + demoArray[index] + "<br>";
    }
    document.getElementById('result').innerHTML = display;
}