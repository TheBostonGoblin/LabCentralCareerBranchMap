/*
    NOTE:
    This is the SquareSpace Code Injection version of the Javascript file
    (Due to Font and other CSS factors imposed by squarespace it doesnt look the same in standalone form)
*/

{/* <script src="https://d3js.org/d3.v7.min.js"></script>
<script type="module"> */}

//All data for the diagram. This is in JSON format
const data = {
    //Data primarily controls the color of each of the segments.
    segments:
        [
            {
                name: "Venture Capital / Business Development-A",
                color: "#ff450c"
            },
            {
                name: "Research & Development-A",
                color: "#4ad2ce"
            },
            {
                name: "Biomanufacturing-A",
                color: "#ffd31a"
            },
            {
                name: "Lab Administration / Lab Operations-A",
                color: "#7c1f94"
            },
            {
                name: "Venture Capital / Business Development-M",
                color: "#ee5325"
            },
            {
                name: "Research & Development-M",
                color: "#58c4c1"
            },
            {
                name: "Biomanufacturing-M",
                color: "#fcc733"
            },
            {
                name: "Lab Administration / Lab Operations-M",
                color: "#752b88"
            },
            {
                name: "Venture Capital / Business Development-E",
                color: "#da5e39"
            },
            {
                name: "Research & Development-E",
                color: "#63b9b7"
            },
            {
                name: "Biomanufacturing-E",
                color: "#e8bd47"
            },
            {
                name: "Lab Administration / Lab Operations-E",
                color: "#70347f"
            },
        ],
        /*
            The career paths that each position will sit under 
            This data is also used to save and load the size of the
            careerpath or TOP labels. 
            
            The positon and with data is saved
            inorder to properly center the text within each of the 
            labels information is stored and then used later when text BBox is created
        */
    careerPaths: [
        {
            name: "VC/Business Development",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        },
        {
            name: "Research & Development",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        },
        {
            name: "Biomanufacturing",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        },
        {
            name: "Lab Administation/Lab Ops",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        }
    ],
    /* 
        similar to careerPath this is used to generate the text that would be used in 
        career stage labels . Position and Dimensions are saved to center the text when BBox
        is created later
    */
    careerStage: [
        {
            name: "Advanced",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        },
        {
            name: "Middle",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        },
        {
            name: "Entry",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        }

    ],
    jobs: [
        // Venture Capital / Business Development Positions
        //Entry
        {
            name: "Management Consultant Entry-Level",
            posX: 150,
            posY: 700,
            width: 0,
            height: 0,
            salary: "$65,000 - $75,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Master's or PhD preferred",
            reqExp: "None",
            desExp: "Often hired right out of college"
            ,
            id: 0,
            yAdjustment: 0
        }
        //Mid
        , {
            name: "Analyst",
            posX: 60,
            posY: 510,
            width: 0,
            height: 0,
            salary: "$85,000 - $95,000",
            eduReq: "Bachelor's Degree",
            eduDes: "MBA or PhD",
            reqExp: "Early stage diligence or scouting experience",
            desExp: "Experience in external innovation sourcing and evaluating"
            ,
            id: 1,
            yAdjustment: 0
        }
        , {
            name: "Management Consultant Mid-level",
            posX: 160,
            posY: 510,
            width: 0,
            height: 0,
            salary: "$100,000 - $115,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Master's or PhD or MD preferred",
            reqExp: "Consulting/Biotech/Pharma or startup experience preferred",
            desExp: "Experience in external innovation sourcing and evaluating"
            ,
            id: 2,
            yAdjustment: 0
        }
        , {
            name: "Research Director",
            posX: 60,
            posY: 410,
            width: 0,
            height: 0,
            salary: "$100,000 - $120,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Master's or PhD or MD preferred",
            reqExp: "Leading research",
            desExp: "Having scientific publications and track record of interesting research that translates to potential products"
            ,
            id: 3,
            yAdjustment: 0
        }
        , {
            name: "Business Development Scout",
            posX: 160,
            posY: 410,
            width: 0,
            height: 0,
            salary: "$95,000 - $115,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Master'r or PhD preferred",
            reqExp: "Understanding of biotech or pharma",
            desExp: "Scouting experience preferred"
            ,
            id: 4,
            yAdjustment: 0
        }
        //Advanced
        , {
            name: "Principal or Associate",
            posX: 300,
            posY: 525,
            width: 0,
            height: 0,
            salary: "$120,000 - $140,000",
            eduReq: "MBA, PhD or MD usually required",
            eduDes: "MBA, PhD or MD usually required",
            reqExp: "Sourcing and supporting scientific diligence and several years of experience in VC",
            desExp: "Board experience desired but not required",
            id: 5,
            yAdjustment: 0
        }
        , {
            name: "Venture Capitalist Partner",
            posX: 195,
            posY: 260,
            width: 0,
            height: 0,
            salary: "$150,000 - $170,000",
            eduReq: "MBA, PhD or MD usually required",
            eduDes: "MBA, PhD or MD usually required",
            reqExp: "Successful portfolio of investments",
            desExp: "Board experience required.  Connections for fundraising ",
            id: 6,
            yAdjustment: 0
        }
        , {
            name: "Business Director Transaction Lead",
            posX: 90,
            posY: 225,
            width: 0,
            height: 0,
            salary: "$120,000 - $140,000",
            eduReq: "Bachelor's Degree",
            eduDes: "MBA, PhD or MD preferred",
            reqExp: "BD experience",
            desExp: "Understanding of biotech or pharma",
            id: 7,
            yAdjustment: 0
        }



    ],
    /* 
        dictates which node is connected to what
        in this current example node 0 or the first 
        job node is connected to the second, third, and fourth node
    */
    links: [
        {
            source: 0,
            target: 1
        },
        {
            source: 0,
            target: 2
        },
        {
            source: 0,
            target: 3
        }

    ]
}

