let tableId = 4;

document.getElementById("addRacer").addEventListener("click", () => {
    let table = document.getElementById("raceResults");
    console.log("This is the table:", table);
    let row = table.insertRow(tableId);
    // The below line is assigning an ID to the newly created row below. For now, this serves almost no function.
    // However, it is intended to be able to further alter table data for future purposes.
    row.setAttribute("id", `${tableId}`);
    // No longer needed, but a good example of how to set multiple attributes.
    // row.setAttribute("scope", "row");

    // The first cell insert is being bolded. Note the syntax and concatenation to create this.
    row.insertCell(0).innerHTML = "<b>" + document.getElementById("place").value + "</b>";
    row.insertCell(1).innerHTML = document.getElementById("contestant").value;
    row.insertCell(2).innerHTML = document.getElementById("number").value;
    row.insertCell(3).innerHTML = document.getElementById("time").value;
    console.log("This is the inserted data into the new row:", row);
    // This will increment the id after each row is added.
    tableId++;
    // The below four lines will reset the placeholder values in the form to blank. It is more visually appealing.
    document.getElementById("place").value = '';
    document.getElementById("contestant").value = '';
    document.getElementById("number").value = '';
    document.getElementById("time").value = '';
});