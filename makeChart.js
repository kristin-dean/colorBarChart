var dataP = d3.json("data/colors.json");

dataP.then(function(data)
{
  console.log(data);
},
function(err)
{
  console.lof(err);
})

var drawChart = function(colorData)
{
  var width = 400;
  var height = 200;
  var barWidth = width/colorData.length;
}