/*
    setting up svg, all the content of the diagram
    is contained within the svg. the additional css
    /style is inplace to prevent coursor change when
    the cursor is over text 
*/
const width = 1800;
const height = 800;
const body = d3.select("body")
    .style("-moz-user-select", "none")
    .style("-khtml-user-select", "none")
    .style("-webkit-user-select", "none")
    .style("user-select", "none");

    //this is to select the element that the svg will be conneted appended to
var svg = d3.select(".content-wrapper .content div div")
	.append("svg")
    .attr("id", "diagramSVG")
    .attr("width", width)
    .attr("height", height)
	.style("display","block")
	.style("margin","auto");

    //css to center the svg on the page
  d3.select(".content-wrapper .content div div")
  	.style("display","flex")
  	.style("justify-items","center")
  	.style("align-items","center")
  	.style("text-align","center");
  


let currentSource = null;
//when a node is clicked the tooltip will disappear breifly to allow for better view of connections
let nodeAnimationCompleted = true;

//creating ToolTip
const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("background-color", "cornsilk")
    .style("border", "solid 3px black")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("max-width", "250px")
    .style("viibility", "hidden")
    .style("text-align", "center")
	.style("text-font","25px")
	.style("font-weight","bold")
    .style("display", "none")
	.style("z-index", 10);

const dataSegments = svg.selectAll("segment").data(data.segments);
const dataTopLabel = svg.selectAll("tLabel").data(data.careerPaths);
const dataSideLabel = svg.selectAll("sLabel").data(data.careerStage);
const dataJobs = svg.selectAll("job").data(data.jobs);
const dataLinks = svg.selectAll("link").data(data.links);
let globalLaneWidth;
let globalLaneHeight;
svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "grey")
    .attr("stroke-width", "6px")
    .attr("stroke", "black");
swimingLaneCreation(4, 3);
topLabels();
sideLabel();

