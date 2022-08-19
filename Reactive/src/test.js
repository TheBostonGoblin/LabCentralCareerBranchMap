d3.select("div#chartId")
   .append("div")
   // Container class to make it responsive.
   .classed("svg-container", true) 
   .style("display","inline-block")
   .style("position","relative")
   .style("width","100%")
   .style("padding-bottom","100%")
   .style("vertical-align","top")
   .style("overflow","hidden")
   .style("max-width","100px")

   .append("svg")
   .style("display","inline-block")
   .style("position","relative")
   .style("top","0px")
   .style("left","0")
   // Responsive SVG needs these 2 attributes and no width and height attr.
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 1600 800")
   // Class to make it responsive.
   .classed("svg-content-responsive", true)
   // Fill with a rectangle for visualization.
   .append("rect")
   .classed("rect", true)
   .attr("width", 1600)
   .attr("height", 800)
   .style("fill","red")
   .style("stroke","black")
   .style("stroke-width","5px");

//    .svg-container {
//     display: inline-block;
//     position: relative;
//     width: 100%;
//     padding-bottom: 100%; /* aspect ratio */
//     vertical-align: top;
//     overflow: hidden;
//   }
//   .svg-content-responsive {
//     display: inline-block;
//     position: absolute;
//     top: 10px;
//     left: 0;
//   }
  
//   svg .rect {
//     fill: gold;
//     stroke: steelblue;
//     stroke-width: 5px;
//   }