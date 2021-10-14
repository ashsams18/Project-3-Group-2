function initialise_application() {

    //************************ Add data to Console for exploration *********************/
    
    const url = ""/pop"";
    const dataPromise = d3.json(url);
    console.log("Data Promise: ", dataPromise);
    
    //************************ This is the code for selector*********************/
    
    let dropdown_menu = d3.select("#selDataset");
    
    d3.json(url).then((data) => {
        var dataCountry = data.country;
    console.log(datadataCountryNames);
    
    dataCountry.forEach((element)=> {
        dropdown_menu
        .append("option")
        .text(element)
        .property("value", element);
    });
    