jobsCreation();
/*
    moving the svg down and over by 15
    adding a onclick function to reset the diagram
 */
svg.selectAll("#diagram")
    .attr("transform", "translate(15,15)")
    .on("click", resetDiagram);

//ensuring on hover functions as well as animaitons are executed
let jobs = d3.selectAll("#job")
    .on("mouseover", function (d) {
        //obtains the data associated with this specfic node and feeds this into the html elemnt
        //This will display the appropraite data associated with each of the nodes

        if (nodeAnimationCompleted) {
            /*
                through the job creation process 
            */
            let overNodeData = d3.select(d.path[1]).datum();
            tooltip.html(`
                <p class="toolTipHTML" id="position">${overNodeData.name}</p>
                <h5 class="toolTipHTML" id="salary">Salary: ${overNodeData.salary}</h5>
                <h5 class="toolTipHTML" id="reqEDU">Required Eduction: ${overNodeData.eduReq}</h5>
                <h5 class="toolTipHTML" id="desEDU">Desired Eduction: ${overNodeData.eduDes}</h5>
                <h5 class="toolTipHTML" id="reqEXP">Required Expirence: ${overNodeData.reqExp}</h5>
                <h5 class="toolTipHTML" id="desEXP">Desired Expirence: ${overNodeData.desExp}</h5>
            `)
                .style("display", "block");

            d3.selectAll(".toolTipHTML").style("border-bottom", "2px solid black")
                .style("border-bottom", "2px solid black")
                .style("color", "#24211D");
            //controls the opacity animation that will have the tooltip fade in and out
            tooltip.transition()
                .duration(500)
                .style("opacity", 1);
        }

    })
    .on("mousemove", function (event) {
        /*
            tooltip width and height information taken to center
            the tooltip to the cursor as well as ensure the tooltip
            stays within the diagram
        */
        let toolTipBox = document.querySelector(".tooltip");
        let currentWidth = toolTipBox.offsetWidth;
        let currentHeight = toolTipBox.offsetHeight;

        /*Getting the bounding box  for the svg element*/
        let svgElem = document.querySelector("#diagramSVG");
        let svgBBox = svgElem.getBoundingClientRect();

        //HoverAbove code: style("top", `${event.pageY - (currentHeight + currentHeight / 8)}px`)
        //HoverBelow code: style("top", `${event.pageY + (currentHeight / 8)}px`)
        /* 
            The ori
        */
        tooltip.style("top", function () {

            if ((event.pageY - currentHeight - (currentHeight / 8)) - svgBBox.top> 0) {
                
                return `${event.pageY - currentHeight - (currentHeight / 8)}px`;
            }
            else {
                return `${event.pageY + (currentHeight / 8)}px`;
            }

        }).style("left", function () {

            if ((event.pageX - (currentWidth / 2)) <= svgBBox.left) {
                return `${svgBBox.left}px`;
                // this will keep the tooltip within the html page(ive tried to keep it within the svg element but its behavior was inconsistant)
            }
            else if ((event.pageX + (currentWidth / 2)) >= svgBBox.right) {
                return `${svgBBox.right}px`;
            }
            else {
                return `${event.pageX - (currentWidth / 2)}px`;
            }
            

        });
        console.log("diagramTop:" + svgBBox.top);
        console.log("diagramLeft:" + svgBBox.left);
        console.log("left:" + (event.pageX - (currentWidth / 2)));
        console.log("top:" + ((event.pageY - currentHeight - (currentHeight / 8))- svgBBox.top));

        console.log("differnce:" + (svgBBox.top - (event.pageY - currentHeight - (currentHeight / 8))));


    })
    .on("mouseout", function () {
        if (nodeAnimationCompleted) {
            //the tooltip can interfere with onhover functionality so the tooltip is move up and away from the diagram
            tooltip.transition()
                .delay(150)
                .duration(500)
                .style("opacity", 0)
                .on("end", function () { tooltip.style("display", "none") });
        }
    });


