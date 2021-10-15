function buildPlot() {

    const url = "/pop";
    d3.json(url).then(function(response) {

    console.log(response);
  
    const data = response;

    const layout = {
      scope: "usa",
      title: "Country",
      showlegend: false,
      height: 600,
            // width: 980,
      geo: {
        scope: "usa",
        projection: {
          type: "albers usa"
        },
        showland: true,
        landcolor: "rgb(217, 217, 217)",
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: "rgb(255,255,255)",
        countrycolor: "rgb(255,255,255)"
      }
    };

    Plotly.newPlot("plotpop", data, layout);

    Plotly.newPlot("plottemp", data);
  });
}
    // let dropdown_menu = d3.select("#selDataset");
    
    // d3.json(url).then((data) => {
    //     var dataCountry = data.country;
    // console.log(datadataCountryNames);
    
    // dataCountry.forEach((element)=> {
    //     dropdown_menu
    //     .append("option")
    //     .text(element)
    //     .property("value", element);
    // });
buildPlot();