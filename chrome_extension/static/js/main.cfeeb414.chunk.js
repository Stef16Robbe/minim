(this.webpackJsonpikigai=this.webpackJsonpikigai||[]).push([[0],{109:function(e,o,a){e.exports=a(175)},114:function(e,o,a){},115:function(e,o,a){},175:function(e,o,a){"use strict";a.r(o);var t=a(0),n=a.n(t),r=a(8),f=a.n(r),g=(a(114),a(115),a(116),a(108)),d=a(98),i=a(40),l=a(41),u=a(45),c=a(42),m=a(46),b=a(185),s=a(178),k=a(182),E=a(179),p=a(183),h=a(180),F=a(184),C=a(181),v=a(106),D={colon:":",space:" ",none:""},A=function(e){function o(){var e;return Object(i.a)(this,o),(e=Object(u.a)(this,Object(c.a)(o).call(this))).getAP=function(){return(new Date).getHours()>=12?"P":"A"},e.getTime=function(e,o){var a=new Date,t=a.getHours(),n=a.getMinutes();"24H"!=o&&(t=(t%=12)||12),t<10&&(t="0"+t),n<10&&(n="0"+n);var r=t+D[e]+n;return localStorage.setItem("time",r),r},e.state={timeString:e.getTime(localStorage.getItem("clock_seperator"),localStorage.getItem("clock_format")),ap:e.getAP()},e}return Object(m.a)(o,e),Object(l.a)(o,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({ap:e.getAP(),timeString:e.getTime(e.props.clock_seperator,e.props.clock_format)})}),1e3)}},{key:"render",value:function(){return n.a.createElement("div",{style:{textAlign:"center",color:this.props.foreground,fontSize:120,fontFamily:this.props.font,padding:"1px 45px",border:"".concat("rounded"==this.props.clock_border?"solid":this.props.clock_border," 10px"),borderRadius:"rounded"==this.props.clock_border?30:0}},n.a.createElement("span",null,this.state.timeString,n.a.createElement("span",null,"12HAP"==this.props.clock_format&&n.a.createElement("sup",{className:"ampm"},this.state.ap))))}}]),o}(t.Component),S=function(e){function o(){return Object(i.a)(this,o),Object(u.a)(this,Object(c.a)(o).apply(this,arguments))}return Object(m.a)(o,e),Object(l.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{style:{textAlign:"center",color:this.props.foreground,fontSize:parseInt(this.props.message_size),fontFamily:this.props.font,padding:"1px 45px"}},n.a.createElement("span",null,this.props.message))}}]),o}(t.Component),B={flat:[{background:["#ffffff"],foreground:"#111",name:"Minimal"},{background:["#000"],foreground:"#fff",name:"Minimal Inverted"},{background:["#f00"],foreground:"#111",name:"Brutal Red"},{background:["#00f"],foreground:"#fff",name:"Brutal Blue"},{background:["#1abc9c"],foreground:"#fff",name:"Turquoise"},{background:["#16a085"],foreground:"#fff",name:"Green sea"},{background:["#2ecc71"],foreground:"#fff",name:"Emerald"},{background:["#27ae60"],foreground:"#fff",name:"Nephritis"},{background:["#3498db"],foreground:"#fff",name:"Peter river"},{background:["#2980b9"],foreground:"#fff",name:"Belize hole"},{background:["#9b59b6"],foreground:"#fff",name:"Amethyst"},{background:["#8e44ad"],foreground:"#fff",name:"Wisteria"},{background:["#34495e"],foreground:"#fff",name:"Wet asphalt"},{background:["#2c3e50"],foreground:"#fff",name:"Midnight blue"},{background:["#f1c40f"],foreground:"#fff",name:"Sun flower"},{background:["#f39c12"],foreground:"#fff",name:"Orange"},{background:["#e67e22"],foreground:"#fff",name:"Carrot"},{background:["#d35400"],foreground:"#fff",name:"Pumpkin"},{background:["#e74c3c"],foreground:"#fff",name:"Alizarin"},{background:["#c0392b"],foreground:"#fff",name:"Pomegranate"},{background:["#ecf0f1"],foreground:"#779",name:"Clouds"},{background:["#bdc3c7"],foreground:"#fff",name:"Silver"},{background:["#95a5a6"],foreground:"#fff",name:"Concrete"},{background:["#7f8c8d"],foreground:"#fff",name:"Asbestos"}],gradient:[{name:"YouTube",foreground:"#fff",background:"linear-gradient(to bottom, #e52d27 0%,#b31217 100%)"},{name:"Cool Brown",foreground:"#fff",background:"linear-gradient(to bottom, #603813 0%,#b29f94 100%)"},{name:"Harmonic Energy",foreground:"#fff",background:"linear-gradient(to bottom, #16A085 0%,#F4D03F 100%)"},{name:"Playing with Reds",foreground:"#fff",background:"linear-gradient(to bottom, #D31027 0%,#EA384D 100%)"},{name:"Sunny Days",foreground:"#FF5600",background:"linear-gradient(to bottom, #EDE574 0%,#E1F5C4 100%)"},{name:"Green Beach",foreground:"#fff",background:"linear-gradient(to bottom, #02AAB0 0%,#00CDAC 100%)"},{name:"Intuitive Purple",foreground:"#fff",background:"linear-gradient(to bottom, #DA22FF 0%,#9733EE 100%)"},{name:"Emerald Water",foreground:"#fff",background:"linear-gradient(to bottom, #348F50 0%,#56B4D3 100%)"},{name:"Lemon Twist",foreground:"#fff",background:"linear-gradient(to bottom, #3CA55C 0%,#B5AC49 100%)"},{name:"Horizon",foreground:"#fff",background:"linear-gradient(to bottom, #003973 0%,#E5E5BE 100%)"},{name:"Rose Water",foreground:"#fff",background:"linear-gradient(to bottom, #E55D87 0%,#5FC3E4 100%)"},{name:"Frozen",foreground:"#fff",background:"linear-gradient(to bottom, #403B4A 0%,#E7E9BB 100%)"},{name:"Mango Pulp",foreground:"#fff",background:"linear-gradient(to bottom, #F09819 0%,#EDDE5D 100%)"},{name:"Bloody Mary",foreground:"#fff",background:"linear-gradient(to bottom, #FF512F 0%,#DD2476 100%)"},{name:"Aubergine",foreground:"#fff",background:"linear-gradient(to bottom, #AA076B 0%,#61045F 100%)"},{name:"Aqua Marine",foreground:"#fff",background:"linear-gradient(to bottom, #1A2980 0%,#26D0CE 100%)"},{name:"Sunrise",foreground:"#fff",background:"linear-gradient(to bottom, #FF512F 0%,#F09819 100%)"},{name:"Purple Paradise",foreground:"#fff",background:"linear-gradient(to bottom, #1D2B64 0%,#F8CDDA 100%)"},{name:"Sea Weed",foreground:"#fff",background:"linear-gradient(to bottom, #4CB8C4 0%,#3CD3AD 100%)"},{name:"Pinky",foreground:"#fff",background:"linear-gradient(to bottom, #DD5E89 0%,#F7BB97 100%)"},{name:"Cherry",foreground:"#fff",background:"linear-gradient(to bottom, #EB3349 0%,#F45C43 100%)"},{name:"Mojito",foreground:"#fff",background:"linear-gradient(to bottom, #1D976C 0%,#93F9B9 100%)"},{name:"Juicy Orange",foreground:"#fff",background:"linear-gradient(to bottom, #FF8008 0%,#FFC837 100%)"},{name:"Mirage",foreground:"#fff",background:"linear-gradient(to bottom, #16222A 0%,#3A6073 100%)"},{name:"Steel Gray",foreground:"#fff",background:"linear-gradient(to bottom, #1F1C2C 0%,#928DAB 100%)"},{name:"Kashmir",foreground:"#fff",background:"linear-gradient(to bottom, #614385 0%,#516395 100%)"},{name:"Electric Violet",foreground:"#fff",background:"linear-gradient(to bottom, #4776E6 0%,#8E54E9 100%)"},{name:"Venice Blue",foreground:"#fff",background:"linear-gradient(to bottom, #085078 0%,#85D8CE 100%)"},{name:"Bora Bora",foreground:"#111",background:"linear-gradient(to bottom, #2BC0E4 0%,#EAECC6 100%)"},{name:"Moss",foreground:"#fff",background:"linear-gradient(to bottom, #134E5E 0%,#71B280 100%)"},{name:"Shroom Haze",foreground:"#fff",background:"linear-gradient(to bottom, #5C258D 0%,#4389A2 100%)"},{name:"Mystic",foreground:"#111",background:"linear-gradient(to bottom, #757F9A 0%,#D7DDE8 100%)"},{name:"Midnight City",foreground:"#fff",background:"linear-gradient(to bottom, #232526 0%,#414345 100%)"},{name:"Sea Blizz",foreground:"#fff",background:"linear-gradient(to bottom, #1CD8D2 0%,#93EDC7 100%)"},{name:"Opa",foreground:"#fff",background:"linear-gradient(to bottom, #3D7EAA 0%,#FFE47A 100%)"},{name:"Titanium",foreground:"#fff",background:"linear-gradient(to bottom, #283048 0%,#859398 100%)"},{name:"Mantle",foreground:"#fff",background:"linear-gradient(to bottom, #24C6DC 0%,#514A9D 100%)"},{name:"Dracula",foreground:"#fff",background:"linear-gradient(to bottom, #DC2424 0%,#4A569D 100%)"},{name:"Peach",foreground:"#fff",background:"linear-gradient(to bottom, #ED4264 0%,#FFEDBC 100%)"},{name:"Moonrise",foreground:"#fff",background:"linear-gradient(to bottom, #DAE2F8 0%,#D6A4A4 100%)"},{name:"Clouds",foreground:"#777",background:"linear-gradient(to bottom, #ECE9E6 0%,#FFFFFF 100%)"},{name:"Stellar",foreground:"#fff",background:"linear-gradient(to bottom, #7474BF 0%,#348AC7 100%)"},{name:"Bourbon",foreground:"#fff",background:"linear-gradient(to bottom, #EC6F66 0%,#F3A183 100%)"},{name:"Calm Darya",foreground:"#fff",background:"linear-gradient(to bottom, #5f2c82 0%,#49a09d 100%)"},{name:"Influenza",foreground:"#fff",background:"linear-gradient(to bottom, #C04848 0%,#480048 100%)"},{name:"Shrimpy",foreground:"#fff",background:"linear-gradient(to bottom, #e43a15 0%,#e65245 100%)"},{name:"Army",foreground:"#fff",background:"linear-gradient(to bottom, #414d0b 0%,#727a17 100%)"},{name:"Miaka",foreground:"#fff",background:"linear-gradient(to bottom, #FC354C 0%,#0ABFBC 100%)"},{name:"Pinot Noir",foreground:"#fff",background:"linear-gradient(to bottom, #4b6cb7 0%,#182848 100%)"},{name:"Day Tripper",foreground:"#fff",background:"linear-gradient(to bottom, #f857a6 0%,#ff5858 100%)"},{name:"Namn",foreground:"#fff",background:"linear-gradient(to bottom, #a73737 0%,#7a2828 100%)"},{name:"Blurry Beach",foreground:"#fff",background:"linear-gradient(to bottom, #d53369 0%,#cbad6d 100%)"},{name:"Vasily",foreground:"#fff",background:"linear-gradient(to bottom, #e9d362 0%,#333333 100%)"},{name:"A Lost Memory",foreground:"#fff",background:"linear-gradient(to bottom, #DE6262 0%,#FFB88C 100%)"},{name:"Petrichor",foreground:"#fff",background:"linear-gradient(to bottom, #666600 0%,#999966 100%)"},{name:"Jonquil",foreground:"#711",background:"linear-gradient(to bottom, #FFEEEE 0%,#DDEFBB 100%)"},{name:"Sirius Tamed",foreground:"#fff",background:"linear-gradient(to bottom, #EFEFBB 0%,#D4D3DD 100%)"},{name:"Kyoto",foreground:"#fff",background:"linear-gradient(to bottom, #c21500 0%,#ffc500 100%)"},{name:"Misty Meadow",foreground:"#fff",background:"linear-gradient(to bottom, #215f00 0%,#e4e4d9 100%)"},{name:"Aqualicious",foreground:"#fff",background:"linear-gradient(to bottom, #50C9C3 0%,#96DEDA 100%)"},{name:"Moor",foreground:"#fff",background:"linear-gradient(to bottom, #616161 0%,#9bc5c3 100%)"},{name:"Almost",foreground:"#fff",background:"linear-gradient(to bottom, #ddd6f3 0%,#faaca8 100%)"},{name:"Forever Lost",foreground:"#fff",background:"linear-gradient(to bottom, #5D4157 0%,#A8CABA 100%)"},{name:"Winter",foreground:"#fff",background:"linear-gradient(to bottom, #E6DADA 0%,#274046 100%)"},{name:"Autumn",foreground:"#fff",background:"linear-gradient(to bottom, #DAD299 0%,#B0DAB9 100%)"},{name:"Candy",foreground:"#fff",background:"linear-gradient(to bottom, #D3959B 0%,#BFE6BA 100%)"},{name:"Reef",foreground:"#fff",background:"linear-gradient(to bottom, #00d2ff 0%,#3a7bd5 100%)"},{name:"The Strain",foreground:"#fff",background:"linear-gradient(to bottom, #870000 0%,#190A05 100%)"},{name:"Dirty Fog",foreground:"#fff",background:"linear-gradient(to bottom, #B993D6 0%,#8CA6DB 100%)"},{name:"Earthly",foreground:"#fff",background:"linear-gradient(to bottom, #649173 0%,#DBD5A4 100%)"},{name:"Virgin",foreground:"#fff",background:"linear-gradient(to bottom, #C9FFBF 0%,#FFAFBD 100%)"},{name:"Ash",foreground:"#fff",background:"linear-gradient(to bottom, #606c88 0%,#3f4c6b 100%)"},{name:"Shadow Night",foreground:"#fff",background:"linear-gradient(to bottom, #000000 0%,#53346D 100%)"},{name:"Cherryblossoms",foreground:"#fff",background:"linear-gradient(to bottom, #FBD3E9 0%,#BB377D 100%)"},{name:"Parklife",foreground:"#fff",background:"linear-gradient(to bottom, #ADD100 0%,#7B920A 100%)"},{name:"Dance To Forget",foreground:"#fff",background:"linear-gradient(to bottom, #FF4E50 0%,#F9D423 100%)"},{name:"Starfall",foreground:"#fff",background:"linear-gradient(to bottom, #F0C27B 0%,#4B1248 100%)"},{name:"Red Mist",foreground:"#fff",background:"linear-gradient(to bottom, #000000 0%,#e74c3c 100%)"},{name:"Teal Love",foreground:"#fff",background:"linear-gradient(to bottom, #AAFFA9 0%,#11FFBD 100%)"},{name:"Neon Life",foreground:"#fff",background:"linear-gradient(to bottom, #B3FFAB 0%,#12FFF7 100%)"},{name:"Man of Steel",foreground:"#fff",background:"linear-gradient(to bottom, #780206 0%,#061161 100%)"},{name:"Amethyst",foreground:"#fff",background:"linear-gradient(to bottom, #9D50BB 0%,#6E48AA 100%)"},{name:"Cheer Up Emo Kid",foreground:"#fff",background:"linear-gradient(to bottom, #556270 0%,#FF6B6B 100%)"},{name:"Shore",foreground:"#fff",background:"linear-gradient(to bottom, #70e1f5 0%,#ffd194 100%)"},{name:"Facebook Messenger",foreground:"#fff",background:"linear-gradient(to bottom, #00c6ff 0%,#0072ff 100%)"},{name:"SoundCloud",foreground:"#fff",background:"linear-gradient(to bottom, #fe8c00 0%,#f83600 100%)"},{name:"Behongo",foreground:"#fff",background:"linear-gradient(to bottom, #52c234 0%,#061700 100%)"},{name:"ServQuick",foreground:"#fff",background:"linear-gradient(to bottom, #485563 0%,#29323c 100%)"},{name:"Friday",foreground:"#fff",background:"linear-gradient(to bottom, #83a4d4 0%,#b6fbff 100%)"},{name:"Martini",foreground:"#fff",background:"linear-gradient(to bottom, #FDFC47 0%,#24FE41 100%)"},{name:"Metallic Toad",foreground:"#fff",background:"linear-gradient(to bottom, #abbaab 0%,#ffffff 100%)"},{name:"Between The Clouds",foreground:"#fff",background:"linear-gradient(to bottom, #73C8A9 0%,#373B44 100%)"},{name:"Crazy Orange I",foreground:"#fff",background:"linear-gradient(to bottom, #D38312 0%,#A83279 100%)"},{name:"Hersheys",foreground:"#fff",background:"linear-gradient(to bottom, #1e130c 0%,#9a8478 100%)"},{name:"Talking To Mice Elf",foreground:"#fff",background:"linear-gradient(to bottom, #948E99 0%,#2E1437 100%)"},{name:"Purple Bliss",foreground:"#fff",background:"linear-gradient(to bottom, #360033 0%,#0b8793 100%)"},{name:"Predawn",foreground:"#fff",background:"linear-gradient(to bottom, #FFA17F 0%,#00223E 100%)"},{name:"Endless River",foreground:"#fff",background:"linear-gradient(to bottom, #43cea2 0%,#185a9d 100%)"},{name:"Pastel Orange at the Sun",foreground:"#fff",background:"linear-gradient(to bottom, #ffb347 0%,#ffcc33 100%)"},{name:"Twitch",foreground:"#fff",background:"linear-gradient(to bottom, #6441A5 0%,#2a0845 100%)"},{name:"Instagram",foreground:"#fff",background:"linear-gradient(to bottom, #517fa4 0%,#243949 100%)"},{name:"Flickr",foreground:"#fff",background:"linear-gradient(to bottom, #ff0084 0%,#33001b 100%)"},{name:"Vine",foreground:"#fff",background:"linear-gradient(to bottom, #00bf8f 0%,#001510 100%)"},{name:"Turquoise flow",foreground:"#fff",background:"linear-gradient(to bottom, #136a8a 0%,#267871 100%)"},{name:"Portrait",foreground:"#fff",background:"linear-gradient(to bottom, #8e9eab 0%,#eef2f3 100%)"},{name:"Virgin America",foreground:"#fff",background:"linear-gradient(to bottom, #7b4397 0%,#dc2430 100%)"},{name:"Koko Caramel",foreground:"#fff",background:"linear-gradient(to bottom, #D1913C 0%,#FFD194 100%)"},{name:"Fresh Turboscent",foreground:"#fff",background:"linear-gradient(to bottom, #F1F2B5 0%,#135058 100%)"},{name:"Green to dark",foreground:"#fff",background:"linear-gradient(to bottom, #6A9113 0%,#141517 100%)"},{name:"Ukraine",foreground:"#fff",background:"linear-gradient(to bottom, #004FF9 0%,#FFF94C 100%)"},{name:"Curiosity blue",foreground:"#fff",background:"linear-gradient(to bottom, #525252 0%,#3d72b4 100%)"},{name:"Dark Knight",foreground:"#fff",background:"linear-gradient(to bottom, #BA8B02 0%,#181818 100%)"},{name:"Piglet",foreground:"#fff",background:"linear-gradient(to bottom, #ee9ca7 0%,#ffdde1 100%)"},{name:"Lizard",foreground:"#fff",background:"linear-gradient(to bottom, #304352 0%,#d7d2cc 100%)"},{name:"Sage Persuasion",foreground:"#fff",background:"linear-gradient(to bottom, #CCCCB2 0%,#757519 100%)"},{name:"Between Night and Day",foreground:"#fff",background:"linear-gradient(to bottom, #2c3e50 0%,#3498db 100%)"},{name:"Timber",foreground:"#fff",background:"linear-gradient(to bottom, #fc00ff 0%,#00dbde 100%)"},{name:"Passion",foreground:"#fff",background:"linear-gradient(to bottom, #e53935 0%,#e35d5b 100%)"},{name:"Clear Sky",foreground:"#fff",background:"linear-gradient(to bottom, #005C97 0%,#363795 100%)"},{name:"Master Card",foreground:"#fff",background:"linear-gradient(to bottom, #f46b45 0%,#eea849 100%)"},{name:"Back To Earth",foreground:"#fff",background:"linear-gradient(to bottom, #00C9FF 0%,#92FE9D 100%)"},{name:"Deep Purple",foreground:"#fff",background:"linear-gradient(to bottom, #673AB7 0%,#512DA8 100%)"},{name:"Little Leaf",foreground:"#fff",background:"linear-gradient(to bottom, #76b852 0%,#8DC26F 100%)"},{name:"Netflix",foreground:"#fff",background:"linear-gradient(to bottom, #8E0E00 0%,#1F1C18 100%)"},{name:"Light Orange",foreground:"#fff",background:"linear-gradient(to bottom, #FFB75E 0%,#ED8F03 100%)"},{name:"Green and Blue",foreground:"#fff",background:"linear-gradient(to bottom, #c2e59c 0%,#64b3f4 100%)"},{name:"Poncho",foreground:"#fff",background:"linear-gradient(to bottom, #403A3E 0%,#BE5869 100%)"},{name:"Back to the Future",foreground:"#fff",background:"linear-gradient(to bottom, #C02425 0%,#F0CB35 100%)"},{name:"Blush",foreground:"#fff",background:"linear-gradient(to bottom, #B24592 0%,#F15F79 100%)"},{name:"Inbox",foreground:"#fff",background:"linear-gradient(to bottom, #457fca 0%,#5691c8 100%)"},{name:"Purplin",foreground:"#fff",background:"linear-gradient(to bottom, #6a3093 0%,#a044ff 100%)"},{name:"Pale Wood",foreground:"#fff",background:"linear-gradient(to bottom, #eacda3 0%,#d6ae7b 100%)"},{name:"Haikus",foreground:"#fff",background:"linear-gradient(to bottom, #fd746c 0%,#ff9068 100%)"},{name:"Pizelex",foreground:"#fff",background:"linear-gradient(to bottom, #114357 0%,#F29492 100%)"},{name:"Joomla",foreground:"#fff",background:"linear-gradient(to bottom, #1e3c72 0%,#2a5298 100%)"},{name:"Christmas",foreground:"#fff",background:"linear-gradient(to bottom, #2F7336 0%,#AA3A38 100%)"},{name:"Minnesota Vikings",foreground:"#fff",background:"linear-gradient(to bottom, #5614B0 0%,#DBD65C 100%)"},{name:"Miami Dolphins",foreground:"#fff",background:"linear-gradient(to bottom, #4DA0B0 0%,#D39D38 100%)"},{name:"Forest",foreground:"#fff",background:"linear-gradient(to bottom, #5A3F37 0%,#2C7744 100%)"},{name:"Nighthawk",foreground:"#fff",background:"linear-gradient(to bottom, #2980b9 0%,#2c3e50 100%)"},{name:"Superman",foreground:"#fff",background:"linear-gradient(to bottom, #0099F7 0%,#F11712 100%)"},{name:"Suzy",foreground:"#fff",background:"linear-gradient(to bottom, #834d9b 0%,#d04ed6 100%)"},{name:"Dark Skies",foreground:"#fff",background:"linear-gradient(to bottom, #4B79A1 0%,#283E51 100%)"},{name:"Deep Space",foreground:"#fff",background:"linear-gradient(to bottom, #000000 0%,#434343 100%)"},{name:"Decent",foreground:"#fff",background:"linear-gradient(to bottom, #4CA1AF 0%,#C4E0E5 100%)"},{name:"Colors Of Sky",foreground:"#fff",background:"linear-gradient(to bottom, #E0EAFC 0%,#CFDEF3 100%)"},{name:"Purple White",foreground:"#fff",background:"linear-gradient(to bottom, #BA5370 0%,#F4E2D8 100%)"},{name:"Ali",foreground:"#fff",background:"linear-gradient(to bottom, #ff4b1f 0%,#1fddff 100%)"},{name:"Alihossein",foreground:"#fff",background:"linear-gradient(to bottom, #f7ff00 0%,#db36a4 100%)"},{name:"Shahabi",foreground:"#fff",background:"linear-gradient(to bottom, #a80077 0%,#66ff00 100%)"},{name:"Red Ocean",foreground:"#fff",background:"linear-gradient(to bottom, #1D4350 0%,#A43931 100%)"},{name:"Tranquil",foreground:"#fff",background:"linear-gradient(to bottom, #EECDA3 0%,#EF629F 100%)"},{name:"Transfile",foreground:"#fff",background:"linear-gradient(to bottom, #16BFFD 0%,#CB3066 100%)"},{name:"Sylvia",foreground:"#fff",background:"linear-gradient(to bottom, #ff4b1f 0%,#ff9068 100%)"},{name:"Sweet Morning",foreground:"#fff",background:"linear-gradient(to bottom, #FF5F6D 0%,#FFC371 100%)"},{name:"Politics",foreground:"#fff",background:"linear-gradient(to bottom, #2196f3 0%,#f44336 100%)"},{name:"Bright Vault",foreground:"#fff",background:"linear-gradient(to bottom, #00d2ff 0%,#928DAB 100%)"},{name:"Solid Vault",foreground:"#fff",background:"linear-gradient(to bottom, #3a7bd5 0%,#3a6073 100%)"},{name:"Sunset",foreground:"#fff",background:"linear-gradient(to bottom, #0B486B 0%,#F56217 100%)"},{name:"Grapefruit Sunset",foreground:"#fff",background:"linear-gradient(to bottom, #e96443 0%,#904e95 100%)"},{name:"Deep Sea Space",foreground:"#fff",background:"linear-gradient(to bottom, #2C3E50 0%,#4CA1AF 100%)"},{name:"Dusk",foreground:"#fff",background:"linear-gradient(to bottom, #ffd89b 0%,#19547b 100%)"},{name:"Minimal Red",foreground:"#fff",background:"linear-gradient(to bottom, #F00000 0%,#DC281E 100%)"},{name:"Royal",foreground:"#fff",background:"linear-gradient(to bottom, #141E30 0%,#243B55 100%)"},{name:"Mauve",foreground:"#fff",background:"linear-gradient(to bottom, #42275a 0%,#734b6d 100%)"},{name:"Frost",foreground:"#fff",background:"linear-gradient(to bottom, #000428 0%,#004e92 100%)"},{name:"Lush",foreground:"#fff",background:"linear-gradient(to bottom, #56ab2f 0%,#a8e063 100%)"},{name:"Firewatch",foreground:"#fff",background:"linear-gradient(to bottom, #cb2d3e 0%,#ef473a 100%)"},{name:"Sherbert",foreground:"#fff",background:"linear-gradient(to bottom, #f79d00 0%,#64f38c 100%)"},{name:"Blood Red",foreground:"#fff",background:"linear-gradient(to bottom, #f85032 0%,#e73827 100%)"},{name:"50 Shades of Grey",foreground:"#fff",background:"linear-gradient(to bottom, #bdc3c7 0%,#2c3e50 100%)"},{name:"Dania",foreground:"#fff",background:"linear-gradient(to bottom, #BE93C5 0%,#7BC6CC 100%)"},{name:"Limeade",foreground:"#fff",background:"linear-gradient(to bottom, #A1FFCE 0%,#FAFFD1 100%)"},{name:"Disco",foreground:"#fff",background:"linear-gradient(to bottom, #4ECDC4 0%,#556270 100%)"},{name:"Love Couple",foreground:"#fff",background:"linear-gradient(to bottom, #3a6186 0%,#89253e 100%)"},{name:"Azure Pop",foreground:"#fff",background:"linear-gradient(to bottom, #ef32d9 0%,#89fffd 100%)"},{name:"Blade Runner",foreground:"#00C793",background:"linear-gradient(to bottom, #000 0%,#333 100%)"}]},_=a(107),y=(a(172),function(e){var o=e.message,a=e.children;return n.a.createElement(b.a,{placement:"top",overlay:n.a.createElement(s.a,{id:"tooltipiii"},o)},a)}),w="https://source.unsplash.com/collection/1459961/".concat(window.screen.width,"x").concat(window.screen.height,"/"),I=function(e){function o(){var e;return Object(i.a)(this,o),(e=Object(u.a)(this,Object(c.a)(o).call(this))).keyHandle=function(o){83!=o.keyCode||e.state.modalVisible||e.invertColors(),68!=o.keyCode||e.state.modalVisible||e.toggleDots()},e.handleClose=function(){e.setState({modalVisible:!1})},e.handleOpen=function(){e.setState({modalVisible:!0})},e.invertColors=function(){var o="#ffffff"==e.state.image_foreground?"#212529":"#ffffff";e.setState({image_foreground:o}),localStorage.setItem("image_foreground",o)},e.toggleDots=function(){var o=0==e.state.dots?1:0;e.setState({dots:o}),localStorage.setItem("dots",o)},e.unsplash_url_fix=function(){var o="",a="https://source.unsplash.com/",t="".concat(window.screen.width,"x").concat(window.screen.height,"/");if(""===e.state.image_tags)o=a+"random/"+t;else if(e.state.image_tags.startsWith("user:")){var n=e.state.image_tags.split(":")[1];o=a+"user/".concat(n,"/")+t}else if(e.state.image_tags.startsWith("likes:")){var r=e.state.image_tags.split(":")[1];o=a+"user/".concat(r,"/likes/")+t}else if(e.state.image_tags.startsWith("collection:")){var f=e.state.image_tags.split(":")[1];o=a+"collection/".concat(f,"/")+t}else o=a+"random/"+t+"?/".concat(e.state.image_tags);return o},e.refetchAndSetImage=function(){e.toDataUrl(e.unsplash_url_fix(),(function(o){localStorage.setItem("image",o),e.setState({image:o})}))},e.openImage=function(){var e=localStorage.getItem("unsplash_image_download");window.open(e,"_blank").focus()},e.toDataUrl=function(o,a){console.log(o),e.setState({filter:"saturate(0%)",loadingImage:!0});var t=new XMLHttpRequest;t.responseType="blob",t.onload=function(){localStorage.setItem("unsplash_image_download",t.responseURL);var o=new FileReader;o.onloadend=function(){a(o.result),e.setState({filter:"saturate(100%)",loadingImage:!1})},o.readAsDataURL(t.response)},t.open("GET",o),t.send()},e.state={modalVisible:!1,background_mode:localStorage.getItem("background_mode"),dots:localStorage.getItem("dots"),filter:"saturate(0%)",tint:1,tint_value:parseFloat(localStorage.getItem("tint_value")),image:localStorage.getItem("image"),loadingImage:!1,font:localStorage.getItem("font"),widget:localStorage.getItem("widget"),clock_border:localStorage.getItem("clock_border"),clock_seperator:localStorage.getItem("clock_seperator"),clock_format:localStorage.getItem("clock_format"),message_size:localStorage.getItem("message_size"),message:localStorage.getItem("message"),image_foreground:localStorage.getItem("image_foreground"),image_tags:localStorage.getItem("image_tags"),color_index:localStorage.getItem("color_index")},e}return Object(m.a)(o,e),Object(l.a)(o,[{key:"componentWillMount",value:function(){var e=this;document.addEventListener("keydown",this.keyHandle,!1);var o={tint_value:0,color_index:0,background_mode:"flat",dots:0,image_tags:"collection:1459961",image_foreground:"#ffffff",clock_seperator:"colon",clock_format:"12H",clock_border:"none",message_size:"50",message:"Hello!",widget:"clock",font:"Circular"};Object.keys(o).forEach((function(a){localStorage.getItem(a)||(localStorage.setItem(a,o[a]),e.setState(Object(d.a)({},a,o[a])))})),localStorage.getItem("image")||this.toDataUrl(w,(function(o){e.setState({image:o}),localStorage.setItem("image",o)}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyHandle,!1),console.log(window.screen),this.setState({tint:this.state.tint_value,filter:"saturate(100%)"})}},{key:"render",value:function(){var e=this,o={clock:A,message:S},a=this.state,t=a.modalVisible,r=a.loadingImage,f=a.background_mode,d=a.dots,i=a.image,l=a.filter,u=a.font,c=a.widget,m=a.clock_border,D=a.clock_seperator,w=a.clock_format,I=a.message_size,M=a.message,P=a.image_foreground,O=a.image_tags,x=(a.color_index,o[c]),L="image"!=f?{background:B[this.state.background_mode][this.state.color_index].background}:{background:"url(".concat(i,") no-repeat center center"),filter:l},T="image"!=f?B[this.state.background_mode][this.state.color_index].foreground:P;return n.a.createElement("div",null,n.a.createElement("div",{className:"center-boy"},n.a.createElement(x,{foreground:T,font:u,clock_border:m,clock_seperator:D,clock_format:w,message_size:I,message:M})),n.a.createElement("div",null,r&&n.a.createElement("div",{className:"spinner-wrap"},n.a.createElement("span",{className:"wobblebar-loader"},"Loading\u2026"))),n.a.createElement("div",{className:"buttons"},"image"==f&&n.a.createElement("span",null,n.a.createElement("div",{style:{color:T},className:"settings-button",onClick:this.refetchAndSetImage},"\ue332")),n.a.createElement("div",{style:{color:T},className:"settings-button",onClick:this.handleOpen},"\ue8b8")),n.a.createElement("div",{className:"background-layer",style:L}),n.a.createElement("div",{className:"tint-layer",style:{opacity:this.state.tint,background:"#ffffff"==P?"#111111":"#ffffff"}}),1==d&&n.a.createElement("div",{className:"tint-layer dots"}),n.a.createElement(k.a,{size:"lg",animation:!1,show:t,onHide:this.handleClose},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Settings")),n.a.createElement(k.a.Body,null,n.a.createElement(E.a,null,n.a.createElement(p.a,{defaultActiveKey:"background",id:"uncontrolled-tab-example"},n.a.createElement(h.a,{eventKey:"background",title:"Background"},n.a.createElement("br",null),n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("background_mode",o.target.value),localStorage.setItem("color_index",0);var a="image"!==o.target.value?0:.17;e.setState({background_mode:o.target.value,tint_value:a,tint:a,color_index:0})}},n.a.createElement(F.a.Label,null,"Background Mode"),n.a.createElement(F.a.Control,{defaultValue:f,as:"select"},n.a.createElement("option",{value:"flat"},"Flat"),n.a.createElement("option",{value:"gradient"},"Gradient"),n.a.createElement("option",{value:"image"},"Image"))),("flat"==this.state.background_mode||"gradient"==this.state.background_mode)&&n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("color_index",o.target.value),e.setState({color_index:parseInt(o.target.value)})}},n.a.createElement(F.a.Label,null,"Color"),n.a.createElement(F.a.Control,{defaultValue:this.state.color_index+"",as:"select"},B[this.state.background_mode].map((function(e,o){return n.a.createElement("option",{value:o},e.name)})))),n.a.createElement("div",null,"image"==this.state.background_mode&&n.a.createElement("div",null,n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("image_tags",o.target.value),e.setState({image_tags:o.target.value})}},n.a.createElement(b.a,{key:"left",placement:"left",overlay:n.a.createElement(s.a,{id:"tooltipiii"},n.a.createElement("ul",null,n.a.createElement("li",null,"You can place comma seperated tags here (eg: Nature, Motivation, Art)"),n.a.createElement("li",null,"Unsplash collections: collection:9270463"),n.a.createElement("li",null,"Unsplash User Images: user:atulvi"),n.a.createElement("li",null,"Unsplash User Likes: likes:atulvi")))},n.a.createElement(F.a.Label,null,"Unsplash Tags")),n.a.createElement(F.a.Control,{placeholder:"Nature, art, wallpaper",defaultValue:O,as:"input",rows:"3"})))),"Tint",n.a.createElement(_.a,{value:100*this.state.tint,step:1,onChange:function(o){localStorage.setItem("tint_value",o/100),e.setState({tint:o/100,tint_value:o/100})}}),n.a.createElement("br",null),n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("font",o.target.value),e.setState({font:o.target.value})}},n.a.createElement(F.a.Label,null,"Font"),n.a.createElement(F.a.Control,{defaultValue:u,as:"select"},n.a.createElement("option",{value:"Circular"},"Circular"),n.a.createElement("option",{value:"Futura"},"Futura"),n.a.createElement("option",{value:"SharpGrotesk"},"SharpGrotesk"),n.a.createElement("option",{value:"Milea"},"Milea"))),n.a.createElement("div",{className:"modal-button-row"},n.a.createElement(y,{message:"Texture"},n.a.createElement("div",{className:"toggle-button",onClick:this.toggleDots},"\ue3a5")),"image"==f&&n.a.createElement(y,{message:"Invert"},n.a.createElement("div",{className:"toggle-button",onClick:this.invertColors},"\ue891")),"image"==f&&n.a.createElement(y,{message:"Change Background"},n.a.createElement("div",{className:"toggle-button",onClick:this.refetchAndSetImage},"\ue332")),"image"==f&&n.a.createElement(y,{message:"Open Image"},n.a.createElement("div",{className:"toggle-button",onClick:this.openImage},"\ue89e")))),n.a.createElement(h.a,{eventKey:"widget",title:"Widget"},n.a.createElement("br",null),n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("widget",o.target.value),e.setState({widget:o.target.value})}},n.a.createElement(F.a.Label,null,"Widget"),n.a.createElement(F.a.Control,{defaultValue:c,as:"select"},Object.keys(o).map((function(e){return n.a.createElement("option",{value:e},e)})))),"message"==c&&n.a.createElement("div",null,n.a.createElement(C.a,{className:"show-grid"},n.a.createElement(v.a,{md:12},n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("message",o.target.value),e.setState({message:o.target.value})}},n.a.createElement(F.a.Label,null,"Message"),n.a.createElement(F.a.Control,{placeholder:"Enter Message",defaultValue:M,as:"textarea",rows:"3"}))),n.a.createElement(v.a,{md:12},n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("message_size",o.target.value),e.setState({message_size:o.target.value})}},n.a.createElement(F.a.Label,null,"Message Size"),n.a.createElement(F.a.Control,{defaultValue:I,as:"select"},Object(g.a)(Array(20).keys()).filter((function(e){return e>1})).map((function(e){return n.a.createElement("option",{value:10*e},10*e)}))))))),"clock"==c&&n.a.createElement("div",null,n.a.createElement(C.a,{className:"show-grid"},n.a.createElement(v.a,{md:12},n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("clock_border",o.target.value),e.setState({clock_border:o.target.value})}},n.a.createElement(F.a.Label,null,"Border Style"),n.a.createElement(F.a.Control,{defaultValue:m,as:"select"},n.a.createElement("option",{value:"none"},"none"),n.a.createElement("option",{value:"solid"},"solid"),n.a.createElement("option",{value:"rounded"},"rounded")))),n.a.createElement(v.a,{md:12},n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("clock_seperator",o.target.value),e.setState({clock_seperator:o.target.value})}},n.a.createElement(F.a.Label,null,"Seperator"),n.a.createElement(F.a.Control,{defaultValue:D,as:"select"},n.a.createElement("option",{value:"colon"},"colon"),n.a.createElement("option",{value:"none"},"none"),n.a.createElement("option",{value:"space"},"space")))),n.a.createElement(v.a,{md:12},n.a.createElement(F.a.Group,{onChange:function(o){localStorage.setItem("clock_format",o.target.value),e.setState({clock_format:o.target.value})}},n.a.createElement(F.a.Label,null,"Format"),n.a.createElement(F.a.Control,{defaultValue:w,as:"select"},n.a.createElement("option",{value:"24H"},"24 Hours"),n.a.createElement("option",{value:"12H"},"12 Hours"),n.a.createElement("option",{value:"12HAP"},"12 Hours with AM/PM"))))))))))))}}]),o}(t.Component);var M=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.cfeeb414.chunk.js.map