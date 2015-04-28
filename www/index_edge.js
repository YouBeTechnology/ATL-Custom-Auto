/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'App_BG_2',
                display: 'block',
                type: 'image',
                rect: ['-2px', '2px','507px','858px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"App%20BG%202.png",'0px','0px']
            },
            {
                id: 'Main_Content_Holder',
                display: 'none',
                type: 'rect',
                rect: ['13px', '167px','479px','673px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Services_Banner',
                display: 'none',
                type: 'image',
                rect: ['-2px', '-2px','507px','800px','auto', 'auto'],
                clip: ['rect(108.536865234375px 507px 173.170654296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Bar2.png",'0px','0px']
            },
            {
                id: 'Service_Trans_Image',
                display: 'none',
                type: 'image',
                rect: ['-54px', '181px','638px','662px','auto', 'auto'],
                clip: ['rect(0px 498.5611267089844px 642.5968627929688px 120.01434326171875px)'],
                opacity: 0.094017101786076,
                fill: ["rgba(0,0,0,0)",im+"image%20services2.png",'0px','0px'],
                transform: [[],[],[],['1.26272','1.04381']]
            },
            {
                id: 'Services_Text',
                display: 'none',
                type: 'text',
                rect: ['30px', '184px','448px','657px','auto', 'auto'],
                text: "ATL Custom Auto is dedicated to providing high quality customization jobs that combine superior results with competitive pricing. We strive to establish relationships with our customers employees and vendors. We understand that cars are personal to their owners and our creative abilities and knowledge of the industry will allow us to give each and every customer the highest quality services and products. There is no need to shop around for various customization needs, ATL Custom Auto will at as a concierge services for anyone seeking the full customization experience.<br><br>All Law Enforcement, Fire, EMS Employee Discount<br><br>Services:<br> <br>ATL Custom Auto provides a variety of Customization services including:<br><br>- Rims                                - Grilles <br><br>- Seat Covers                   - Upholstery<br><br>- Lights                              - Audio<br><br>- Security                          - Tinting<br><br>- Exterior/ body paint       - Wheel repair, drilling<br><br>- Vehicle Lifts                    - Full Vehicle<br><br>Products:<br><br>Products to be available for purchase at ATL Custom Auto, both online and in the shop include:<br><br>- Rims/ Wheels              - Cameras<br><br>- Grilles                          - Audio <br><br>- Lights                          - Security systems<br><br>- Multi-media accessories<br><br>- Window tint<br><br>ATL Custom Auto will work hard ensure that our customer's expectations are exceeded in each and every transaction. We will constantly strive to supply what the customers want, and will be knowledgeable of the latest products to keep up with current market trends.<br>",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(255,255,255,1)", "500", "none", "normal"]
            },
            {
                id: 'Services',
                display: 'none',
                type: 'text',
                rect: ['201px', '126px','108px','31px','auto', 'auto'],
                text: "Services",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'Contact_View',
                display: 'none',
                type: 'rect',
                rect: ['13px', '167px','479px','673px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'viewer1',
                display: 'none',
                type: 'rect',
                rect: ['13', '169','auto','auto','auto', 'auto']
            },
            {
                id: 'Contact_Banner',
                display: 'none',
                type: 'image',
                rect: ['-2px', '-2px','507px','800px','auto', 'auto'],
                clip: ['rect(108.536865234375px 507px 173.170654296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Bar2.png",'0px','0px']
            },
            {
                id: 'Contact_Us',
                display: 'none',
                type: 'text',
                rect: ['187px', '126px','137px','31px','auto', 'auto'],
                text: "Contact Us",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'Hot_Deals_View_Holder',
                display: 'none',
                type: 'rect',
                rect: ['13px', '167px','479px','673px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'viewer5',
                display: 'none',
                type: 'rect',
                rect: ['13', '169','auto','auto','auto', 'auto']
            },
            {
                id: 'Hot_Deal_Banner',
                display: 'none',
                type: 'image',
                rect: ['-2px', '-2px','507px','800px','auto', 'auto'],
                clip: ['rect(108.536865234375px 507px 173.170654296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Bar2.png",'0px','0px']
            },
            {
                id: 'Hot_Deals',
                display: 'none',
                type: 'text',
                rect: ['199px', '126px','99px','31px','auto', 'auto'],
                text: "Updates",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'Radio_Holder',
                display: 'none',
                type: 'rect',
                rect: ['13px', '167px','479px','673px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Radio_Banner',
                display: 'none',
                type: 'image',
                rect: ['-2px', '-2px','507px','800px','auto', 'auto'],
                clip: ['rect(108.536865234375px 507px 173.170654296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Bar2.png",'0px','0px']
            },
            {
                id: 'RadioAno',
                display: 'none',
                type: 'rect',
                rect: ['195', '126','auto','auto','auto', 'auto']
            },
            {
                id: 'viewer4',
                display: 'none',
                type: 'rect',
                rect: ['13', '169','auto','auto','auto', 'auto']
            },
            {
                id: 'Media_Holder',
                display: 'none',
                type: 'rect',
                rect: ['13px', '167px','479px','673px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Media_Banner',
                display: 'none',
                type: 'image',
                rect: ['-2px', '-2px','507px','800px','auto', 'auto'],
                clip: ['rect(108.536865234375px 507px 173.170654296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Bar2.png",'0px','0px']
            },
            {
                id: 'Media',
                display: 'none',
                type: 'text',
                rect: ['214px', '126px','85px','31px','auto', 'auto'],
                text: "Media",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'viewer2',
                display: 'none',
                type: 'rect',
                rect: ['13', '169px','auto','auto','auto', 'auto']
            },
            {
                id: 'Wheels_Holder',
                display: 'none',
                type: 'rect',
                rect: ['13px', '167px','479px','673px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'viewer3',
                display: 'none',
                type: 'rect',
                rect: ['13', '167','auto','auto','auto', 'auto']
            },
            {
                id: 'Wheels_Banner',
                display: 'none',
                type: 'image',
                rect: ['-2px', '-2px','507px','800px','auto', 'auto'],
                clip: ['rect(108.536865234375px 507px 173.170654296875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Banner%20Bar2.png",'0px','0px']
            },
            {
                id: 'Wheels',
                display: 'none',
                type: 'text',
                rect: ['211px', '126px','85px','31px','auto', 'auto'],
                text: "Wheels<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "600", "none", "normal"]
            },
            {
                id: 'App_BG',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','505px','860px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"App%20BG.png",'0px','0px']
            },
            {
                id: 'black_pattern',
                display: 'block',
                type: 'image',
                rect: ['-53px', '446px','615px','414px','auto', 'auto'],
                clip: ['rect(0px 560.45458984375px 414px 49.0908203125px)'],
                opacity: 0.29914530398499,
                fill: ["rgba(0,0,0,0)",im+"black%20pattern.png",'0px','0px']
            },
            {
                id: 'Black_Box',
                display: 'block',
                type: 'rect',
                rect: ['0px', '111px','505px','308px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)",[270,[['rgba(0,0,0,1.00)',0],['rgba(139,51,51,0.00)',100]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Buttons',
                display: 'block',
                type: 'image',
                rect: ['13px', '53px','480px','800px','auto', 'auto'],
                clip: ['rect(-17.814037322998047px 490.8679504394531px 784.782470703125px -12.841863632202148px)'],
                fill: ["rgba(0,0,0,0)",im+"Buttons.png",'0px','0px']
            },
            {
                id: 'Slideborder',
                display: 'block',
                type: 'rect',
                rect: ['-2px', '408px','507px','38px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)",[270,[['rgba(197,197,197,1.00)',26],['rgba(0,0,0,1.00)',83]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'viewer6',
                display: 'block',
                type: 'rect',
                rect: ['0', '0','auto','auto','auto', 'auto']
            },
            {
                id: 'NavBar',
                type: 'image',
                rect: ['0px', '18px','506px','800px','auto', 'auto'],
                clip: ['rect(14.543004989624023px 506px 107.638916015625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                transform: [[],[],[],['1','1.19091']]
            },
            {
                id: 'Follow_Us',
                display: 'block',
                type: 'image',
                rect: ['26px', '-2px','479px','121px','auto', 'auto'],
                clip: ['rect(0px 479px 121px 326px)'],
                fill: ["rgba(0,0,0,0)",im+"ATL-Custom-Auto-Mobile-Application-2_01.png",'0px','0px']
            },
            {
                id: 'Logo',
                type: 'image',
                rect: ['8px', '2px','480px','800px','auto', 'auto'],
                clip: ['rect(0px 215.13671875px 112.3863525390625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
            },
            {
                id: 'Back_Button',
                display: 'none',
                type: 'image',
                rect: ['26px', '-2px','480px','800px','auto', 'auto'],
                clip: ['rect(-2.439208984375px 480px 119.51220703125px 337.80517578125px)'],
                fill: ["rgba(0,0,0,0)",im+"Back%20Button.png",'0px','0px']
            },
            {
                id: 'servicebtn',
                display: 'none',
                type: 'rect',
                rect: ['56px', '594px','187px','104px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'contactbtn',
                display: 'none',
                type: 'rect',
                rect: ['265px', '728px','187px','103px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'hotdealbtn',
                display: 'none',
                type: 'rect',
                rect: ['56px', '728px','187px','103px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'wheelsbtn',
                display: 'none',
                type: 'rect',
                rect: ['265px', '594px','187px','104px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'radiobtn',
                display: 'none',
                type: 'rect',
                rect: ['55px', '470px','187px','104px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'mediabtn',
                display: 'none',
                type: 'rect',
                rect: ['267px', '470px','188px','104px','auto', 'auto'],
                fill: ["rgba(7,7,7,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [
            {
                id: 'viewer1',
                symbolName: 'viewer1',
                autoPlay: {

                }
            },
            {
                id: 'viewer3',
                symbolName: 'viewer3',
                autoPlay: {

                }
            },
            {
                id: 'RadioAno',
                symbolName: 'RadioAno',
                autoPlay: {

                }
            },
            {
                id: 'viewer4',
                symbolName: 'viewer4',
                autoPlay: {

                }
            },
            {
                id: 'viewer5',
                symbolName: 'viewer5',
                autoPlay: {

                }
            },
            {
                id: 'viewer2',
                symbolName: 'viewer2',
                autoPlay: {

                }
            },
            {
                id: 'viewer6',
                symbolName: 'viewer6',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Media_Banner}": [
                ["style", "top", '-70px'],
                ["style", "left", '-2px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [108.53686523438,507,173.17065429688,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '507px']
            ],
            "${_Services_Text}": [
                ["style", "font-weight", '500'],
                ["style", "left", '30px'],
                ["style", "font-size", '18px'],
                ["style", "top", '184px'],
                ["style", "text-align", 'justify'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '657px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_viewer6}": [
                ["style", "display", 'block']
            ],
            "${_Wheels}": [
                ["style", "top", '126px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '211px'],
                ["style", "width", '85px']
            ],
            "${_Wheels_Holder}": [
                ["style", "top", '167px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "height", '2px']
            ],
            "${_App_BG_2}": [
                ["style", "top", '2px'],
                ["style", "height", '858px'],
                ["style", "display", 'block'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_contactbtn}": [
                ["style", "top", '728px'],
                ["style", "height", '103px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '265px'],
                ["style", "width", '187px']
            ],
            "${_Wheels_Banner}": [
                ["style", "top", '-70px'],
                ["style", "clip", [108.53686523438,507,173.17065429688,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_black_pattern}": [
                ["style", "top", '446px'],
                ["style", "display", 'block'],
                ["style", "clip", [0,560.45458984375,414,49.0908203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '414px'],
                ["style", "opacity", '0'],
                ["style", "left", '-53px'],
                ["style", "width", '615px']
            ],
            "${_Contact_View}": [
                ["style", "top", '167px'],
                ["style", "opacity", '0'],
                ["style", "height", '2px'],
                ["style", "display", 'none']
            ],
            "${_viewer5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '11px']
            ],
            "${_Logo}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '-202px'],
                ["style", "clip", [0,215.13671875,112.3863525390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_servicebtn}": [
                ["style", "top", '594px'],
                ["style", "display", 'none'],
                ["style", "height", '104px'],
                ["style", "opacity", '0'],
                ["style", "left", '56px'],
                ["style", "width", '187px']
            ],
            "${_Hot_Deals_View_Holder}": [
                ["style", "top", '167px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "height", '2px']
            ],
            "${_Hot_Deals}": [
                ["style", "top", '126px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '199px'],
                ["style", "width", '99px']
            ],
            "${_viewer2}": [
                ["style", "top", '206px'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1.12395'],
                ["style", "display", 'none']
            ],
            "${_RadioAno}": [
                ["style", "display", 'none'],
                ["style", "left", '191px']
            ],
            "${_Radio_Banner}": [
                ["style", "top", '-70px'],
                ["style", "left", '-2px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [108.53686523438,507,173.17065429688,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '507px']
            ],
            "${_hotdealbtn}": [
                ["style", "top", '728px'],
                ["style", "height", '103px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '56px'],
                ["style", "width", '187px']
            ],
            "${_Contact_Banner}": [
                ["style", "top", '-70px'],
                ["style", "left", '-2px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [108.53686523438,507,173.17065429688,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '507px']
            ],
            "${_NavBar}": [
                ["style", "top", '-92px'],
                ["transform", "scaleY", '1.19091'],
                ["style", "clip", [14.543004989624023,506,107.638916015625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '506px']
            ],
            "${_Media}": [
                ["style", "top", '126px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '214px'],
                ["style", "width", '85px']
            ],
            "${_Service_Trans_Image}": [
                ["transform", "scaleX", '1.26272'],
                ["style", "opacity", '0'],
                ["style", "left", '-54px'],
                ["style", "width", '638px'],
                ["style", "top", '181px'],
                ["transform", "scaleY", '1.04381'],
                ["style", "height", '662px'],
                ["style", "clip", [0,498.5611267089844,642.5968627929688,120.01434326171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_Slideborder}": [
                ["style", "top", '378px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["gradient", "background-image", [270,[['rgba(197,197,197,1.00)',26],['rgba(0,0,0,1.00)',83]]]]
            ],
            "${_viewer3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_Contact_Us}": [
                ["style", "top", '126px'],
                ["style", "display", 'none'],
                ["style", "font-weight", '600'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '187px'],
                ["style", "width", '137px']
            ],
            "${_Black_Box}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["gradient", "background-image", [270,[['rgba(167,167,167,0.00)',0],['rgba(0,0,0,1.00)',100]]]],
                ["style", "display", 'block']
            ],
            "${_viewer1}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ],
            "${_radiobtn}": [
                ["style", "top", '470px'],
                ["style", "height", '104px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '55px'],
                ["style", "width", '187px']
            ],
            "${_Media_Holder}": [
                ["style", "top", '167px'],
                ["style", "opacity", '0'],
                ["style", "height", '2px'],
                ["style", "display", 'none']
            ],
            "${_wheelsbtn}": [
                ["style", "top", '594px'],
                ["style", "height", '104px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '265px'],
                ["style", "width", '187px']
            ],
            "${_Radio_Holder}": [
                ["style", "top", '167px'],
                ["style", "opacity", '0'],
                ["style", "height", '2px'],
                ["style", "display", 'none']
            ],
            "${_Back_Button}": [
                ["style", "display", 'none'],
                ["style", "top", '-2px'],
                ["style", "clip", [-2.439208984375,480,119.51220703125,337.80517578125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '26px']
            ],
            "${_App_BG}": [
                ["style", "top", '0px'],
                ["style", "height", '860px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '505px']
            ],
            "${_Main_Content_Holder}": [
                ["style", "top", '167px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "height", '2px']
            ],
            "${_Follow_Us}": [
                ["style", "top", '-2px'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,479,121,326], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '162px']
            ],
            "${_Buttons}": [
                ["style", "top", '226px'],
                ["transform", "scaleY", '0.09614'],
                ["transform", "scaleX", '0.06827'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '13px'],
                ["style", "clip", [-17.814037322998047,490.8679504394531,784.782470703125,-12.841863632202148], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Services_Banner}": [
                ["style", "top", '-70px'],
                ["style", "clip", [108.536865234375,507,173.170654296875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_Hot_Deal_Banner}": [
                ["style", "top", '-70px'],
                ["style", "clip", [108.53686523438,507,173.17065429688,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-2px'],
                ["style", "width", '507px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '860px'],
                ["style", "width", '505px']
            ],
            "${_mediabtn}": [
                ["style", "top", '470px'],
                ["style", "height", '104px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '267px'],
                ["style", "width", '188px']
            ],
            "${_Services}": [
                ["style", "top", '126px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '201px'],
                ["style", "width", '108px']
            ],
            "${_viewer4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9115,
            autoPlay: true,
            labels: {
                "Home": 1745,
                "Services": 2892,
                "Contact": 4069,
                "Hot Deals": 4935,
                "Media": 5959,
                "Radio": 7364,
                "Wheels": 7985
            },
            timeline: [
                { id: "eid173", tween: [ "style", "${_Radio_Holder}", "height", '673px', { fromValue: '2px'}], position: 7364, duration: 264, easing: "easeOutQuad" },
                { id: "eid93", tween: [ "style", "${_Contact_Banner}", "display", 'none', { fromValue: 'none'}], position: 1177, duration: 0, easing: "easeOutQuad" },
                { id: "eid94", tween: [ "style", "${_Contact_Banner}", "display", 'block', { fromValue: 'none'}], position: 4069, duration: 0, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "style", "${_Contact_Banner}", "display", 'none', { fromValue: 'block'}], position: 4794, duration: 0, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_Contact_Banner}", "display", 'none', { fromValue: 'none'}], position: 5093, duration: 0, easing: "easeOutQuad" },
                { id: "eid189", tween: [ "style", "${_Wheels_Banner}", "display", 'none', { fromValue: 'none'}], position: 5093, duration: 0, easing: "easeOutQuad" },
                { id: "eid190", tween: [ "style", "${_Wheels_Banner}", "display", 'block', { fromValue: 'none'}], position: 7985, duration: 0, easing: "easeOutQuad" },
                { id: "eid191", tween: [ "style", "${_Wheels_Banner}", "display", 'block', { fromValue: 'block'}], position: 8710, duration: 0, easing: "easeOutQuad" },
                { id: "eid192", tween: [ "style", "${_Wheels_Banner}", "display", 'none', { fromValue: 'block'}], position: 8759, duration: 0, easing: "easeOutQuad" },
                { id: "eid193", tween: [ "style", "${_Wheels_Banner}", "display", 'none', { fromValue: 'none'}], position: 9009, duration: 0, easing: "easeOutQuad" },
                { id: "eid116", tween: [ "style", "${_radiobtn}", "opacity", '0', { fromValue: '0'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid255", tween: [ "style", "${_Service_Trans_Image}", "opacity", '0.04', { fromValue: '0'}], position: 3670, duration: 141, easing: "easeOutQuad" },
                { id: "eid49", tween: [ "style", "${_Follow_Us}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutBack" },
                { id: "eid7", tween: [ "style", "${_Logo}", "left", '-2px', { fromValue: '-202px'}], position: 453, duration: 453, easing: "easeOutBack" },
                { id: "eid112", tween: [ "style", "${_hotdealbtn}", "opacity", '0', { fromValue: '0'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid61", tween: [ "style", "${_Main_Content_Holder}", "opacity", '1', { fromValue: '0'}], position: 3295, duration: 264, easing: "easeOutQuad" },
                { id: "eid196", tween: [ "style", "${_Wheels_Holder}", "display", 'none', { fromValue: 'none'}], position: 5093, duration: 0, easing: "easeOutQuad" },
                { id: "eid197", tween: [ "style", "${_Wheels_Holder}", "display", 'block', { fromValue: 'none'}], position: 7985, duration: 0, easing: "easeOutQuad" },
                { id: "eid198", tween: [ "style", "${_Wheels_Holder}", "display", 'block', { fromValue: 'block'}], position: 8710, duration: 0, easing: "easeOutQuad" },
                { id: "eid199", tween: [ "style", "${_Wheels_Holder}", "display", 'none', { fromValue: 'block'}], position: 8759, duration: 0, easing: "easeOutQuad" },
                { id: "eid200", tween: [ "style", "${_Wheels_Holder}", "display", 'none', { fromValue: 'none'}], position: 9009, duration: 0, easing: "easeOutQuad" },
                { id: "eid290", tween: [ "style", "${_viewer2}", "top", '164px', { fromValue: '206px'}], position: 4735, duration: 1873 },
                { id: "eid291", tween: [ "style", "${_viewer2}", "top", '171px', { fromValue: '164px'}], position: 6608, duration: 35 },
                { id: "eid151", tween: [ "style", "${_Media_Banner}", "opacity", '1', { fromValue: '0'}], position: 5976, duration: 403, easing: "easeOutBack" },
                { id: "eid195", tween: [ "style", "${_Wheels_Banner}", "top", '-2px', { fromValue: '-70px'}], position: 7985, duration: 403, easing: "easeOutQuad" },
                { id: "eid237", tween: [ "style", "${_viewer2}", "opacity", '1', { fromValue: '0'}], position: 6551, duration: 92, easing: "easeOutQuad" },
                { id: "eid59", tween: [ "style", "${_Main_Content_Holder}", "height", '673px', { fromValue: '2px'}], position: 3295, duration: 264, easing: "easeOutQuad" },
                { id: "eid286", tween: [ "style", "${_black_pattern}", "opacity", '0.29914531111717224', { fromValue: '0'}], position: 2126, duration: 124 },
                { id: "eid13", tween: [ "style", "${_Follow_Us}", "opacity", '1', { fromValue: '0'}], position: 809, duration: 238 },
                { id: "eid250", tween: [ "style", "${_viewer4}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 127, easing: "easeOutQuad" },
                { id: "eid130", tween: [ "style", "${_Hot_Deal_Banner}", "top", '-2px', { fromValue: '-70px'}], position: 4935, duration: 403, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "style", "${_Hot_Deals}", "display", 'none', { fromValue: 'none'}], position: 2043, duration: 0, easing: "easeOutQuad" },
                { id: "eid126", tween: [ "style", "${_Hot_Deals}", "display", 'block', { fromValue: 'none'}], position: 4935, duration: 0, easing: "easeOutQuad" },
                { id: "eid127", tween: [ "style", "${_Hot_Deals}", "display", 'none', { fromValue: 'block'}], position: 5660, duration: 0, easing: "easeOutQuad" },
                { id: "eid128", tween: [ "style", "${_Hot_Deals}", "display", 'none', { fromValue: 'none'}], position: 5959, duration: 0, easing: "easeOutQuad" },
                { id: "eid131", tween: [ "style", "${_Hot_Deal_Banner}", "opacity", '1', { fromValue: '0'}], position: 4935, duration: 403, easing: "easeOutBack" },
                { id: "eid276", tween: [ "style", "${_NavBar}", "top", '59px', { fromValue: '-92px'}], position: 0, duration: 500 },
                { id: "eid292", tween: [ "style", "${_Buttons}", "left", '13px', { fromValue: '13px'}], position: 2250, duration: 0 },
                { id: "eid293", tween: [ "style", "${_Buttons}", "left", '14px', { fromValue: '13px'}], position: 2663, duration: 0 },
                { id: "eid258", tween: [ "style", "${_viewer5}", "left", '11px', { fromValue: '11px'}], position: 4735, duration: 0, easing: "easeOutQuad" },
                { id: "eid79", tween: [ "style", "${_servicebtn}", "opacity", '0', { fromValue: '0'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${_App_BG_2}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutBack" },
                { id: "eid53", tween: [ "style", "${_App_BG_2}", "display", 'block', { fromValue: 'none'}], position: 2892, duration: 0, easing: "easeOutBack" },
                { id: "eid283", tween: [ "style", "${_Slideborder}", "opacity", '1', { fromValue: '0'}], position: 1444, duration: 120 },
                { id: "eid103", tween: [ "style", "${_Contact_View}", "opacity", '1', { fromValue: '0'}], position: 4472, duration: 264, easing: "easeOutQuad" },
                { id: "eid205", tween: [ "style", "${_RadioAno}", "left", '191px', { fromValue: '191px'}], position: 7627, duration: 0, easing: "easeOutQuad" },
                { id: "eid57", tween: [ "style", "${_Services_Banner}", "opacity", '1', { fromValue: '0'}], position: 2892, duration: 403, easing: "easeOutBack" },
                { id: "eid118", tween: [ "style", "${_mediabtn}", "opacity", '0', { fromValue: '0'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid287", tween: [ "style", "${_black_pattern}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0 },
                { id: "eid226", tween: [ "style", "${_viewer1}", "opacity", '1', { fromValue: '0'}], position: 4637, duration: 98, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${_Buttons}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 413, easing: "easeOutBack" },
                { id: "eid284", tween: [ "style", "${_Slideborder}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0 },
                { id: "eid97", tween: [ "style", "${_Contact_Banner}", "opacity", '1', { fromValue: '0'}], position: 4069, duration: 403, easing: "easeOutBack" },
                { id: "eid188", tween: [ "style", "${_Wheels}", "opacity", '1', { fromValue: '0'}], position: 8296, duration: 356, easing: "easeOutQuad" },
                { id: "eid167", tween: [ "style", "${_Radio_Banner}", "top", '-2px', { fromValue: '-70px'}], position: 6961, duration: 403, easing: "easeOutQuad" },
                { id: "eid147", tween: [ "style", "${_Media_Banner}", "display", 'none', { fromValue: 'none'}], position: 3084, duration: 0, easing: "easeOutQuad" },
                { id: "eid148", tween: [ "style", "${_Media_Banner}", "display", 'block', { fromValue: 'none'}], position: 5976, duration: 0, easing: "easeOutQuad" },
                { id: "eid149", tween: [ "style", "${_Media_Banner}", "display", 'block', { fromValue: 'block'}], position: 6701, duration: 0, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_Media_Banner}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0, easing: "easeOutQuad" },
                { id: "eid150", tween: [ "style", "${_Media_Banner}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "style", "${_Buttons}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutBack" },
                { id: "eid257", tween: [ "style", "${_Service_Trans_Image}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid265", tween: [ "style", "${_Service_Trans_Image}", "display", 'block', { fromValue: 'none'}], position: 3811, duration: 0, easing: "easeOutQuad" },
                { id: "eid256", tween: [ "style", "${_Service_Trans_Image}", "display", 'none', { fromValue: 'block'}], position: 3916, duration: 0, easing: "easeOutQuad" },
                { id: "eid203", tween: [ "style", "${_RadioAno}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid204", tween: [ "style", "${_RadioAno}", "display", 'block', { fromValue: 'none'}], position: 6961, duration: 0, easing: "easeOutQuad" },
                { id: "eid182", tween: [ "style", "${_RadioAno}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0, easing: "easeOutQuad" },
                { id: "eid153", tween: [ "style", "${_Media_Holder}", "height", '665px', { fromValue: '2px'}], position: 6379, duration: 264, easing: "easeOutQuad" },
                { id: "eid174", tween: [ "style", "${_Radio_Holder}", "opacity", '1', { fromValue: '0'}], position: 7364, duration: 264, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_Contact_Banner}", "top", '-2px', { fromValue: '-70px'}], position: 4069, duration: 403, easing: "easeOutQuad" },
                { id: "eid146", tween: [ "style", "${_Media}", "opacity", '1', { fromValue: '0'}], position: 6287, duration: 356, easing: "easeOutQuad" },
                { id: "eid117", tween: [ "style", "${_mediabtn}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid123", tween: [ "style", "${_mediabtn}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid248", tween: [ "style", "${_viewer3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_viewer3}", "display", 'none', { fromValue: 'none'}], position: 7832, duration: 0, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_viewer3}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0, easing: "easeOutQuad" },
                { id: "eid247", tween: [ "style", "${_viewer3}", "display", 'none', { fromValue: 'block'}], position: 8759, duration: 0, easing: "easeOutQuad" },
                { id: "eid288", tween: [ "transform", "${_viewer2}", "scaleY", '0.98386', { fromValue: '1.12395'}], position: 4735, duration: 1873 },
                { id: "eid289", tween: [ "transform", "${_viewer2}", "scaleY", '0.99888', { fromValue: '0.98386'}], position: 6608, duration: 35 },
                { id: "eid168", tween: [ "style", "${_Radio_Banner}", "opacity", '1', { fromValue: '0'}], position: 6961, duration: 403, easing: "easeOutBack" },
                { id: "eid55", tween: [ "style", "${_Services_Banner}", "top", '-2px', { fromValue: '-70px'}], position: 2892, duration: 403, easing: "easeOutQuad" },
                { id: "eid9", tween: [ "style", "${_Logo}", "opacity", '1', { fromValue: '0'}], position: 453, duration: 453, easing: "easeOutBack" },
                { id: "eid113", tween: [ "style", "${_wheelsbtn}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_wheelsbtn}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid142", tween: [ "style", "${_Media}", "display", 'none', { fromValue: 'none'}], position: 3084, duration: 0, easing: "easeOutQuad" },
                { id: "eid143", tween: [ "style", "${_Media}", "display", 'block', { fromValue: 'none'}], position: 5976, duration: 0, easing: "easeOutQuad" },
                { id: "eid144", tween: [ "style", "${_Media}", "display", 'block', { fromValue: 'block'}], position: 6701, duration: 0, easing: "easeOutQuad" },
                { id: "eid159", tween: [ "style", "${_Media}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "style", "${_Media}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
                { id: "eid88", tween: [ "style", "${_Contact_Us}", "opacity", '1', { fromValue: '0'}], position: 4380, duration: 356, easing: "easeOutQuad" },
                { id: "eid75", tween: [ "style", "${_Services_Text}", "opacity", '1', { fromValue: '0'}], position: 3559, duration: 252, easing: "easeOutQuad" },
                { id: "eid183", tween: [ "style", "${_Wheels}", "display", 'none', { fromValue: 'none'}], position: 5093, duration: 0, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "style", "${_Wheels}", "display", 'block', { fromValue: 'none'}], position: 7985, duration: 0, easing: "easeOutQuad" },
                { id: "eid185", tween: [ "style", "${_Wheels}", "display", 'block', { fromValue: 'block'}], position: 8710, duration: 0, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_Wheels}", "display", 'none', { fromValue: 'block'}], position: 8759, duration: 0, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "style", "${_Wheels}", "display", 'none', { fromValue: 'none'}], position: 9009, duration: 0, easing: "easeOutQuad" },
                { id: "eid230", tween: [ "style", "${_viewer1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "style", "${_viewer1}", "display", 'none', { fromValue: 'none'}], position: 3958, duration: 0, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "style", "${_viewer1}", "display", 'block', { fromValue: 'none'}], position: 4637, duration: 0, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_viewer1}", "display", 'none', { fromValue: 'block'}], position: 4865, duration: 0, easing: "easeOutQuad" },
                { id: "eid26", tween: [ "gradient", "${_Black_Box}", "background-image", [270,[['rgba(167,167,167,0.00)',0],['rgba(0,0,0,1.00)',100]]], { fromValue: [270,[['rgba(167,167,167,0.00)',0],['rgba(0,0,0,1.00)',100]]]}], position: 1047, duration: 0 },
                { id: "eid268", tween: [ "style", "${_viewer6}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid48", tween: [ "style", "${_App_BG}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutBack" },
                { id: "eid202", tween: [ "style", "${_Wheels_Holder}", "height", '673px', { fromValue: '2px'}], position: 8388, duration: 264, easing: "easeOutQuad" },
                { id: "eid36", tween: [ "transform", "${_Buttons}", "scaleY", '0.50177', { fromValue: '0.09614'}], position: 2250, duration: 413, easing: "easeOutBack" },
                { id: "eid114", tween: [ "style", "${_wheelsbtn}", "opacity", '0', { fromValue: '0'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid11", tween: [ "style", "${_Follow_Us}", "left", '26px', { fromValue: '162px'}], position: 809, duration: 238 },
                { id: "eid152", tween: [ "style", "${_Media_Banner}", "top", '-2px', { fromValue: '-70px'}], position: 5976, duration: 403, easing: "easeOutQuad" },
                { id: "eid76", tween: [ "style", "${_Services_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid77", tween: [ "style", "${_Services_Text}", "display", 'block', { fromValue: 'none'}], position: 2892, duration: 0, easing: "easeOutQuad" },
                { id: "eid82", tween: [ "style", "${_Services_Text}", "display", 'none', { fromValue: 'block'}], position: 3916, duration: 0, easing: "easeOutQuad" },
                { id: "eid129", tween: [ "style", "${_Hot_Deals}", "opacity", '1', { fromValue: '0'}], position: 5246, duration: 356, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "style", "${_Hot_Deals_View_Holder}", "opacity", '1', { fromValue: '0'}], position: 5338, duration: 264, easing: "easeOutQuad" },
                { id: "eid46", tween: [ "style", "${_Black_Box}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutBack" },
                { id: "eid194", tween: [ "style", "${_Wheels_Banner}", "opacity", '1', { fromValue: '0'}], position: 7985, duration: 403, easing: "easeOutBack" },
                { id: "eid62", tween: [ "style", "${_Back_Button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid50", tween: [ "style", "${_Back_Button}", "display", 'none', { fromValue: 'none'}], position: 2815, duration: 0, easing: "easeOutBack" },
                { id: "eid51", tween: [ "style", "${_Back_Button}", "display", 'block', { fromValue: 'none'}], position: 2892, duration: 0, easing: "easeOutBack" },
                { id: "eid132", tween: [ "style", "${_Hot_Deal_Banner}", "display", 'none', { fromValue: 'none'}], position: 2043, duration: 0, easing: "easeOutQuad" },
                { id: "eid133", tween: [ "style", "${_Hot_Deal_Banner}", "display", 'block', { fromValue: 'none'}], position: 4935, duration: 0, easing: "easeOutQuad" },
                { id: "eid134", tween: [ "style", "${_Hot_Deal_Banner}", "display", 'none', { fromValue: 'block'}], position: 5660, duration: 0, easing: "easeOutQuad" },
                { id: "eid135", tween: [ "style", "${_Hot_Deal_Banner}", "display", 'none', { fromValue: 'none'}], position: 5959, duration: 0, easing: "easeOutQuad" },
                { id: "eid65", tween: [ "style", "${_Services}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "style", "${_Services}", "display", 'block', { fromValue: 'none'}], position: 2892, duration: 0, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "style", "${_Services}", "display", 'block', { fromValue: 'block'}], position: 3617, duration: 0, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "style", "${_Services}", "display", 'none', { fromValue: 'block'}], position: 3916, duration: 0, easing: "easeOutQuad" },
                { id: "eid84", tween: [ "style", "${_Contact_Us}", "display", 'none', { fromValue: 'none'}], position: 1177, duration: 0, easing: "easeOutQuad" },
                { id: "eid85", tween: [ "style", "${_Contact_Us}", "display", 'block', { fromValue: 'none'}], position: 4069, duration: 0, easing: "easeOutQuad" },
                { id: "eid86", tween: [ "style", "${_Contact_Us}", "display", 'none', { fromValue: 'block'}], position: 4794, duration: 0, easing: "easeOutQuad" },
                { id: "eid87", tween: [ "style", "${_Contact_Us}", "display", 'none', { fromValue: 'none'}], position: 5093, duration: 0, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "style", "${_Main_Content_Holder}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid73", tween: [ "style", "${_Main_Content_Holder}", "display", 'block', { fromValue: 'none'}], position: 2892, duration: 0, easing: "easeOutQuad" },
                { id: "eid69", tween: [ "style", "${_Main_Content_Holder}", "display", 'block', { fromValue: 'block'}], position: 3617, duration: 0, easing: "easeOutQuad" },
                { id: "eid80", tween: [ "style", "${_Main_Content_Holder}", "display", 'none', { fromValue: 'block'}], position: 3916, duration: 0, easing: "easeOutQuad" },
                { id: "eid252", tween: [ "style", "${_viewer4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid253", tween: [ "style", "${_viewer4}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
                { id: "eid251", tween: [ "style", "${_viewer4}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0, easing: "easeOutQuad" },
                { id: "eid244", tween: [ "style", "${_viewer3}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 151, easing: "easeOutQuad" },
                { id: "eid104", tween: [ "style", "${_Contact_View}", "height", '673px', { fromValue: '2px'}], position: 4472, duration: 264, easing: "easeOutQuad" },
                { id: "eid99", tween: [ "style", "${_Contact_View}", "display", 'none', { fromValue: 'none'}], position: 1177, duration: 0, easing: "easeOutQuad" },
                { id: "eid100", tween: [ "style", "${_Contact_View}", "display", 'block', { fromValue: 'none'}], position: 4069, duration: 0, easing: "easeOutQuad" },
                { id: "eid101", tween: [ "style", "${_Contact_View}", "display", 'none', { fromValue: 'block'}], position: 4794, duration: 0, easing: "easeOutQuad" },
                { id: "eid102", tween: [ "style", "${_Contact_View}", "display", 'none', { fromValue: 'none'}], position: 5093, duration: 0, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "style", "${_Hot_Deals_View_Holder}", "height", '673px', { fromValue: '2px'}], position: 5338, duration: 264, easing: "easeOutQuad" },
                { id: "eid262", tween: [ "style", "${_viewer5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid264", tween: [ "style", "${_viewer5}", "display", 'block', { fromValue: 'none'}], position: 5434, duration: 0, easing: "easeOutQuad" },
                { id: "eid263", tween: [ "style", "${_viewer5}", "display", 'block', { fromValue: 'block'}], position: 5602, duration: 0, easing: "easeOutQuad" },
                { id: "eid261", tween: [ "style", "${_viewer5}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0, easing: "easeOutQuad" },
                { id: "eid109", tween: [ "style", "${_contactbtn}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid120", tween: [ "style", "${_contactbtn}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "style", "${_Hot_Deals_View_Holder}", "display", 'none', { fromValue: 'none'}], position: 2043, duration: 0, easing: "easeOutQuad" },
                { id: "eid139", tween: [ "style", "${_Hot_Deals_View_Holder}", "display", 'block', { fromValue: 'none'}], position: 4935, duration: 0, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "style", "${_Hot_Deals_View_Holder}", "display", 'none', { fromValue: 'block'}], position: 5660, duration: 0, easing: "easeOutQuad" },
                { id: "eid141", tween: [ "style", "${_Hot_Deals_View_Holder}", "display", 'none', { fromValue: 'none'}], position: 5959, duration: 0, easing: "easeOutQuad" },
                { id: "eid110", tween: [ "style", "${_contactbtn}", "opacity", '0', { fromValue: '0'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid278", tween: [ "style", "${_NavBar}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid111", tween: [ "style", "${_hotdealbtn}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid124", tween: [ "style", "${_hotdealbtn}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid260", tween: [ "style", "${_viewer5}", "opacity", '1', { fromValue: '0'}], position: 5434, duration: 168, easing: "easeOutQuad" },
                { id: "eid78", tween: [ "style", "${_servicebtn}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid119", tween: [ "style", "${_servicebtn}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid40", tween: [ "style", "${_Buttons}", "top", '259px', { fromValue: '226px'}], position: 2250, duration: 413, easing: "easeOutBack" },
                { id: "eid115", tween: [ "style", "${_radiobtn}", "display", 'block', { fromValue: 'none'}], position: 2663, duration: 0, easing: "easeOutQuad" },
                { id: "eid122", tween: [ "style", "${_radiobtn}", "display", 'none', { fromValue: 'block'}], position: 2815, duration: 0, easing: "easeOutQuad" },
                { id: "eid201", tween: [ "style", "${_Wheels_Holder}", "opacity", '1', { fromValue: '0'}], position: 8388, duration: 264, easing: "easeOutQuad" },
                { id: "eid155", tween: [ "style", "${_Media_Holder}", "display", 'none', { fromValue: 'none'}], position: 3084, duration: 0, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_Media_Holder}", "display", 'block', { fromValue: 'none'}], position: 5976, duration: 0, easing: "easeOutQuad" },
                { id: "eid157", tween: [ "style", "${_Media_Holder}", "display", 'block', { fromValue: 'block'}], position: 6701, duration: 0, easing: "easeOutQuad" },
                { id: "eid161", tween: [ "style", "${_Media_Holder}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_Media_Holder}", "display", 'none', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
                { id: "eid169", tween: [ "style", "${_Radio_Banner}", "display", 'none', { fromValue: 'none'}], position: 4069, duration: 0, easing: "easeOutQuad" },
                { id: "eid170", tween: [ "style", "${_Radio_Banner}", "display", 'block', { fromValue: 'none'}], position: 6961, duration: 0, easing: "easeOutQuad" },
                { id: "eid171", tween: [ "style", "${_Radio_Banner}", "display", 'none', { fromValue: 'block'}], position: 7686, duration: 0, easing: "easeOutQuad" },
                { id: "eid172", tween: [ "style", "${_Radio_Banner}", "display", 'none', { fromValue: 'none'}], position: 7985, duration: 0, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_Radio_Holder}", "display", 'none', { fromValue: 'none'}], position: 4069, duration: 0, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "style", "${_Radio_Holder}", "display", 'block', { fromValue: 'none'}], position: 6961, duration: 0, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "style", "${_Radio_Holder}", "display", 'none', { fromValue: 'block'}], position: 7686, duration: 0, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "style", "${_Radio_Holder}", "display", 'none', { fromValue: 'none'}], position: 7985, duration: 0, easing: "easeOutQuad" },
                { id: "eid34", tween: [ "transform", "${_Buttons}", "scaleX", '0.94865', { fromValue: '0.06827'}], position: 2250, duration: 413, easing: "easeOutBack" },
                { id: "eid71", tween: [ "style", "${_Services_Banner}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "style", "${_Services_Banner}", "display", 'block', { fromValue: 'none'}], position: 2892, duration: 0, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "style", "${_Services_Banner}", "display", 'block', { fromValue: 'block'}], position: 3617, duration: 0, easing: "easeOutQuad" },
                { id: "eid81", tween: [ "style", "${_Services_Banner}", "display", 'none', { fromValue: 'block'}], position: 3916, duration: 0, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "style", "${_Services}", "opacity", '1', { fromValue: '0'}], position: 3203, duration: 356, easing: "easeOutQuad" },
                { id: "eid154", tween: [ "style", "${_Media_Holder}", "opacity", '1', { fromValue: '0'}], position: 6379, duration: 264, easing: "easeOutQuad" },
                { id: "eid241", tween: [ "style", "${_viewer2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid242", tween: [ "style", "${_viewer2}", "display", 'block', { fromValue: 'none'}], position: 6551, duration: 0, easing: "easeOutQuad" },
                { id: "eid240", tween: [ "style", "${_viewer2}", "display", 'none', { fromValue: 'block'}], position: 6750, duration: 0, easing: "easeOutQuad" },
                { id: "eid281", tween: [ "style", "${_Slideborder}", "top", '408px', { fromValue: '378px'}], position: 1444, duration: 120 }            ]
        }
    }
},
"RadioAno": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    display: 'none',
                    rect: ['0px', '0px', '137px', '31px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '600', 'none', 'normal'],
                    align: 'left',
                    id: 'Radio',
                    text: 'Live Radio',
                    textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Radio}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '0px'],
                ["color", "color", 'rgba(201,11,11,1.00)'],
                ["style", "font-weight", '600'],
                ["style", "left", '0px'],
                ["style", "width", '137px'],
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["subproperty", "textShadow.color", 'rgba(255,0,0,0.65)'],
                ["subproperty", "textShadow.offsetV", '0px'],
                ["style", "opacity", '0']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '137px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9115,
            autoPlay: true,
            labels: {
                "repeat": 7985
            },
            timeline: [
                { id: "eid213", tween: [ "subproperty", "${_Radio}", "textShadow.offsetV", '3px', { fromValue: '0px'}], position: 7985, duration: 1130, easing: "easeOutQuad" },
                { id: "eid206", tween: [ "subproperty", "${_Radio}", "textShadow.color", 'rgba(255,0,0,0.65)', { fromValue: 'rgba(255,0,0,0.65)'}], position: 9115, duration: 0, easing: "easeOutQuad" },
                { id: "eid162", tween: [ "style", "${_Radio}", "display", 'none', { fromValue: 'none'}], position: 4069, duration: 0, easing: "easeOutQuad" },
                { id: "eid163", tween: [ "style", "${_Radio}", "display", 'block', { fromValue: 'none'}], position: 6961, duration: 0, easing: "easeOutQuad" },
                { id: "eid164", tween: [ "style", "${_Radio}", "display", 'none', { fromValue: 'block'}], position: 7686, duration: 0, easing: "easeOutQuad" },
                { id: "eid179", tween: [ "style", "${_Radio}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0, easing: "easeOutQuad" },
                { id: "eid165", tween: [ "style", "${_Radio}", "display", 'block', { fromValue: 'block'}], position: 7985, duration: 0, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "subproperty", "${_Radio}", "textShadow.offsetH", '3px', { fromValue: '0px'}], position: 7985, duration: 1130, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "color", "${_Radio}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(201,11,11,1.00)'}], position: 7985, duration: 1130, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "style", "${_Radio}", "opacity", '1', { fromValue: '0'}], position: 7272, duration: 356, easing: "easeOutQuad" }            ]
        }
    }
},
"SociaMediaBar": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle6',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '505px', '118px', 'auto', 'auto'],
                    fill: ['rgba(7,7,7,1)', [270, [['rgba(0,0,0,1.00)', 0], ['rgba(43,43,43,1.00)', 50], ['rgba(0,0,0,1.00)', 100]]]]
                },
                {
                    fill: ['rgba(0,0,0,0)', 'images/facebook-u9888.png', '0px', '0px'],
                    rect: ['18px', '1px', '150px', '118px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.70067']],
                    type: 'image',
                    id: 'facebook-u9888',
                    opacity: 0.33,
                    clip: ['rect(0px 141.78125px 118px 0px)'],
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)']
                },
                {
                    rect: ['205px', '2px', '98px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/youtube-u6317.png', '0px', '0px'],
                    id: 'youtube-u6317',
                    opacity: 0.33,
                    type: 'image',
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)']
                },
                {
                    rect: ['367px', '1px', '98px', '118px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/instagram-u6318-r.png', '0px', '0px'],
                    id: 'instagram-u6318-r',
                    opacity: 0.33,
                    type: 'image',
                    boxShadow: ['', 0, 0, 0, 0, 'rgba(0,0,0,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '120px'],
                ["style", "width", '505px']
            ],
            "${_instagram-u6318-r}": [
                ["style", "top", '1px'],
                ["style", "height", '118px'],
                ["style", "opacity", '0.33'],
                ["style", "left", '367px'],
                ["style", "width", '98px']
            ],
            "${_youtube-u6317}": [
                ["style", "top", '2px'],
                ["style", "height", '118px'],
                ["style", "opacity", '0.33'],
                ["style", "left", '205px'],
                ["style", "width", '98px']
            ],
            "${_facebook-u9888}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '0.70067'],
                ["style", "clip", [0,141.78125,118,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '118px'],
                ["style", "opacity", '0.33'],
                ["style", "left", '18px'],
                ["style", "width", '150px']
            ],
            "${_Rectangle6}": [
                ["style", "top", '0px'],
                ["style", "height", '118px'],
                ["gradient", "background-image", [270,[['rgba(0,0,0,1.00)',0],['rgba(43,43,43,1.00)',50],['rgba(0,0,0,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '505px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"cviewer": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'contactview',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '480px', '672px', 'auto', 'auto'],
                    fill: ['rgba(205,205,205,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contactview}": [
                ["style", "top", '0px'],
                ["style", "height", '672px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(205,205,205,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '672px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"viewer1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'contact',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '480px', '671px', 'auto', 'auto'],
                    fill: ['rgba(205,205,205,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '671px'],
                ["style", "width", '480px']
            ],
            "${_contact}": [
                ["style", "top", '0px'],
                ["style", "height", '671px'],
                ["style", "left", '0px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"viewer2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '28px', '479px', '605px', 'auto', 'auto'],
                    transform: [[], [], [], ['1', '1.09316']],
                    type: 'rect',
                    id: 'Mediaview',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    clip: ['rect(0px 479px 605px 0px)'],
                    fill: ['rgba(191,189,189,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Mediaview}": [
                ["style", "top", '28px'],
                ["transform", "scaleY", '1.09316'],
                ["style", "height", '605px'],
                ["style", "left", '0px'],
                ["style", "clip", [0,479,605,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "background-color", 'rgba(191,189,189,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '597px'],
                ["style", "width", '479px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"viewer3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '479px', '673px', 'auto', 'auto'],
                    opacity: 1,
                    id: 'wheels',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(173,173,173,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_wheels}": [
                ["color", "background-color", 'rgba(173,173,173,1.00)'],
                ["style", "height", '673px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '673px'],
                ["style", "width", '479px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"viewer4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'radio',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '479px', '671px', 'auto', 'auto'],
                    fill: ['rgba(173,173,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_radio}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '671px']
            ],
            "${symbolSelector}": [
                ["style", "height", '671px'],
                ["style", "width", '479px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"viewer5": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '480px', '671px', 'auto', 'auto'],
                    id: 'deals',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(199,199,199,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_deals}": [
                ["style", "top", '0px'],
                ["style", "height", '671px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(199,199,199,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '671px'],
                ["style", "width", '480px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"viewer6": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '111px', '505px', '313px', 'auto', 'auto'],
                    id: 'slideholder',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(7,7,7,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_slideholder}": [
                ["color", "background-color", 'rgba(7,7,7,1.00)'],
                ["style", "height", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "top", '111px']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1698,
            autoPlay: true,
            timeline: [
                { id: "eid23", tween: [ "style", "${_slideholder}", "height", '313px', { fromValue: '0px'}], position: 1000, duration: 364 },
                { id: "eid25", tween: [ "style", "${_slideholder}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 364 },
                { id: "eid267", tween: [ "style", "${_slideholder}", "opacity", '0.95999999761581', { fromValue: '1'}], position: 1364, duration: 334, easing: "easeOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-300494261");
