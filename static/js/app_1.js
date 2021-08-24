//import the data from data.js
const tableData = data;

// reference the html table using d3
var tbody = d3.select("tbody"); //tell javascript to look for tbody tags in the html file

function buildTable(data){
    tbody.html("") //clears any existing data in the table 

    // loop through each object in the data and append a row and cells
    // for each value in the row 
    data.forEach( (dataRow) => {
        // create new row in the table 
        let row = tbody.append("tr"); 
        // loop through each field in the dataRow and 
        // add each value as a table cell (td)
        Object.values(dataRow).forEach( (val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};


function handleClick(){
    // grab the datetime value from the filter:
    // d3.select(#datetime) tells D3 to look for #datetime id in the html tags
    // .property("value") says to grab the information found and store it in date
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter the data using that date
    if(date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data 
    // if no date was entered, then filteredData will just be the 
    // original raw tableData
    buildTable(filteredData);
};

// attach an event to listen for the form button 
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);
