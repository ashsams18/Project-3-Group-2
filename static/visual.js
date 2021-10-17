function selectionChanged(htmlSelect) {
  console.log("Selection changed!!!");
  updateDashboard(htmlSelect.value);
 }

 function updateDashboard(countryIndex){
   buildPlot2(countryIndex);
   buildPlot3(countryIndex);
   buildPlot4(countryIndex);
 }


function buildPlot2(countryIndex) {
  if(countryIndex == -1)
  {
    $("#plotpop").html("");
    $("#plotpop").text("You have not made any selections!!!!!!!!!");
     return;
  }
  else{
    $("#plotpop").html("");
  }
  const url = "/pop";
  d3.json(url).then(function (data) {
    countries = []
    Y1963 = []
    Y1973 = []
    Y1983 = []
    Y1993 = []
    Y2003 = []
    Y2013 = []
    data.forEach(function (element) {
      countries.push(element.Country)
      Y1963.push(element.Y1963)
      Y1973.push(element.Y1973)
      Y1983.push(element.Y1983)
      Y1993.push(element.Y1993)
      Y2003.push(element.Y2003)
      Y2013.push(element.Y2013)
      // console.log(countries[0])
    });


    countryName = countries[countryIndex];
    let singleY1963 = Y1963[countryIndex];
    let singleY1973 = Y1973[countryIndex];
    let singleY1983 = Y1983[countryIndex];
    let singleY1993 = Y1993[countryIndex];
    let singleY2003 = Y2003[countryIndex];
    let singleY2013 = Y2013[countryIndex];

    x_data = ["Y1973", "Y1983", "Y1993", "Y2003", "Y2013"];
    y_data = [singleY1973, singleY1983, singleY1993, singleY2003, singleY2013];

    console.log(countryName);
    console.log(x_data);
    console.log(y_data);
    let trace1 = {
      x: x_data,
      y: y_data,
      type: "bar",
      name: "bar"
    };
    var data = [trace1];
    var layout = {
      title: countryName + " Population over Years",
      showlegend: false
    }

    Plotly.newPlot("plotpop", data, layout);
  });
}

function buildPlot3(countryIndex) {
  if(countryIndex == -1)
  {
    $("#plottemp").html("");
    $("#plottemp").text("You have not made any selections!!!!!!!!!");
     return;
  }
  else{
    $("#plottemp").html("");
  }
  const url = "/temp";
  d3.json(url).then(function (data) {
    countries = []
    Y1963 = []
    Y1973 = []
    Y1983 = []
    Y1993 = []
    Y2003 = []
    Y2013 = []
    data.forEach(function (element) {
      countries.push(element.Country)
      Y1963.push(element.Y1963)
      Y1973.push(element.Y1973)
      Y1983.push(element.Y1983)
      Y1993.push(element.Y1993)
      Y2003.push(element.Y2003)
      Y2013.push(element.Y2013)
      // console.log(countries[0])
    });


    countryName = countries[countryIndex];
    let singleY1963 = Y1963[countryIndex];
    let singleY1973 = Y1973[countryIndex];
    let singleY1983 = Y1983[countryIndex];
    let singleY1993 = Y1993[countryIndex];
    let singleY2003 = Y2003[countryIndex];
    let singleY2013 = Y2013[countryIndex];

    x_data = ["Y1973", "Y1983", "Y1993", "Y2003", "Y2013"];
    y_data = [singleY1973, singleY1983, singleY1993, singleY2003, singleY2013];

    console.log(countryName);
    console.log(x_data);
    console.log(y_data);
    let trace1 = {
      x: x_data,
      y: y_data,
      type: "bar",
      name: "bar"
    };
    var data = [trace1];
    var layout = {
      title: countryName + " Temperature over Years",
      showlegend: false
    }

    Plotly.newPlot("plottemp", data, layout);
  });
}

function buildPlot4(countryIndex) {
  if(countryIndex == -1)
  {
    $("#poptemp").html("");
    $("#poptemp").text("You have not made any selections!!!!!!!!!");
     return;
  }
  else{
    $("#poptemp").html("");
  }
  const url = "/pop";
  d3.json(url).then(function (data) {
    countries = []
    Y1963 = []
    Y1973 = []
    Y1983 = []
    Y1993 = []
    Y2003 = []
    Y2013 = []
    data.forEach(function (element) {
      countries.push(element.Country)
      Y1963.push(element.Y1963)
      Y1973.push(element.Y1973)
      Y1983.push(element.Y1983)
      Y1993.push(element.Y1993)
      Y2003.push(element.Y2003)
      Y2013.push(element.Y2013)
      // console.log(countries[0])
    });


    countryName = countries[countryIndex];
    let singleY1963 = Y1963[countryIndex];
    let singleY1973 = Y1973[countryIndex];
    let singleY1983 = Y1983[countryIndex];
    let singleY1993 = Y1993[countryIndex];
    let singleY2003 = Y2003[countryIndex];
    let singleY2013 = Y2013[countryIndex];

    x_data = ["Y1973", "Y1983", "Y1993", "Y2003", "Y2013"];
    y_data = [singleY1973, singleY1983, singleY1993, singleY2003, singleY2013];

    console.log(countryName);
    console.log(x_data);
    console.log(y_data);

    const url = "/temp";
  d3.json(url).then(function (data) {
    countries = []
    Y1963 = []
    Y1973 = []
    Y1983 = []
    Y1993 = []
    Y2003 = []
    Y2013 = []
    data.forEach(function (element) {
      countries.push(element.Country)
      Y1963.push(element.Y1963)
      Y1973.push(element.Y1973)
      Y1983.push(element.Y1983)
      Y1993.push(element.Y1993)
      Y2003.push(element.Y2003)
      Y2013.push(element.Y2013)
      // console.log(countries[0])
    });


    countryName = countries[countryIndex];
    let singleY1963 = Y1963[countryIndex];
    let singleY1973 = Y1973[countryIndex];
    let singleY1983 = Y1983[countryIndex];
    let singleY1993 = Y1993[countryIndex];
    let singleY2003 = Y2003[countryIndex];
    let singleY2013 = Y2013[countryIndex];

    x_data = ["Y1973", "Y1983", "Y1993", "Y2003", "Y2013"];
    y_data = [singleY1973, singleY1983, singleY1993, singleY2003, singleY2013];

    console.log(countryName);
    console.log(x_data);
    console.log(y_data);

    let trace1 = {
      x: x_data,
      y: y_data,
      type: "lines",
      name: "lines"
    };
    let trace2 = {
      x: x_data,
      y: y_data,
      type: "lines",
      name: "lines"
    };
    var data = [trace1, trace2];
    var layout = {
      title: countryName + " Population Vs Temperature over Years",
      showlegend: false
    }

    Plotly.newPlot("poptemp", data, layout);
  });
  }
  )}

updateDashboard(countryIndex = -1);