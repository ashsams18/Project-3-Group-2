function buildPlot2(){
  const url = "/pop";
  d3.json(url).then(function(data){
    countries = []
    Y1963 = []
    data.forEach(function(element){
      countries.push(element.Country)
      Y1963.push(element.Y1963)
    })

    let trace1 = {
      x: Y1963,
      y: countries,
      type: "bar",
      name: "bars"
    };

    var data = [trace1];
    
    var layout = {
      title: "Testing",
      showlegend: false
    }

    Plotly.newPlot("plotpop", data, layout);

  })
}


  
    //const data = response;
    // let Country = "Portugal";
    //let Countrydata = response.filter(c => c.Country == "Portugal");
    //console.log(Countrydata);
    // for (let i = 0; i < response.length; i++) {
    //   if (response[i].Country == "Portugal"){ 
    //   console.log(response[i].Y1963)
    //   };
    // };



  

    // let trace1 = {
    //   x: [0, 1, 2, 3, 4, 5],
    //   y: [0, 5, 10, 15, 20, 25],
    //   type: "bar",
    //   name: "bars"
    // };
    
    // const layout = {
    //   scope: "usa",
    //   title: "Country",
    //   showlegend: false,
    //   height: 600,
    //         // width: 980,
    //   geo: {
    //     scope: "usa",
    //     projection: {
    //       type: "albers usa"
    //     },
    //     showland: true,
    //     landcolor: "rgb(217, 217, 217)",
    //     subunitwidth: 1,
    //     countrywidth: 1,
    //     subunitcolor: "rgb(255,255,255)",
    //     countrycolor: "rgb(255,255,255)"
    //   }
    // };

    // Plotly.newPlot("plotpop", data, layout);

    // Plotly.newPlot("plottemp", data);



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
buildPlot2();