function jobsCreation() {
    let currentGElement = null;
    let enteringText = dataJobs
        .enter()
        .append("g")
        .attr("x", function (d) { return d.posX })
        .attr("y", function (d) { return d.posY })
        .attr("id", "job")
        .attr("class", function (d) { return d.name.split(" ").join("") })
        .append("text")
        .attr("x", function (d) { return d.posX })
        .attr("y", function (d) { return d.posY })
        .attr("id", "jobText")
        .attr("class", function (d) { return d.name })
        .text(function (d) { return d.name })
    	.style("font-size","small")
        .call(wrap, 30)
        .each(function (d, i) {

            let currnetText = d3.select(this);
            let objectToAppend = d3.select(this.parentNode);
            let padding = 20;
            let jobText = d3.selectAll("#jobText")
            let pastX = null;
            let newX = null;
            let pastbbox = objectToAppend.node().getBBox();
            objectToAppend.append("rect")
                .attr("id", "dumbRect")
                .attr("x", function () {
                    pastX = pastbbox.x - (padding / 2);
                    return pastbbox.x - (padding / 2);
                })
                .attr("y", function () { return pastbbox.y - (padding / 2) })
                .attr("width", function (d) { return pastbbox.width + padding })
                .attr("height", function (d) { return pastbbox.height + padding })
                .remove();

            d3.selectAll(this.children).style("text-anchor", "middle");
            let bbox = objectToAppend.node().getBBox();
            newX = bbox.x - (padding / 2);

            let difference = Math.abs(pastX - newX);
            objectToAppend.append("rect")
                .attr("x", bbox.x - (padding / 2))
                .attr("y", bbox.y - (padding / 2))
                .attr("width", function (d) { d.width = bbox.width; return bbox.width + padding })
                .attr("height", function (d) { d.height = bbox.height; return bbox.height + padding })
                .attr("rx", 6)
                .attr("ry", 6)
                .attr("id", "jobBox")
                .style("fill", "white")
                .style("stroke", "black")
                .style("stroke-width", "1.5px");
            objectToAppend.attr("transform", `translate(${difference},${-objectToAppend.datum().yAdjustment})`);
        })
        .raise();
    d3.selectAll("#job")
        .on("click", generateLinks);

}
function generateLinks() {
    let source = null;
    for (let x = 0; x < data.jobs.length; x++) {
        let selectedClass = d3.select(this.children[1]).attr("class");
        if (data.jobs[x].name == selectedClass) {//get the second child element this will ALWAYS be the text element
            source = x;
        }

    }
    lineCreation(source);
    d3.selectAll("#job").raise();


};
function lineCreation(source) {
    currentSource = source;
    svg.selectAll("#jobBox").style("fill", "white");
    svg.selectAll("#jobBox").style("opacity", "0.3");
    svg.selectAll("#jobText").style("opacity", "0.3");
    svg.selectAll("line").remove();
    let sourceX = null;
    let sourceY = null;
    let targetX = null;
    let targetY = null;

    let sourceFound = false;
    let entering = dataLinks
        .enter()
        .each(function (d) {
            const objectToAppend = d3.select(this);
            if (d.source == source) {
                sourceX = (data.jobs[d.source].posX + (data.jobs[d.source].width / 2));
                sourceY = (data.jobs[d.source].posY - (data.jobs[d.source].height / 2) - 1);
                targetX = (data.jobs[d.target].posX + (data.jobs[d.target].width / 2));
                targetY = (data.jobs[d.target].posY - (data.jobs[d.target].height / 2));
            }
            objectToAppend.append("line")
                .attr("class", "link")
                .attr("x1", sourceX)
                .attr("y1", sourceY)
                .attr("x2", sourceX)
                .attr("y2", sourceY)
                .attr("stroke-width", "3px")
                .attr("stroke", "white")
                .attr("fill", "none")
                .transition()
                .duration(1500)
                .attr("x2", targetX)
                .attr("y2", targetY);

        });


    selectedNodes();

}
function swimingLaneCreation(vertLaneNum, horiLaneNum) {
    let currentPosX = 0;
    let currentPosY = 50;
    const laneWidth = (width - 80) / vertLaneNum;
    const laneHeight = (height - 80) / horiLaneNum;
    globalLaneWidth = laneWidth;
    globalLaneHeight = laneHeight;
    const numOfLanes = vertLaneNum * horiLaneNum;
    let modeCounter = horiLaneNum;
    const firstRowHeight = laneHeight + 50;
    const firstColumnWidth = laneWidth + 50;
    let entering = dataSegments
        .enter()
        .append("rect")
        .attr("x", function (a, i) {
            if (i == 0) {
                return currentPosX;
            }
            else if (i % vertLaneNum == 0) {
                currentPosX = 0;
                return currentPosX;
            }
            else {
                currentPosX += laneWidth;
                return currentPosX;
            }
        })
        .attr("y", function (a, i) {
            if (i == 0) {
                return currentPosY;
            }
            else if (i % vertLaneNum == 0) {
                currentPosY += laneHeight;

                return currentPosY;
            }
            else {
                return currentPosY;
            }
        })
        .attr("width", `${laneWidth}`)
        .attr("height", `${laneHeight}`)
        .attr("fill", function (d) {
            return d.color;
        })
        .attr("stroke-width", "2px")
        .attr("stroke", "black")
        .attr("id", "diagram");
};
function topLabels() {
    let currentPosX = 0;
    const currentPosY = 0;
    let currentWidth = globalLaneWidth;
    const currentHeight = 50;

    let entering = dataTopLabel
        .enter()
        .append("g")
        .attr("class", "careerLabelV")
        .attr("id", "diagram")

    entering.append("rect")
        .attr("x", function (d, i) {
            if (i == 0) {
                d.posY = currentPosY;
                d.posX = currentPosX;
                return currentPosX;
            }
            else {
                currentPosX += currentWidth;
                d.posX = currentPosX;
                return currentPosX;
            }
        })
        .attr("y", function (d) { d.posY = currentPosY; return currentPosY; })
        .attr("width", function (d) { d.width = currentWidth; return currentWidth })
        .attr("height", function (d) { d.height = currentHeight; return currentHeight })
        .attr("fill", "white")
        .attr("stroke-width", "2px")
        .attr("stroke", "black")
        .attr("id", "vRect");


    let positionX = 0;
    let positionY = 0;
    entering
        .append("text")
        .text(function (d) { return d.name })
        .each(function (d) {

            let currentText = d3.select(this);
      		currentText.style("text-font","5%")
      		.style("font-weight","bold");
            let objectToAppend = d3.select(this.parentNode);
            let bbox = currentText.node().getBBox();//bbox is created to get the demensions and position of each of the labels

            let newPosX = d.posX + (d.width - bbox.width) / 2;//the difference in width /2 will give us the centered X
            let newPosY = d.posY + (d.height - (bbox.height)/2);//the differnce in height will give you 

            currentText
                .attr("x", function (d) { return newPosX })//gets x position from width and increasing starting at zero transformation already accounted for
                .attr("y", function (d) { return newPosY });//accounting for transformation

            currentText.raise();
        });

    d3.selectAll(".careerLabel");
}

