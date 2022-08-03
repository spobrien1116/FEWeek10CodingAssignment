let tableId = 4;
// let button = document.getElementById("addRacer");
// const place = document.getElementById("place");
// const contestant = document.getElementById("contestant");
// const number = document.getElementById("number");
// const time = document.getElementById("time");

document.getElementById("addRacer").addEventListener("submit", () => {
    let table = document.getElementById("raceResults");
    let row = table.insertRow(tableId);
    row.setAttribute("id", `${tableId}`);
    row.insertCell(0).innerHTML = document.getElementById("place").value;
    row.insertCell(1).innerHTML = document.getElementById("contestant").value;
    row.insertCell(2).innerHTML = document.getElementById("number").value;
    row.insertCell(3).innerHTML = document.getElementById("time").value;
    tableId++;
    document.getElementById("place").value = '';
    document.getElementById("contestant").value = '';
    document.getElementById("number").value = '';
    document.getElementById("time").value = '';
});