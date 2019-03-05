var dataP = d3.json("colors.json");

dataP.then(function(data)
{
  console.log("data",data);
},
function(err)
{
  console.log(err);
});

var drawChart = function(colorData)
{
  var width = 400;
  var height = 200;
  var barWidth = width/colorData.length;
}
