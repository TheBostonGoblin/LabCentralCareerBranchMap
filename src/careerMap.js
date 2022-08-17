const data = {
    segments:
        [
            {
                name: "Venture Capital / Business Development-A",
                color: "#82b0bb"
            },
            {
                name: "Research & Development-A",
                color: "#fbdc82"
            },
            {
                name: "Biomanufacturing-A",
                color: "#7fb396"
            },
            {
                name: "Lab Administration / Lab Operations-A",
                color: "#e79b77"
            },
            {
                name: "Venture Capital / Business Development-M",
                color: "#a1c4cc"
            },
            {
                name: "Research & Development-M",
                color: "#fce5a1"
            },
            {
                name: "Biomanufacturing-M",
                color: "#9fc6b0"
            },
            {
                name: "Lab Administration / Lab Operations-M",
                color: "#edb499"
            },
            {
                name: "Venture Capital / Business Development-E",
                color: "#c0d7dd"
            },
            {
                name: "Research & Development-E",
                color: "#fdedc0"
            },
            {
                name: "Biomanufacturing-E",
                color: "#bfd9cb"
            },
            {
                name: "Lab Administration / Lab Operations-E",
                color: "#f3cdbb"
            },
        ],
    careerPaths: [
        {
            name: "Venture Capital/Business Development",
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
            name: "Lab Administration/Lab Operations",
            posX: 0,
            posY: 0,
            width: 0,
            height: 0
        }
    ],
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
        // Venture Capital / Business Development 
        //Entry
        {
            name: "Management Consultant Entry-Level",
            posX: 495,
            posY: 640,
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
        // Venture Capital / Business Development 
        // Mid
        , {
            name: "Analyst",
            posX: 460,
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
            posX: 560,
            posY: 510,
            width: 0,
            height: 0,
            salary: "$100,000 - $115,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Master's or PhD or MD preferred",
            reqExp: "Either Consulting Biotech Pharma or startup experience are preferred",
            desExp: "Experience in external innovation sourcing and evaluating"
            ,
            id: 2,
            yAdjustment: 0
        }
        , {
            name: "Research Director",
            posX: 460,
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
            posX: 560,
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
        // Venture Capital / Business Development 
        // Advanced
        , {
            name: "Principal or Associate",
            posX: 600,
            posY: 250,
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
            posX: 520,
            posY: 160,
            width: 0,
            height: 0,
            salary: "$150,000 - $170,000",
            eduReq: "MBA, PhD or MD usually required",
            eduDes: "MBA, PhD or MD usually required",
            reqExp: "Successful portfolio of investments",
            desExp: "Board experience required. Having connections for fundraising ",
            id: 6,
            yAdjustment: 0
        }
        , {
            name: "Business Director Transaction Lead",
            posX: 440,
            posY: 270,
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
        //Career Info Research & Development
        //Entry
        , {
            name: "Glasswash/Lab Technician",
            posX: 780,
            posY: 750,
            width: 0,
            height: 0,
            salary: "$35,000 - $50,000",
            eduReq: "Certificate",
            eduDes: "Associates/Bachelors in Science",
            reqExp: "N/A",
            desExp: "N/A",
            id: 8,
            yAdjustment: 0
        }
        , {
            name: "Research Assistant/Associate",
            posX: 760,
            posY: 680,
            width: 0,
            height: 0,
            salary: "$45,000 - $65,000",
            eduReq: "Associates Degree +2 years or Bachelors in Science",
            eduDes: "Bachelors or Masters",
            reqExp: "N/A",
            desExp: "N/A",
            id: 9,
            yAdjustment: 0
        }
        , {
            name: "Associate Scientist",
            posX: 885,
            posY: 610,
            width: 0,
            height: 0,
            salary: "$60,000 - $75,000",
            eduReq: "Bachelors",
            eduDes: "Masters or PhD",
            reqExp: "N/A",
            desExp: "N/A",
            id: 10,
            yAdjustment: 0
        }
        , {
            name: "Data Analyst",
            posX: 715,
            posY: 610,
            width: 0,
            height: 0,
            salary: "$55,000 - $75,000",
            eduReq: "Bachelors",
            eduDes: "Masters",
            reqExp: "Experience in object-oriebted programming (Python/R) and data visualization",
            desExp: "Previous analytics/metrics related internship",
            id: 11,
            yAdjustment: 0
        }
        //Career Info Research & Development
        //Mid
        , {
            name: "Lead/Senior/Managing Scientist",
            posX: 755,
            posY: 480,
            width: 0,
            height: 0,
            salary: "$110,000 - $130,000",
            eduReq: "Bachelors",
            eduDes: "Masters or PhD",
            reqExp: "N/A",
            desExp: "N/A",
            id: 12,
            yAdjustment: 0
        }
        , {
            name: "Computational Biologist / Bioinformastician",
            posX: 775,
            posY: 410,
            width: 0,
            height: 0,
            salary: "$120,000 - $155,000",
            eduReq: "Masters",
            eduDes: "Masters or PhD",
            reqExp: "N/A",
            desExp: "N/A",
            id: 13,
            yAdjustment: 0
        }
        //Career Info Research & Development
        //Advanced
        , {
            name: "Principal Scientist",
            posX: 770,
            posY: 280,
            width: 0,
            height: 0,
            salary: "$150,000 - $170,000",
            eduReq: "PhD",
            eduDes: "PhD",
            reqExp: "N/A",
            desExp: "N/A",
            id: 14,
            yAdjustment: 0
        }
        , {
            name: "Director/VP of Research",
            posX:835,
            posY: 210,
            width: 0,
            height: 0,
            salary: "$170,000 - $200,000+",
            eduReq: "PhD",
            eduDes: "PhD, PhD/MD",
            reqExp: "N/A",
            desExp: "N/A",
            id: 15,
            yAdjustment: 0
        }
        , {
            name: "CSO/CTO",
            posX: 805,
            posY: 120,
            width: 0,
            height: 0,
            salary: "$170,000 - $200,000+",
            eduReq: "PhD",
            eduDes: "PhD, PhD/MD",
            reqExp: "N/A",
            desExp: "N/A",
            id: 16,
            yAdjustment: 0
        }
        //Career Biomanufacturing
        //entry
        , {
            name: "Biomanufacturing Technician",
            posX: 1105,
            posY: 720,
            width: 0,
            height: 0,
            salary: "$40,000 - $55,000",
            eduReq: "Certificate",
            eduDes: "Bachelor's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 17,
            yAdjustment: 0
        }
        , {
            name: "Quality Assurance (QA) Assistant",
            posX: 990,
            posY: 720,
            width: 0,
            height: 0,
            salary: "$40,000 - $55,000",
            eduReq: "Certificate",
            eduDes: "Bachelor's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 18,
            yAdjustment: 0
        }
        , {
            name: "Quality Control (QC) Assistant",
            posX: 1175,
            posY: 650,
            width: 0,
            height: 0,
            salary: "$40,000 - $55,000",
            eduReq: "Certificate",
            eduDes: "Bachelor's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 19,
            yAdjustment: 0
        }
        , {
            name: "Process/Production Technician",
            posX: 1005,
            posY: 620,
            width: 0,
            height: 0,
            salary: "$40,000 - $60,000",
            eduReq: "Certificate",
            eduDes: "Bachelor's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 20,
            yAdjustment: 0
        }
        //Career Biomanufacturing
        //Mid
        , {
            name: "Production Supervisor",
            posX: 1105,
            posY: 520,
            width: 0,
            height: 0,
            salary: "$70,000 - $100,000",
            eduReq: "Bachelor's ",
            eduDes: "Bachelor's and Master's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 21,
            yAdjustment: 0
        }
        , {
            name: "Quality Assurance (QA) Manager",
            posX: 1005,
            posY: 450,
            width: 0,
            height: 0,
            salary: "$95,000 - $120,000",
            eduReq: "Bachelor's + 5 Years Experience",
            eduDes: "Master's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 22,
            yAdjustment: 0
        }
        , {
            name: "Quality Control (QC) Manager",
            posX: 1115,
            posY: 420,
            width: 0,
            height: 0,
            salary: "$95,000 - $120,000",
            eduReq: "Bachelor's + 5 Years Experience",
            eduDes: "Master's",
            reqExp: "N/A",
            desExp: "N/A",
            id: 23,
            yAdjustment: 0
        }
        //Career Biomanufacturing
        //Advanced
        , {
            name: "Process Development Engineer",
            posX: 1135,
            posY: 280,
            width: 0,
            height: 0,
            salary: "$100,000 - $130,000",
            eduReq: "Bachelor's and Master's ",
            eduDes: "Bachelor's and Master's, 10 years experience",
            reqExp: "N/A",
            desExp: "N/A",
            id: 24,
            yAdjustment: 0
        }
        , {
            name: "Quality Assurance/ Quality Control (QA/QC) Director",
            posX: 995,
            posY: 220,
            width: 0,
            height: 0,
            salary: "$120,000 - $150,000 +",
            eduReq: "Bachelor's and Master's ",
            eduDes: "Bachelor's and Master's, 10 years experience",
            reqExp: "N/A",
            desExp: "N/A",
            id: 25,
            yAdjustment: 0
        }
        , {
            name: "Process Development Director ",
            posX: 1135,
            posY: 170,
            width: 0,
            height: 0,
            salary: "$120,000 - $150,000 +",
            eduReq: "Bachelor's and Master's ",
            eduDes: "Bachelor's and Master's, 10 years experience",
            reqExp: "N/A",
            desExp: "N/A",
            id: 26,
            yAdjustment: 0
        }



    ],
    links: [
        //VC / Business Development Entry
        //Management Consultant Entry-Level
        {
            source: 0,
            target: 2
        },
        //VC / Business Development Mid
        //Analyst
        {
            source: 1,
            target: 4
        },
        //Management Consultant Mid-Level(No connections)(2)
        //Research Director
        {
            source: 3,
            target: 15
        },
        //Business Development Scout(No connections)(4)

        //Principal or Associate
        {
            source: 5,
            target: 6
        },
        //(No connections) Venture Capitalist Partner(6)
        //(No connections) Business Director Transaction Lead(7)

        //Research & Development Career Map Entry
        //GlassWash Connections
        {
            source: 8,
            target: 9
        },
        {
            source: 8,
            target: 10
        },
        //Research Assi/Assoc
        {
            source: 9,
            target: 10
        },
        //Associate Scientist
        {
            source: 10,
            target: 12
        }
        ,
        //Data Analyst
        {
            source: 11,
            target: 13
        }
        ,{
            source: 11,
            target: 1
        }
        ,//Research & Development Career Map Mid
        //Lead/Senior/Managing Scientist
        {
            source: 12,
            target: 14
        }
        ,
        {
            source: 12,
            target: 15
        }
        ,
        {
            source: 12,
            target: 16
        }
        ,
        {
            source: 12,
            target: 3
        }
        ,//Computational biologist/bioinformastician
        {
            source: 13,
            target: 16
        }
        //Research & Development Career Map Advanced
        ,//Principal Scientist
        {
            source: 14,
            target: 16
        }
        ,{
            source: 14,
            target: 3
        }
        ,//Director/VP of Reseach
        {
            source: 15,
            target: 16
        }
        ,{
            source: 15,
            target: 3
        }
        // NOTE: CSO/CTO (NO CONNECTIONS)
        //Biomanufacturing Career Map Entry
        //Biomanufacturing Technician
        ,{
            source: 17,
            target: 18
        }
        ,{
            source: 17,
            target: 19
        }
        ,{
            source: 17,
            target: 9
        }
        //Quality Assurance (QA) Assistant
        ,{
            source: 18,
            target: 22
        }
        ,{
            source: 18,
            target: 23
        }
        ,{
            source: 18,
            target: 9
        }
        //Quality Control (QC) Assistant
        ,{
            source: 19,
            target: 22
        }
        ,{
            source: 19,
            target: 23
        }
        ,{
            source: 19,
            target: 9
        }
        //Process/Production Technician
        ,{
            source: 20,
            target: 18
        }
        ,{
            source: 20,
            target: 19
        }
        ,{
            source: 20,
            target: 21
        }
        ,{
            source: 20,
            target: 9
        }
        //Biomanufacturing Career Map Mid
        //Production Supervisor
        ,{
            source: 21,
            target: 22
        }
        ,{
            source: 21,
            target: 23
        }
        ,{
            source: 21,
            target: 24
        }
        //Quality Assurance (QA) Manager
        ,{
            source: 22,
            target: 24
        }
        ,{
            source: 22,
            target: 25
        }
        //Quality Control (QC) Manager
        ,{
            source: 23,
            target: 24
        }
        ,{
            source: 23,
            target: 25
        }
        //Process Development Engineer
        ,{
            source: 24,
            target: 25
        }
        ,{
            source: 24,
            target: 26
        }
        //Quality Assurance/ Quality Control (QA/QC) Director (NO CONNECTIONS)
        //Process Development Engineer (NO CONNECTIONS)
    ],
    toolTip: [
        {
            name: "Salary"
        },
        {
            name: "Required Education"
        },
        {
            name: "Desired Education"
        },
        {
            name: "Required Expirence"
        },
        {
            name: "Desired Expirence"
        }

    ]
}

//setting up svg
let resizing = 0;
const flyOutSpace = 400 - (resizing / 2);
const svgWidth = 1200;
const width = svgWidth - resizing;
const height = 800 + resizing;
const body = d3.select("body")
    .style("-moz-user-select", "none")
    .style("-khtml-user-select", "none")
    .style("-webkit-user-select", "none")
    .style("user-select", "none")
    .style("font-family"," Arial, Helvetica, sans-serif");

    const wrapper = d3.select("body")
        .append("div")
        .attr("id","chartId");

const svgContainer = d3.select("div#chartId")
    .append("div")
    .classed("svg-container", true)
    .style("display", "block")
    .style("max-width", "1500px")
    .style("position", "relative")
    .style("width", "100%")
    .style("padding-bottom", "1%")
    .style("vertical-align", "top")
    .style("overflow", "hidden")
    .style("margin", "auto");

const svg = svgContainer
    .append("svg")
    .attr("id", "diagramSVG")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", `0 0 ${width + flyOutSpace} ${height}`)
    .style("display", "inline-block")
    .style("position", "relative")
    .style("top", "10px")
    .style("left", "0");

// .style("display", "block")
// .style("margin", "auto");

svg.append("rect")
    .attr("width", `${width + flyOutSpace}`)
    .attr("height", `${height}`)
    .attr("fill", "grey")
    .attr("stroke-width", "5px")
    .attr("stroke", "black");


let currentSource = null;

//when a node is clicked the tooltip will disappear breifly to allow for better view of connections
let nodeAnimationCompleted = true;

//creating ToolTip Default
const tooltip = d3.select("#chartId")
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
    .style("display", "none")
    .html(`
        <h4 class="toolTipHTML" id="pos">NULL</h4>
        <h5 class="toolTipHTML" id="salary">Salary: NULL</h5>
        <h5 class="toolTipHTML" id="reqEDU">Required Eduction: NULL</h5>
        <h5 class="toolTipHTML" id="desEDU">Desired Eduction: NULL</h5>
        <h5 class="toolTipHTML" id="reqEXP">Required Expirence: NULL</h5>
        <h5 class="toolTipHTML" id="desEXP">Desired Expirence: NULL</h5>
        `);

const dataSegments = svg.selectAll("segment").data(data.segments);
const dataTopLabel = svg.selectAll("tLabel").data(data.careerPaths);
const dataSideLabel = svg.selectAll("sLabel").data(data.careerStage);
const dataJobs = svg.selectAll("job").data(data.jobs);
const dataLinks = svg.selectAll("link").data(data.links);
const dataToolTip = svg.selectAll("tooltipData").data(data.toolTip);
let globalLaneWidth;
let globalLaneHeight;

const paddingSpace = 15;

//Flyout Card Global Information
const cardWidth = (flyOutSpace - 15);
const cardHeight = 600;
const cardX = paddingSpace;
const cardY = (height / 2) - (cardHeight / 2);

const cardHeaderX = cardX;
const cardHeaderY = cardY;
const cardHeaderWidth = cardWidth;
const cardHeaderHeight = cardHeight / 10;



swimingLaneCreation(4, 3);
topLabels();
sideLabel();
jobsCreation();
flyOutCreation();
// svg.append("rect")
//     .attr("x",0)
//     .attr("y",0)
//     .attr("width",100)
//     .attr("height",100)
//     .style("fill","red")
//     .attr("transform","translate(200,200) scale(4)");

function flyOutCreation() {
    const flyOutCard = svg
        .append("g")
        .attr("id", "flyOut")
        .attr("class", "daigram");


    flyOutCard
        .append("rect")
        .attr("x", `${cardX}px`)
        .attr("y", `${cardY}px`)
        .attr("width", `${cardWidth}px`)
        .attr("height", `${cardHeight}px`)
        .style("fill", "#c3dbb6")
        .style("rx", 10)
        .style("ry", 10);

    flyOutCard
        .append("rect")
        .attr("id", "cardHeader")
        .attr("x", `${cardHeaderX}px`)
        .attr("y", `${cardHeaderY}px`)
        .attr("width", `${cardHeaderWidth}px`)
        .attr("height", `${cardHeaderHeight}px`)
        .style("fill", "#ffff")
        .style("rx", 10)
        .style("ry", 10)
    flyOutCard
        .append("rect")
        .attr("x", `${cardHeaderX}px`)
        .attr("y", `${cardHeaderY + (cardHeaderHeight - 5)}px`)
        .attr("width", `${cardHeaderWidth}px`)
        .style("fill", "#ffff")
        .attr("height", `${5}px`);

    const CardContentX = paddingSpace + 15;
    const CardContentY = cardHeaderY + cardHeaderHeight + paddingSpace;
    const CardContentWidth = flyOutSpace - (30 + paddingSpace);
    const CardContentHeight = cardHeight - (paddingSpace * 2) - cardHeaderHeight;
    flyOutCard
        .append("rect")
        .attr("id", "card Content")
        .attr("x", `${CardContentX}px`)
        .attr("y", `${CardContentY}px`)
        .attr("width", `${CardContentWidth}`)
        .attr("height", `${CardContentHeight}px`)
        .style("fill", "#F8F8F8")
        .style("rx", 10)
        .style("ry", 10);

    console.log(CardContentHeight)

    let headerText = flyOutCard
        .append("text")
        .text("N/A")
        .attr("font-weight", "bold")
        .attr("class", "Position")
        .attr("id", "headerText");

    let bboxHeader = headerText.node().getBBox();


    headerText.attr("x", function () {
        return cardHeaderX + ((cardHeaderWidth - bboxHeader.width) / 2);
    })
        .attr("y", function () {
            return cardHeaderY + ((cardHeaderHeight - bboxHeader.height) - 5);
        })
    let startPosition = 0;
    let newLabelY = CardContentWidth / 5;


    dataToolTip.enter()
        .append("text")
        .attr("font-weight", "bold")
        .text(function (d, i) { return `${d.name}:` })
        .attr("x", CardContentX + paddingSpace)
        .attr("y", function (d, i) {
            return CardContentY + paddingSpace * 2 + ((CardContentWidth / 4) * i)

        });

    dataToolTip.enter()
        .append("text")
        .attr("font-weight", "normal")
        .attr("class", function (d) { return d.name.split(" ").join("") })
        .attr("id", "flyOutText")
        .attr("x", CardContentX + paddingSpace)
        .attr("y", function (d, i) {
            let offSet = 25;
            return offSet + CardContentY + paddingSpace * 2 + ((CardContentWidth / 4) * i)

        });

}





d3.selectAll("#diagram").on("click", linkRemoval);
svg.selectAll("#diagram")
    .attr("transform", `translate(${flyOutSpace + paddingSpace},${paddingSpace})`);
body.style("font-family"," Arial, Helvetica, sans-serif");

//ensuring on hover functions as well as animaitons are executed
let jobs = d3.selectAll("#job")
    .on("mouseover", function (d) {
        let viewPortWidth = window.innerWidth
        console.log(viewPortWidth);
        if(viewPortWidth >= 1500){
            tooltip.style("font-size","17px");
            tooltip.style("max-width", "250px");
        }
        else if(viewPortWidth < 1500 && viewPortWidth >= 1200){
            tooltip.style("font-size","15px");
            tooltip.style("max-width", "220px");
        }
        else if(viewPortWidth < 1200 && viewPortWidth >= 900){
            tooltip.style("font-size","12px");
            tooltip.style("max-width", "200px");
        }
        else if(viewPortWidth < 900 && viewPortWidth >= 600){
            tooltip.style("font-size","10px");
            tooltip.style("max-width", "120px");
        }
        else if(viewPortWidth < 600){
            tooltip.style("font-size","9px");
            tooltip.style("max-width", "100px");
        }
        // else if(viewPortWidth < 800){
        //     tooltip.style("max-width", "50px");
        // }
        // else if(viewPortWidth < 1500){
        //     tooltip.style("font-size","10px")
        // }
        
        //console.log(window.innerWidth);
        //obtains the data associated with this specfic node and feeds this into the html elemnt
        //This will display the appropraite data associated with each of the nodes

        if (nodeAnimationCompleted) {
            let overNodeData = d3.select(d.path[1]).datum();
            tooltip.html(`
                <h3 class="toolTipHTML" id="position">${overNodeData.name}</h3>
                <h5 class="toolTipHTML" id="salary">Salary: ${overNodeData.salary}</h5>
                <h5 class="toolTipHTML" id="reqEDU">Required Eduction: ${overNodeData.eduReq}</h5>
                <h5 class="toolTipHTML" id="desEDU">Desired Eduction: ${overNodeData.eduDes}</h5>
                <h5 class="toolTipHTML" id="reqEXP">Required Expirence: ${overNodeData.reqExp}</h5>
                <h5 class="toolTipHTML" id="desEXP">Desired Expirence: ${overNodeData.desExp}</h5>
            `)
                .style("display", "block");

            d3.selectAll(".toolTipHTML")
                .style("border-bottom", "2px solid black")
                .style("color", "#24211D");

            let toolTipBox = document.querySelector(".tooltip");
            let currentWidth = toolTipBox.offsetWidth;
            let currentHeight = toolTipBox.offsetHeight;
            //controls the opacity animation that will have the tooltip fade in and out
            tooltip.transition()
                .duration(500)
                .style("opacity", 1);


        }

    })
    .on("mousemove", function (event) {


        let toolTipBox = document.querySelector(".tooltip");
        let currentWidth = toolTipBox.offsetWidth;
        let currentHeight = toolTipBox.offsetHeight;
        let svgElem = document.querySelector("#diagramSVG");
        let svgBBox = svgElem.getBoundingClientRect();

        //HoverAbove code: style("top", `${event.pageY - (currentHeight + currentHeight / 8)}px`)
        //HoverBelow code: style("top", `${event.pageY + (currentHeight / 8)}px`)

        //top
        tooltip.style("top", function () {

            if ((event.pageY - currentHeight - (currentHeight / 8)) - svgBBox.top - window.scrollY > 0) {

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
    })
    .on("mouseout", function () {
        if (nodeAnimationCompleted) {
            //the tooltip can interfere with onhover functionality so the tooltip is move up and away from the diagram
            tooltip.transition()
                .delay(150)
                .duration(500)
                .style("opacity", 0)
                //.style("top", `${-height}px`)
                .on("end", function () { tooltip.style("display", "none") });
        }
    })
    .on("touchstart", function (d) {
        let overNodeData = d3.select(d.path[1]).datum();
        let headerText = d3.select(".Position")
        headerText.text(overNodeData.name);
        let bboxHeader = headerText.node().getBBox();
        console.log(bboxHeader);
        headerText.attr("x", function () {
            return cardHeaderX + ((cardHeaderWidth - bboxHeader.width) / 2);
        })
            .attr("y", function () {
                return cardHeaderY + ((cardHeaderHeight - bboxHeader.height)) - 5;
            });


        d3.select(".Salary").text(overNodeData.salary).call(wrap, 300);
        d3.select(".RequiredEducation").text(overNodeData.eduReq).call(wrap, 300);
        d3.select(".DesiredEducation").text(overNodeData.eduDes).call(wrap, 300);
        d3.select(".RequiredExpirence").text(overNodeData.reqExp).call(wrap, 300);
        d3.select(".DesiredExpirence").text(overNodeData.desExp).call(wrap, 300);

        generateLinks(this);
    })
    .on("click", function (d) {
        let overNodeData = d3.select(d.path[1]).datum();
        let headerText = d3.select(".Position")
        headerText.text(overNodeData.name);
        let bboxHeader = headerText.node().getBBox();
        console.log(bboxHeader);

        console.log(headerText);
        headerText.attr("x", function () {
            return cardHeaderX + ((cardHeaderWidth - bboxHeader.width) / 2);
        })
            .attr("y", function () {
                return cardHeaderY + ((cardHeaderHeight - bboxHeader.height)) - 5;
            });

            


        d3.select(".Salary").text(overNodeData.salary).call(wrap, 300);
        d3.select(".RequiredEducation").text(overNodeData.eduReq).call(wrap, 300);
        d3.select(".DesiredEducation").text(overNodeData.eduDes).call(wrap, 300);
        d3.select(".RequiredExpirence").text(overNodeData.reqExp).call(wrap, 300);
        d3.select(".DesiredExpirence").text(overNodeData.desExp).call(wrap, 300);

        generateLinks(this);
    });


function jobsCreation() {
    let currentGElement = null;
    let enteringText = dataJobs
        .enter()
        .append("g")
        .attr("x", function (d) { return d.posX })
        .attr("y", function (d) { return d.posY })
        .attr("id", "job")
        .attr("class", function (d) { 
            
            let newName = d.name
            .replaceAll('(','')
            .replaceAll(')','')
            .replaceAll('/','');
            newName = newName.split(" ").join("");

            return newName })
        .append("text")
        .attr("x", function (d) { return d.posX })
        .attr("y", function (d) { return d.posY })
        .attr("id", "jobText")
        .attr("class", function (d) { return d.name })
        .text(function (d) { return d.name })
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

            let tspans = d3.selectAll(this.children).style("text-anchor", "middle");
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
                .style("stroke-width", "1.5px")
                .style("stroke", "black");
            objectToAppend.attr("transform", `translate(${difference},${-objectToAppend.datum().yAdjustment})`);




        })
        .raise();

}
function generateLinks(selectedNode) {
    console.log(selectedNode.data);
    tooltip.style("display", "none");
    let source = null;
    for (let x = 0; x < data.jobs.length; x++) {
        //let selectedClass = d3.select(this.children[1]).attr("class");
        if (data.jobs[x].name == selectedNode.__data__.name) {//get the second child element this will ALWAYS be the text element
            source = x;
            break;
        }

    }
    currentSource = source;
    svg.selectAll("#jobBox").style("fill", "white");
    svg.selectAll("#jobBox").style("opacity", "0.3");
    svg.selectAll("#jobText").style("opacity", "0.3");
    svg.selectAll("line").remove();
    let sourceX = null;
    let sourceY = null;
    let targetX = null;
    let targetY = null;

    dataLinks
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
    d3.selectAll("#job").raise();


};
function swimingLaneCreation(vertLaneNum, horiLaneNum) {
    let currentPosX = 0;
    let currentPosY = 50;
    const laneWidth = (width - 80) / vertLaneNum;
    const laneHeight = (height - 80) / horiLaneNum;
    globalLaneWidth = laneWidth;
    globalLaneHeight = laneHeight;


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
        .attr("id", "vRect")
        .style("stroke-width", "2px")
        .style("stroke", "black");


    entering
        .append("text")
        .text(function (d) { return d.name })
        .style("font-size", "14.5px")
        .style("font-weight", "bold")
        .each(function (d) {

            let currentText = d3.select(this);
            let objectToAppend = d3.select(this.parentNode);

            let bbox = currentText.node().getBBox();//bbox is created to get the demensions and position of each of the labels

            let newPosX = d.posX + (d.width - bbox.width) / 2;//the difference in width /2 will give us the centered X
            let newPosY = d.posY + (d.height - (bbox.height));//the differnce in height will give you 

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
        .style("stroke-width", "2px")
        .style("stroke", "black");

    entering.append("text")
        .text(function (d) { return d.name })
        .style("font-weight", "bold")
        .each(function (d) {
            let currentText = d3.select(this);
            let parentNode = d3.select(this.parentNode);
            let bbox = currentText.node().getBBox();

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

function linkRemoval() {
    tooltip.attr("display", "none")
    svg.selectAll("line").remove();
    svg.selectAll("#jobBox")
        .transition()
        .duration(600)
        .style("fill", "white")
        .style("opacity", "1.0");

    svg.selectAll("#jobText")
        .transition()
        .duration(600)
        .style("opacity", "1.0")
        .style("font-weight", "normal");
}
function selectedNodes() {
    //d3.selectAll("#job").style("opacity","0.3");
    svg.selectAll("#jobText").style("font-weight", "normal");
    tooltip.style("opacity", 0);
    nodeAnimationCompleted = false;
    dataLinks
        .enter()
        .each(function (d, i) {
            //if the source has been found this means the node has targets and these will be highlighted as well
            if (d.source == currentSource) {

                let sourceNode = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('/','')
                    .replaceAll('(','')
                    .replaceAll(')','')
                    .split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "#D3D3D3").style("opacity", "1.0");
                //.style("fill", "skyblue").style("opacity", "1.0");

                let targetNodes = d3.select(`.${data.jobs[d.target].name
                    .replaceAll('/','')
                    .replaceAll('(','')
                    .replaceAll(')','')
                    .split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "white").style("opacity", "1.0");
                //.style("fill", "PaleVioletRed").style("opacity", "1.0");

                let sourceText = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('/','')
                    .replaceAll('(','')
                    .replaceAll(')','')
                    .split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0")
                    .style("font-weight", "bold");

                let targetText = d3.select(`.${data.jobs[d.target].name
                    .replaceAll('/','')
                    .replaceAll('(','')
                    .replaceAll(')','')
                    .split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0");
            }
            //in the event that the node has no target. It will simply be the only highlighted node
            else if (d.source != currentSource && data.jobs[currentSource].name != null) {
                tooltip.style("display", "none");
                let sourceNode = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('(','')
                    .replaceAll(')','')
                    .replaceAll('/','')
                    .split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "#D3D3D3").style("opacity", "1.0");

                let sourceText = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('(','')
                    .replaceAll(')','')
                    .replaceAll('/','')
                    .split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0")
                    .style("font-weight", "bold");
                //.on("end",setTimeout(function(){nodeAnimationCompleted = true;},100));
            }
            setTimeout(function () { nodeAnimationCompleted = true; }, 1200);

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
            lineHeight = 17.6,//px
            x = text.attr("x"),
            y = text.attr("y"),
            dy = 0,
            tspan = text.text(null)
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", function () { return dy + "px" });
        while (word = words.pop()) {
            if (word == "for") {
                console.log("bop");
            }
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text("  ");
                tspan.text(line.join(" "));
                line = [" " + word];
                tspan = text.append("tspan")
                    .attr("x", function (d) {
                        let newNumber = parseInt(x);
                        return parseInt(newNumber)
                    })
                    .attr("y", y)
                    .attr("dy", ++lineNumber * lineHeight + dy + "px")
                    .text(word);
            }

        }
        /*
        the code used to wrap text within the each of the job nodes also displaces them
        from their original position we store the re-adjustment of the Y position within the 
        node to use later in job creation to re-adjust the position to its proper location
        */
        let undefinedTest = d3.select(this.parentNode).datum();
        if (undefinedTest != undefined) {
            let adjustedY = lineNumber * lineHeight + dy;
            d3.select(this.parentNode).datum().yAdjustment = adjustedY;
        }


    });
}
