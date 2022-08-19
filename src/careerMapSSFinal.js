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
            posX: 835,
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
        //Lab Admin/Ops Career Map Entry
        , {
            name: "Lab Operations Assistant",
            posX: 1335,
            posY: 750,
            width: 0,
            height: 0,
            salary: "$50,000 - $60,000",
            eduReq: "Certificate",
            eduDes: "Bachelor's Degree",
            reqExp: "N/A",
            desExp: "Previous lab operations exposure with environmental health and safety training",
            id: 27,
            yAdjustment: 0
        }
        , {
            name: "Lab Operations Associate",
            posX: 1335,
            posY: 640,
            width: 0,
            height: 0,
            salary: "$55,000 - $65,000",
            eduReq: "Associate's Degree",
            eduDes: "Bachelor's Degree",
            reqExp: "N/A",
            desExp: "Previous lab operations exposure with environmental health and safety training",
            id: 28,
            yAdjustment: 0
        }
        //Lab Admin/Ops Career Map Mid
        , {
            name: "Senior Lab Operations Associate",
            posX: 1425,
            posY: 490,
            width: 0,
            height: 0,
            salary: "$55,000 - $65,000",
            eduReq: "Associate's Degree",
            eduDes: "Bachelor's Degree",
            reqExp: "3+ years lab operations experience",
            desExp: "5+ years lab operations experience",
            id: 29,
            yAdjustment: 0
        }
        , {
            name: "Assistant Lab Manager",
            posX: 1305,
            posY: 470,
            width: 0,
            height: 0,
            salary: "$70,000 - $80,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Bachelor's Degree",
            reqExp: "Previous lab administration exposure with environmental health and safety training",
            desExp: "Previous lab administration experience with environmental health and safety training",
            id: 30,
            yAdjustment: 0
        }
        , {
            name: "Lab Manager",
            posX: 1355,
            posY: 370,
            width: 0,
            height: 0,
            salary: "$80,000 - $90,000",
            eduReq: "Bachelor's Degree",
            eduDes: "Master's Degree",
            reqExp: "3-5 years lab management experience",
            desExp: "5+ years lab management experience",
            id: 31,
            yAdjustment: 0
        }
        //Lab Admin/Ops Career Map Advanced
        , {
            name: "Director of Science Operations",
            posX: 1295,
            posY: 170,
            width: 0,
            height: 0,
            salary: "$100,000 - $120,000 +",
            eduReq: "Master's Degree",
            eduDes: "PhD",
            reqExp: "Strong scientific background with lab management experience",
            desExp: "?",
            id: 32,
            yAdjustment: 0
        }
        , {
            name: "Senior Lab Manager",
            posX: 1425,
            posY: 230,
            width: 0,
            height: 0,
            salary: "$95,000 - $105,000",
            eduReq: "Bachelor's Degree ",
            eduDes: "Master's Degree",
            reqExp: "5+ years lab management experience",
            desExp: "?",
            id: 33,
            yAdjustment: 0
        }
        , {
            name: "Process Development Manager",
            posX: 1275,
            posY: 270,
            width: 0,
            height: 0,
            salary: "$110,000 - $125,000",
            eduReq: "Bachelor's Degree ",
            eduDes: "Master's Degree",
            reqExp: "5+ years lab management experience",
            desExp: "?",
            id: 34,
            yAdjustment: 0
        }
        , {
            name: "Lab Operations Director",
            posX: 1435,
            posY: 130,
            width: 0,
            height: 0,
            salary: "$135,000 - $150,000 +",
            eduReq: "Bachelor's Degree ",
            eduDes: "Master's Degree",
            reqExp: "5+ years lab management experience",
            desExp: "Previous management/administrative experience",
            id: 35,
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
        , {
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
        , {
            source: 14,
            target: 3
        }
        ,//Director/VP of Reseach
        {
            source: 15,
            target: 16
        }
        , {
            source: 15,
            target: 3
        }
        // NOTE: (16) CSO/CTO (NO CONNECTIONS)
        //Biomanufacturing Career Map Entry
        //Biomanufacturing Technician
        , {
            source: 17,
            target: 18
        }
        , {
            source: 17,
            target: 19
        }
        , {
            source: 17,
            target: 9
        }
        //Quality Assurance (QA) Assistant
        , {
            source: 18,
            target: 22
        }
        , {
            source: 18,
            target: 23
        }
        , {
            source: 18,
            target: 9
        }
        //Quality Control (QC) Assistant
        , {
            source: 19,
            target: 22
        }
        , {
            source: 19,
            target: 23
        }
        , {
            source: 19,
            target: 9
        }
        //Process/Production Technician
        , {
            source: 20,
            target: 18
        }
        , {
            source: 20,
            target: 19
        }
        , {
            source: 20,
            target: 21
        }
        , {
            source: 20,
            target: 9
        }
        //Biomanufacturing Career Map Mid
        //Production Supervisor
        , {
            source: 21,
            target: 22
        }
        , {
            source: 21,
            target: 23
        }
        , {
            source: 21,
            target: 24
        }
        //Quality Assurance (QA) Manager
        , {
            source: 22,
            target: 24
        }
        , {
            source: 22,
            target: 25
        }
        //Quality Control (QC) Manager
        , {
            source: 23,
            target: 24
        }
        , {
            source: 23,
            target: 25
        }
        //Process Development Engineer
        , {
            source: 24,
            target: 25
        }
        , {
            source: 24,
            target: 26
        }
        //Quality Assurance/ Quality Control (QA/QC) Director (NO CONNECTIONS) (25)
        //Process Development Engineer (NO CONNECTIONS) (26)
        , {
            source: 26,
            target: 34
        }

        //Lab Admin/Ops Career Map Entry
        //Lab Operations Assistant
        , {
            source: 27,
            target: 28
        }
        , {
            source: 27,
            target: 29
        }
        //Lab Operations Associate
        , {
            source: 28,
            target: 29
        }
        , {
            source: 28,
            target: 30
        }
        //Senior Lab Operations Associate
        , {
            source: 29,
            target: 30
        }
        , {
            source: 29,
            target: 31
        }
        //Assistant Lab Manager
        , {
            source: 30,
            target: 31
        }
        //Lab Manager
        , {
            source: 31,
            target: 33
        }
        //Director of Science Operations
        , {
            source: 32,
            target: 16
        }
        //Senior Lab Manager
        , {
            source: 33,
            target: 32
        }
        , {
            source: 33,
            target: 34
        }
        , {
            source: 33,
            target: 35
        }
        //Process Development Manager
        , {
            source: 34,
            target: 26
        }
        , {
            source: 34,
            target: 35
        }
        //Lab Operations Director (35)

    ],
    flyOut: [
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

//setting up svg (Scaleable Vector Graphic: Ensures that when the diagram is re-sized that it resoluation stays constant)
const flyOutSpace = 400;
const svgWidth = 1200;
const width = svgWidth;
const height = 800;
const body = d3.select(".content-wrapper .content div")
    .style("-moz-user-select", "none")
    .style("-khtml-user-select", "none")
    .style("-webkit-user-select", "none")
    .style("user-select", "none")
    .style("font-family", " Arial, Helvetica, sans-serif");

/*The wrapper is used to contain the svg-container ensuring 
and ensure everything within is accociated with the diagram
This is primaily to ensure that auto margin and automatic scaling works properly*/
const wrapper = body
    .append("div")
    .attr("id", "chartId");

//the svg contain will contain the svg all style's are to ensure proper scaling of the diagram in differing viewports
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

//additional style to ensure centering of diagram within the webpage
/*Note: these wrappers and containers are to protect the diagram from outside CSS 
and make the CSS that needs to be implimented is implimented*/
const svg = svgContainer
    .append("svg")
    .attr("id", "diagramSVG")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", `0 0 ${width + flyOutSpace} ${height}`)
    .style("display", "inline-block")
    .style("position", "relative")
    .style("top", "10px")
    .style("left", "0");

/*creating the grey background for the diagram*/
svg.append("rect")
    .attr("width", `${width + flyOutSpace}`)
    .attr("height", `${height}`)
    .attr("fill", "#D3D3D3")
    .attr("stroke-width", "5px")
    .attr("stroke", "black");

//Global variable tracking a nodes source due to how diagrams are selected and linked this must be global
let currentSource = null;

//when a node is clicked the tooltip will disappear breifly to allow for better view of connections
let nodeAnimationCompleted = true;


const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("background-color", "cornsilk")
    .style("border", "solid 3px black")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("viibility", "hidden")
    .style("text-align", "center")
    .style("display", "none")
	.style("z-index",100);
  

//Creation of data variable used later for binding data to HTML Elements
const dataSegments = svg.selectAll("segment").data(data.segments);
const dataTopLabel = svg.selectAll("tLabel").data(data.careerPaths);
const dataSideLabel = svg.selectAll("sLabel").data(data.careerStage);
const dataJobs = svg.selectAll("job").data(data.jobs);
const dataLinks = svg.selectAll("link").data(data.links);
const flyOutData = svg.selectAll("tooltipData").data(data.flyOut);
let globalLaneWidth;
let globalLaneHeight;

//Manual Padding used thorughout diagram creation
const paddingSpace = 15;

//Flyout Card Global Constants
const cardWidth = (flyOutSpace - 15);
const cardHeight = 600;
const cardX = paddingSpace;
const cardY = (height / 2) - (cardHeight / 2);
//Flyout Card Header Constants
const cardHeaderX = cardX;
const cardHeaderY = cardY;
const cardHeaderWidth = cardWidth;
const cardHeaderHeight = cardHeight / 10;

//Calling all functionsfor creation of the diagram
swimingLaneCreation(4, 3);
topLabels();
sideLabel();
jobsCreation();
flyOutCreation();

//ensures that all text is Helvetica
body.style("font-family", " Arial, Helvetica, sans-serif");

//ensures the diagrma is moved to the side for the fly out and accounts for padding
svg.selectAll("#diagram")
    .attr("transform", `translate(${flyOutSpace + paddingSpace},${paddingSpace})`);


//a function used to create the flyout
function flyOutCreation() {
    svg.append("rect")
        .attr("x", cardX)
        .attr("y", cardY)
        .attr("width", cardWidth)
        .attr("height", cardHeight)
        .style("rx", 10)
        .style("ry", 10)
        .style("stroke-width", "5px")
        .style("stroke", "black")

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
    	.style("font-size", "16px")
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

    //Creating the labels for each of the flyout's content text(Creates the bolded "Salary:" text you see)
    flyOutData.enter()
        .append("text")
        .attr("font-weight", "bold")
  		.style("font-size", "18px")
        .text(function (d, i) { return `${d.name}:` })
        .attr("x", CardContentX + paddingSpace)
        .attr("y", function (d, i) {
            return CardContentY + paddingSpace * 2 + ((CardContentWidth / 4) * i)

        });
    //Fills the text for each of the flyout information
    flyOutData.enter()
        .append("text")
        .attr("font-weight", "normal")
  		.style("font-size", "17px")
        .attr("class", function (d) { return d.name.split(" ").join("") })
        .attr("id", "flyOutText")
        .attr("x", CardContentX + paddingSpace)
        .attr("y", function (d, i) {
            let offSet = 25;
            return offSet + CardContentY + paddingSpace * 2 + ((CardContentWidth / 4) * i)

        });

}




//when you click on the diagram the destroys all links and returns the diagram to its default state
d3.selectAll("#diagram").on("click", linkRemoval);

//All job nodes will have mouse over, on click, on touch, and mouse out functionality
let jobs = d3.selectAll("#job")
    .on("mouseover", function (d) {
        //Ensures the tooltip scales with the diagram. Although extremely small dimensions are not accounted for
        let viewPortWidth = window.innerWidth
        console.log(viewPortWidth);
        if (viewPortWidth >= 1500) {
            tooltip.style("font-size", "17px");
          
            tooltip.style("max-width", "250px");
        }
        else if (viewPortWidth < 1500 && viewPortWidth >= 1200) {
          
            tooltip.style("font-size", "15px");
            tooltip.style("max-width", "220px");
        }
        else if (viewPortWidth < 1200 && viewPortWidth >= 900) {
          
            tooltip.style("font-size", "12px");
            tooltip.style("max-width", "200px");
        }
        else if (viewPortWidth < 900 && viewPortWidth >= 600) {
          
            tooltip.style("font-size", "10px");
            tooltip.style("max-width", "120px");
        }
        else if (viewPortWidth < 600) {
          
            tooltip.style("font-size", "9px");
            tooltip.style("max-width", "100px");
        }
      
      if (viewPortWidth >= 1500) {
            d3.select("#position").style("font-size","17px")
        }
        else if (viewPortWidth < 1500 && viewPortWidth >= 1200) {
            d3.select("#position").style("font-size","15px")
        }
        else if (viewPortWidth < 1200 && viewPortWidth >= 900) {
            d3.select("#position").style("font-size","12px")
        }
        else if (viewPortWidth < 900 && viewPortWidth >= 600) {
            d3.select("#position").style("font-size","10px")
        }
        else if (viewPortWidth < 600) {
            d3.select("#position").style("font-size","9px")
        }

        //ensures that the fade in animation is completed
        if (nodeAnimationCompleted) {
            //Datum is used to obtain data from a HTML element
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
d3.select("#position").style("font-weight","bold");
            d3.selectAll(".toolTipHTML")
                .style("border-bottom", "2px solid black")
                .style("color", "#24211D");
          
          
            //controls the opacity animation that will have the tooltip fade in and out
            tooltip.transition()
                .duration(500)
                .style("opacity", 1);


        }

    })
    .on("mousemove", function (event) {

        /*this code primarily ensures that the tooltip with always be above the job nodes and
        that the tooltip will be always contained within the diagram*/
        let toolTipBox = document.querySelector(".tooltip");
        let currentWidth = toolTipBox.offsetWidth;
        let currentHeight = toolTipBox.offsetHeight;
        let svgElem = document.querySelector("#diagramSVG");
        let svgBBox = svgElem.getBoundingClientRect();
        //top
        tooltip.style("top", function () {

            if ((event.pageY - currentHeight - (currentHeight / 8)) - svgBBox.top - window.scrollY > 0) {

                return `${event.pageY - currentHeight - (currentHeight / 8)}px`;
            }
            else {
                return `${event.pageY + (currentHeight / 8) }px`;
            }

        }).style("left", function () {

            if ((event.pageX - (currentWidth / 2)) <= svgBBox.left) {
                return `${svgBBox.left}px`;
                // this will keep the tooltip within the html page(ive tried to keep it within the svg element but its behavior was inconsistant)
            }
            else if ((event.pageX + (currentWidth / 2)) >= svgBBox.right) {
                return `${svgBBox.right-currentWidth}px`;
            }
            else {
                return `${event.pageX - (currentWidth / 2)}px`;
            }
        });
    })
    .on("mouseout", function () {
        if (nodeAnimationCompleted) {
            //the tooltip will no longer be displayed once mouse is out, this is to ensure that the tooltip doesnt effect on hover functionality
            tooltip.transition()
                .delay(150)
                .duration(500)
                .style("opacity", 0)
                .on("end", function () { tooltip.style("display", "none") });
        }
    })
    //On touch and on click preform the same task
    .on("touchstart", function (d) {
        //gets data from the job nodes
        let overNodeData = d3.select(d.path[1]).datum();
        //ensures that flyout header data is displayed
        let headerText = d3.select(".Position")
        headerText.text(overNodeData.name);
        let bboxHeader = headerText.node().getBBox();
        headerText.attr("x", function () {
            return cardHeaderX + ((cardHeaderWidth - bboxHeader.width) / 2);
        })
            .attr("y", function () {
                return cardHeaderY + ((cardHeaderHeight - bboxHeader.height)) - 5;
            });

        //ensures that flyout content text is displayed once touched
        d3.select(".Salary").text(overNodeData.salary).style("font-size", "20px").call(wrap, 300);
        d3.select(".RequiredEducation").text(overNodeData.eduReq).style("font-size", "20px").call(wrap, 300);
        d3.select(".DesiredEducation").text(overNodeData.eduDes).style("font-size", "20px").call(wrap, 300);
        d3.select(".RequiredExpirence").text(overNodeData.reqExp).style("font-size", "20px").call(wrap, 300);
        d3.select(".DesiredExpirence").text(overNodeData.desExp).style("font-size", "20px").call(wrap, 300);

        //calls generate links function
        generateLinks(this);
    })
    .on("click", function (d) {
        let overNodeData = d3.select(d.path[1]).datum();
        let headerText = d3.select(".Position")
        headerText.text(overNodeData.name);
     let yTextAdjust = null;
        if(d3.select(".Position").node().getComputedTextLength() <320){
            headerText.style("font-size","20px");
            yTextAdjust = 0;
        }
        else{
            headerText.style("font-size","15px");
            yTextAdjust = 5;
        }
      
        let bboxHeader = headerText.node().getBBox();
        console.log(bboxHeader);

        console.log(headerText);
        headerText.attr("x", function () {
            return cardHeaderX + ((cardHeaderWidth - bboxHeader.width) / 2);
        })
            .attr("y", function () {
                return cardHeaderY + ((cardHeaderHeight - bboxHeader.height)) - yTextAdjust;
            });

        d3.select(".Salary").text(overNodeData.salary).style("font-size", "17px").call(wrap, 300);
        d3.select(".RequiredEducation").text(overNodeData.eduReq).style("font-size", "17px").call(wrap, 300);
        d3.select(".DesiredEducation").text(overNodeData.eduDes).style("font-size", "17px").call(wrap, 300);
        d3.select(".RequiredExpirence").text(overNodeData.reqExp).style("font-size", "17px").call(wrap, 300);
        d3.select(".DesiredExpirence").text(overNodeData.desExp).style("font-size", "17px").call(wrap, 300);

        generateLinks(this);
    });

//creates all the jobs based on dataJobs
function jobsCreation() {
    let currentGElement = null;
    let enteringText = dataJobs
        .enter()
        .append("g")
        .attr("x", function (d) { return d.posX })
        .attr("y", function (d) { return d.posY })
        .attr("id", "job")
        .attr("class", function (d) {
            //in order for classification to work special characters are removed 
            let newName = d.name
                .replaceAll('(', '')
                .replaceAll(')', '')
                .replaceAll('/', '');
            newName = newName.split(" ").join("");

            return newName
        })
        .append("text")
    	.style("font-size", "16px")
        .attr("x", function (d) { return d.posX })
        .attr("y", function (d) { return d.posY })
        .attr("id", "jobText")
        .attr("class", function (d) { return d.name })
        .text(function (d) { return d.name })
        .call(wrap, 30)
        .each(function (d, i) {

            /*
                When creating the job nodes if they are not centered and wrapped there is no displacement
                but when wrapped and centered, the node is displaced seemingly randomly horizonally and vertically
                there for I create 2 instances of the nodes one where this is no wrapping and another where their is.
                I then get the difference in the x direction and fix the horizonal displacement. Vertical displacement is
                fixed during wrapping.
            */
           //creation of first node box(No wrapping)
            let objectToAppend = d3.select(this.parentNode);
            let padding = 20;
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
                .attr("width", function () { return pastbbox.width + padding })
                .attr("height", function () { return pastbbox.height + padding })
                .remove();

                //creation of second node box with wrapping and centering
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
                .style("stroke-width", "1.5px")
                .style("stroke", "black");
                //translating the node by the difference found in the Y and X (Y handed during wrapping function)
            objectToAppend.attr("transform", `translate(${difference},${-objectToAppend.datum().yAdjustment})`);




        })
        //The text is then risen so it will be above the newly created job boxes
        .raise();

}
function generateLinks(selectedNode) {

    //when links are generated tooltip is nolonger displayed to allow for viewing of the diagram
    tooltip.style("display", "none");
    let source = null;
    //looking for the selected job node and finding which place does it have in the job array
    for (let x = 0; x < data.jobs.length; x++) {
        if (data.jobs[x].name == selectedNode.__data__.name) {//get the second child element this will ALWAYS be the text element
            source = x;
            break;
        }

    }
    //setting up for generating links by lowing opacity of every jobnode
    currentSource = source;
    svg.selectAll("#jobBox").style("fill", "white");
    svg.selectAll("#jobBox").style("opacity", "0.3");
    svg.selectAll("#jobText").style("opacity", "0.3");
    svg.selectAll("line").remove();
    let sourceX = null;
    let sourceY = null;
    let targetX = null;
    let targetY = null;

    //links are generated using the data from the selected source
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

    //node creation is than called and all job nodes are raised so links are under the nodes
    selectedNodes();
    d3.selectAll("#job").raise();


};
function swimingLaneCreation(columnNum, rowNum) {

    //ensures that each color codes sectino of the diagram has its proper width height and position
    //the starting section position will always be 0,50
    let currentPosX = 0;
    let currentPosY = 50;
    //the width and height of each section is the max width of the diagram divided by the number of each row and column
    // the -80 is acounting for the horizonal padding 15*2 and vertical padding 15*2 in additino to the fact that the 
    //height / width of the labels were 50 so 50+30 = 80;
    const laneWidth = (width - 80) / columnNum;
    const laneHeight = (height - 80) / rowNum;

    //Lane Dimensions are stored for when used to create labels for the diagram
    globalLaneWidth = laneWidth;
    globalLaneHeight = laneHeight;

    //creating each of the sections if the number of columns = the current section displace the Y by section height and reset X to Zero
    let entering = dataSegments
        .enter()
        .append("rect")
        .attr("x", function (a, i) {
            if (i == 0) {
                return currentPosX;
            }
            else if (i % columnNum == 0) {
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
            else if (i % columnNum == 0) {
                currentPosY += laneHeight;

                return currentPosY;
            }
            else {
                return currentPosY;
            }
        })
        .attr("width", `${laneWidth}`)
        .attr("height", `${laneHeight}`)
        .attr("fill", function (d) {//color is stored and used in the data
            return d.color;
        })
        .attr("id", "diagram");

    //lines for the outline of the diagram
    svg.append("line")
        .attr("x1", 0 + flyOutSpace + 15)
        .attr("y1", 50 + 15)
        .attr("x2", 0 + flyOutSpace + 15)
        .attr("y2", 50 + 15 + (height - 80))
        .style("stroke", "black")
        .style("stroke-width", "2px")

    svg.append("line")
        .attr("x1", 0 + flyOutSpace + 15)
        .attr("y1", 50 + 15 + (height - 80))
        .attr("x2", 0 + flyOutSpace + 15 + (width - 80))
        .attr("y2", 50 + 15 + (height - 80))
        .style("stroke", "black")
        .style("stroke-width", "2px")
};

function topLabels() {
    /* */
    let currentPosX = 0;
    const currentPosY = 0;
    let currentWidth = globalLaneWidth;
    const currentHeight = 50;

    let entering = dataTopLabel
        .enter()
        .append("g")
        .attr("class", "careerLabelV")
        .attr("id", "diagram");

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

    //the width of the side labels is 50 and adjustment for the transformation of 15 and padding of 15
    const currentPosX = width - 50 - (2 * 15);
    let currentPosY = 50;
    const currentWidth = 50;
    //classifying the labels
    let entering = dataSideLabel
        .enter()
        .append("g")
        .attr("class", "careerLabelH")
        .attr("id", "diagram");

    //creating each of the rectangles for the labels
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

        //creating the text for each of the side labels and properly spacing them
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
            we must transform locally so rotation occurs
            around the text origin
            */

            currentText
                .attr("transform", function () { return `translate(${newPosX},${newPosY}) rotate(90)` });
        })
}
//simply used to remove all the links from the diagram and resetn the diagram to its default state
function linkRemoval() {
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
//used for highlighting the selected node
function selectedNodes() {
    //ensures all font is not bolded
    svg.selectAll("#jobText").style("font-weight", "normal");
    //causes the tooltip to disapear
    tooltip.style("opacity", 0);
    //lets the program know that an animation is in progress and is not compeleted
    nodeAnimationCompleted = false;
    dataLinks
        .enter()
        .each(function (d, i) {
            //if the source has been found this means the node has targets and these will be highlighted as well
            if (d.source == currentSource) {
                //NOTE: variable creation not needed but makes it easier to understand whats going on
                /*
                    Remember when we classified each job node with is name after removing special characters? 
                    Well here is where that comes in handy because we know the manipulation we did to create the class
                    we can recreate this to find which node to highlight
                */
                let sourceNode = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('/', '')
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "#D3D3D3").style("opacity", "1.0");

                let targetNodes = d3.select(`.${data.jobs[d.target].name
                    .replaceAll('/', '')
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "white").style("opacity", "1.0");

                let sourceText = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('/', '')
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0")
                    .style("font-weight", "bold");

                let targetText = d3.select(`.${data.jobs[d.target].name
                    .replaceAll('/', '')
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .split(" ").join("")}`).select("text")
                    .transition()
                    .duration(600)
                    .style("opacity", "1.0");
            }
            //in the event that the node has no target. It will simply be the only highlighted node
            else if (d.source != currentSource && data.jobs[currentSource].name != null) {
                tooltip.style("display", "none");
                let sourceNode = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .replaceAll('/', '')
                    .split(" ").join("")}`).select("rect")
                    .transition()
                    .duration(600)
                    .style("fill", "#D3D3D3").style("opacity", "1.0");

                let sourceText = d3.select(`.${data.jobs[currentSource].name
                    .replaceAll('(', '')
                    .replaceAll(')', '')
                    .replaceAll('/', '')
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
    /*
        take the text element and break it up into tspan elements depending 
        these elements will be children of the text and be broken up 
        and spaced depending on padding
    */
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