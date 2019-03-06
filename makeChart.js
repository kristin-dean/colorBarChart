var dataP = d3.json("colors.json");

dataP.then(function(data)
{
  console.log("data",data);
  drawChart(data, "#JSON");
  drawLegend(data, "#JSONkey");
},
function(err)
{
  console.log(err);
});

var drawChart = function(colorData, idname)
{
  var width = 600;
  var height = 200;
  var barWidth = 400/colorData.length;
  var svg = d3.select(idname)
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return i*barWidth;})
    .attr("y", function (d)
      { return height - d.num*20;})
    .attr("width", barWidth)
    .attr("height", function(d)
      { return d.num*20;})
    .attr("fill", function(d)
      { return d.color;})

svg.selectAll("text")
   .data(colorData)
   .enter()
   .append("text")
   .text(function(d)
      { return d.num;})
   .attr("x", function(d,i)
      { return (i * barWidth) + 22;})
   .attr("y", function(d)
      { return height - (d.num*20)+18;})
   .attr("fill", "white")

}

dataG = d3.csv("favorites.csv");
dataG.then(function(dataName)
{
  console.log("data",dataName);
  drawChart(dataName, "#CSV");
  drawLegend(dataName, "#CSVkey");
},
function(err)
{
  console.log(err);
});

//************************************** function to create legends ******************************************//

var drawLegend = function(colorData, idname)
{
  var width = 200;
  var height = 200;
  var barWidth = 50;
  var svg = d3.select(idname)
              .attr("height", height)
              .attr("width", width);
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x", function(d,i)
      { return 25;})
    .attr("y", function (d, i)
      { return height - i*10;})
    .attr("width", barWidth)
    .attr("height", barWidth)
    .attr("fill", function(d)
      { return d.color;})

svg.selectAll("text")
   .data(colorData)
   .enter()
   .append("text")
   .text(function(d)
      { return d.color;})
   .attr("x", function(d,i)
      { return 30})
   .attr("y", function(d, i)
      { return height - i*10;})
   .attr("fill", "black")

}