function sideLabel() {
    const currentPosX = width - 50 - (2 * 15);//the width of the side labels is 50 and adjustment for the transformation of 15
    let currentPosY = 50;
    const currentHeight = globalLaneHeight;
    const currentWidth = 50;
    let entering = dataSideLabel
        .enter()
        .append("g")
        .attr("class", "careerLabelH")
        .attr("id", "diagram");

    entering.append("rect")
        .attr("x", function (d) { d.posX = currentPosX; return currentPosX })
        .attr("y", function (d, i) {
            if (i == 0) {

                d.posY = currentPosY;
                return currentPosY;
            }
            else {
                currentPosY += globalLaneHeight;
                d.posY = currentPosY;
                return currentPosY;
            }
        })
        .attr("width", function (d) { d.width = currentWidth; return currentWidth })
        .attr("height", function (d) { d.height = globalLaneHeight; return globalLaneHeight })
        .attr("fill", "white")
        .attr("stroke-width", "2px")
        .attr("stroke", "black");

    entering.append("text")
        .text(function (d) { return d.name })
        .each(function (d) {
            let currentText = d3.select(this);
            let parentNode = d3.select(this.parentNode);
            let bbox = currentText.node().getBBox();
      
      currentText.style("font-weight","bold");

            //because the items are rotated 90 degrees height is affecting the x axis instead of the Y and vis versa so the differnce is the width - text(height)
            let newPosX = d.posX + (d.width - bbox.height) / 2;
            let newPosY = d.posY + (d.height - bbox.width) / 2;

            /*
            implimenting the transformation (unlike in other 
            cases where objects have been moved globally)
            we must transform locally so rotation occours
            around the text origin
            */

            currentText
                .attr("transform", function (d) { return `translate(${newPosX},${newPosY}) rotate(90)` });
        })
}

function resetDiagram() {
    svg.selectAll("line").remove();
    svg.selectAll("#jobBox")
        .transition()
        .duration(600)
        .style("fill", "white")
        .style("opacity", "1.0");

    svg.selectAll("#jobText")
        .transition()
        .duration(600)
        .style("opacity", "1.0");
}
function selectedNodes() {
    tooltip.style("opacity", 0);
    nodeAnimationCompleted = false;
    dataLinks
        .enter()
        .each(function (d, i) {
            //if the source has been found this means the node has targets and these will be highlighted as well
            if (d.source == currentSource) {

                let sourceNode = d3.select(`.${data.jobs[currentSource].name.split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "skyblue").style("opacity", "1.0");

                let targetNodes = d3.select(`.${data.jobs[d.target].name.split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "PaleVioletRed").style("opacity", "1.0");

                let sourceText = d3.select(`.${data.jobs[currentSource].name.split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0");

                let targetText = d3.select(`.${data.jobs[d.target].name.split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0")
                //.on("end",setTimeout(function(){nodeAnimationCompleted = true;},100));
            }
            //in the event that the node has no target it. It will simply be the only highlighted node
            else if (d.source != currentSource && data.jobs[currentSource].name != null) {
                tooltip.style("display", "none");
                let sourceNode = d3.select(`.${data.jobs[currentSource].name.split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "skyblue").style("opacity", "1.0");

                let sourceText = d3.select(`.${data.jobs[currentSource].name.split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0")
                //.on("end",setTimeout(function(){nodeAnimationCompleted = true;},100));
            }
            setTimeout(function () { nodeAnimationCompleted = true; }, 1500);

        });
};

/*Citing code (Mike, B (Feb 2022) D3 JS V3. https://bl.ocks.org/mbostock/7555321)
this is code is used to wrap text in d3 js based on spacing
if their is a space within the text this will generate a new line*/
function wrap(text, width) {
    text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 20.6,
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0,
            tspan = text.text(null)
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", function (d) { return dy + "px" });
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan")
                    .attr("x", function (d) {
                        let newNumber = parseInt(x);
                        let addition = newNumber + 30;
                        return parseInt(newNumber)
                    })
                    .attr("y", y)
                    .attr("dy", ++lineNumber * lineHeight + dy + "px")
                    .text(word);
            }

        }

        /*
        the code used to wrap text within the each of the job nodes also displaces them
        from their original position we store the readjustment of the Y position within the 
        node to use later in job creation to re-adjust the position to its proper location
        */
        let adjustedY = lineNumber * lineHeight + dy;
        let parent = d3.select(this.parentNode);
        d3.select(this.parentNode).datum().yAdjustment = adjustedY;
    });
}
{/* </script> */}