var systemIcon = L.icon({
    iconUrl: 'assets/icons/system.png',

    iconSize:     [7, 7], // size of the icon
    iconAnchor:   [4, 4], // point of the icon which will correspond to marker's location
    popupAnchor:  [4, 4] // point from which the popup should open relative to the iconAnchor
});

//L.marker([], {icon: systemIcon}).bindTooltip("",{permanent: true}).addTo(map);

//Individuals
L.marker([-494,-4732], {icon: systemIcon}).bindTooltip("Kaikara",{permanent: true}).addTo(map);
L.marker([-550,-4785], {icon: systemIcon}).bindTooltip("Deneva",{permanent: true}).addTo(map);
L.marker([-591,-4731], {icon: systemIcon}).bindTooltip("Labac",{permanent: true}).addTo(map);
L.marker([-597,-4772], {icon: systemIcon}).bindTooltip("Lycia",{permanent: true}).addTo(map);
L.marker([-682,-4773], {icon: systemIcon}).bindTooltip("Zaurak",{permanent: true}).addTo(map);
L.marker([-643,-4714], {icon: systemIcon}).bindTooltip("Vindemiatrix",{permanent: true}).addTo(map);
L.marker([-604,-4662], {icon: systemIcon}).bindTooltip("Krah'Hor",{permanent: true}).addTo(map);
L.marker([-695,-4630], {icon: systemIcon}).bindTooltip("Suliban",{permanent: true}).addTo(map);
L.marker([-476,-4581], {icon: systemIcon}).bindTooltip("Fastolf",{permanent: true}).addTo(map);
L.marker([-470,-4518], {icon: systemIcon}).bindTooltip("Tejat",{permanent: true}).addTo(map);
L.marker([-500,-4560], {icon: systemIcon}).bindTooltip("Ezani",{permanent: true}).addTo(map);
L.marker([-528,-4529], {icon: systemIcon}).bindTooltip("Beta Vordunn",{permanent: true}).addTo(map);
L.marker([-539,-4497], {icon: systemIcon}).bindTooltip("Klaiz",{permanent: true}).addTo(map);
L.marker([-1305,-5536], {icon: systemIcon}).bindTooltip("Tellun",{permanent: true}).addTo(map);
L.marker([-1344,-5760], {icon: systemIcon}).bindTooltip("Vinland",{permanent: true}).addTo(map);
L.marker([-1392,-5831], {icon: systemIcon}).bindTooltip("Forhingre",{permanent: true}).addTo(map);
L.marker([-1372,-6144], {icon: systemIcon}).bindTooltip("Kito",{permanent: true}).addTo(map);
L.marker([-1477,-5826], {icon: systemIcon}).bindTooltip("Aker",{permanent: true}).addTo(map);
L.marker([-1544,-5718], {icon: systemIcon}).bindTooltip("Winber",{permanent: true}).addTo(map);
L.marker([-1729,-5889], {icon: systemIcon}).bindTooltip("Worhundelja",{permanent: true}).addTo(map);
L.marker([-1506,-5621], {icon: systemIcon}).bindTooltip("Takik",{permanent: true}).addTo(map);
L.marker([-1666,-5362], {icon: systemIcon}).bindTooltip("Murasaki 312",{permanent: true}).addTo(map);
L.marker([-918,-5579], {icon: systemIcon}).bindTooltip("Maluria",{permanent: true}).addTo(map);
L.marker([-802,-5856], {icon: systemIcon}).bindTooltip("Ruli",{permanent: true}).addTo(map);
L.marker([-854,-5935], {icon: systemIcon}).bindTooltip("Flok",{permanent: true}).addTo(map);
L.marker([-727,-6133], {icon: systemIcon}).bindTooltip("Eravan",{permanent: true}).addTo(map);
L.marker([-917,-5912], {icon: systemIcon}).bindTooltip("Baw",{permanent: true}).addTo(map);
L.marker([-1010,-5920], {icon: systemIcon}).bindTooltip("Hosun",{permanent: true}).addTo(map);
L.marker([-1156,-6020], {icon: systemIcon}).bindTooltip("Jinnia",{permanent: true}).addTo(map);
L.marker([-1000,-5760], {icon: systemIcon}).bindTooltip("Laurgatt",{permanent: true}).addTo(map);
L.marker([-612,-5573], {icon: systemIcon}).bindTooltip("Risa",{permanent: true}).addTo(map);
L.marker([-596,-5662], {icon: systemIcon}).bindTooltip("Zukerat",{permanent: true}).addTo(map);
L.marker([-527,-5692], {icon: systemIcon}).bindTooltip("Melvara",{permanent: true}).addTo(map);
L.marker([-452,-5841], {icon: systemIcon}).bindTooltip("Volta",{permanent: true}).addTo(map);
L.marker([-482,-5637], {icon: systemIcon}).bindTooltip("Benzi",{permanent: true}).addTo(map);
L.marker([-499,-5566], {icon: systemIcon}).bindTooltip("Yuvaa",{permanent: true}).addTo(map);
L.marker([-345,-5562], {icon: systemIcon}).bindTooltip("Eral",{permanent: true}).addTo(map);
L.marker([-533,-5498], {icon: systemIcon}).bindTooltip("Estrada",{permanent: true}).addTo(map);
//Clusters
//Kepler-018
L.marker([-426,-4679], {icon: systemIcon}).bindTooltip("Kepler-018",{permanent: true}).addTo(map);
L.marker([-399,-4708], {icon: systemIcon}).bindTooltip("Wezen",{permanent: true}).addTo(map);
L.marker([-411,-4717], {icon: systemIcon}).bindTooltip("Zhang",{permanent: true}).addTo(map);
L.marker([-425,-4734], {icon: systemIcon}).bindTooltip("Vemet",{permanent: true}).addTo(map);
L.marker([-439,-4725], {icon: systemIcon}).bindTooltip("Bharani",{permanent: true}).addTo(map);
L.marker([-462,-4668], {icon: systemIcon}).bindTooltip("Eizeb",{permanent: true}).addTo(map);
L.marker([-455,-4650], {icon: systemIcon}).bindTooltip("Aciben",{permanent: true}).addTo(map);
L.marker([-441,-4619], {icon: systemIcon}).bindTooltip("Bubeau",{permanent: true}).addTo(map);
L.marker([-430,-4632], {icon: systemIcon}).bindTooltip("Eisenhorn",{permanent: true}).addTo(map);
  var Kepler = L.circle([-426, -4679], {
    color: 'gray',
    fillColor: 'white',
    fillOpacity: 0.5,
    radius: 65
});
//Amador
L.marker([-546,-4673], {icon: systemIcon}).bindTooltip("Amador",{permanent: true}).addTo(map);
L.marker([-523,-4683], {icon: systemIcon}).bindTooltip("Rakkaus",{permanent: true}).addTo(map);
L.marker([-536,-4702], {icon: systemIcon}).bindTooltip("Ocus",{permanent: true}).addTo(map);
L.marker([-553,-4711], {icon: systemIcon}).bindTooltip("Laidcenn",{permanent: true}).addTo(map);
L.marker([-567,-4668], {icon: systemIcon}).bindTooltip("Ione",{permanent: true}).addTo(map);
L.marker([-557,-4643], {icon: systemIcon}).bindTooltip("Araiza",{permanent: true}).addTo(map);
L.marker([-535,-4647], {icon: systemIcon}).bindTooltip("H'ganrem",{permanent: true}).addTo(map);
//Willenia
L.marker([-502,-4477], {icon: systemIcon}).bindTooltip("Willenia",{permanent: true}).addTo(map);
L.marker([-474,-4462], {icon: systemIcon}).bindTooltip("Sayo",{permanent: true}).addTo(map);
L.marker([-483,-4412], {icon: systemIcon}).bindTooltip("Redmond",{permanent: true}).addTo(map);
L.marker([-522,-4467], {icon: systemIcon}).bindTooltip("Lahrel",{permanent: true}).addTo(map);
//Azha
L.marker([-592,-4584], {icon: systemIcon}).bindTooltip("Azha",{permanent: true}).addTo(map);
L.marker([-572,-4600], {icon: systemIcon}).bindTooltip("Kaus Borealis",{permanent: true}).addTo(map);
L.marker([-585,-4624], {icon: systemIcon}).bindTooltip("Kaus Australis",{permanent: true}).addTo(map);
L.marker([-619,-4617], {icon: systemIcon}).bindTooltip("Jishui",{permanent: true}).addTo(map);
L.marker([-631,-4603], {icon: systemIcon}).bindTooltip("Todem",{permanent: true}).addTo(map);
L.marker([-640,-4585], {icon: systemIcon}).bindTooltip("Helvetios",{permanent: true}).addTo(map);
L.marker([-577,-4533], {icon: systemIcon}).bindTooltip("Zeta Polis",{permanent: true}).addTo(map);
L.marker([-571,-4546], {icon: systemIcon}).bindTooltip("Wasat",{permanent: true}).addTo(map);
L.marker([-567,-4566], {icon: systemIcon}).bindTooltip("Kaus Media",{permanent: true}).addTo(map);
//Wagirur
L.marker([-1234,-5735], {icon: systemIcon}).bindTooltip("Wagirur",{permanent: true}).addTo(map);
L.marker([-1200,-5772], {icon: systemIcon}).bindTooltip("Delbaana",{permanent: true}).addTo(map);
L.marker([-1264,-5798], {icon: systemIcon}).bindTooltip("Obbia",{permanent: true}).addTo(map);
L.marker([-1214,-5682], {icon: systemIcon}).bindTooltip("Soman",{permanent: true}).addTo(map);
//Zorga
L.marker([-1322,-5873], {icon: systemIcon}).bindTooltip("Zorga",{permanent: true}).addTo(map);
L.marker([-1274,-5895], {icon: systemIcon}).bindTooltip("Dauan",{permanent: true}).addTo(map);
L.marker([-1293,-5978], {icon: systemIcon}).bindTooltip("Junid",{permanent: true}).addTo(map);
L.marker([-1339,-5957], {icon: systemIcon}).bindTooltip("Colt",{permanent: true}).addTo(map);
//Hroga
L.marker([-1464,-5915], {icon: systemIcon}).bindTooltip("Hroga",{permanent: true}).addTo(map);
L.marker([-1433,-5960], {icon: systemIcon}).bindTooltip("Yerma",{permanent: true}).addTo(map);
L.marker([-1463,-6051], {icon: systemIcon}).bindTooltip("Berebul",{permanent: true}).addTo(map);
L.marker([-1505,-6004], {icon: systemIcon}).bindTooltip("Laxos",{permanent: true}).addTo(map);
//Klora
L.marker([-1524,-5877], {icon: systemIcon}).bindTooltip("Klora",{permanent: true}).addTo(map);
L.marker([-1540,-5954], {icon: systemIcon}).bindTooltip("Vatok",{permanent: true}).addTo(map);
L.marker([-1569,-5918], {icon: systemIcon}).bindTooltip("Lyra",{permanent: true}).addTo(map);
L.marker([-1597,-5848], {icon: systemIcon}).bindTooltip("Injerra",{permanent: true}).addTo(map);
//Rabalon
L.marker([-1597,-5632], {icon: systemIcon}).bindTooltip("Rabalon",{permanent: true}).addTo(map);
L.marker([-1643,-5713], {icon: systemIcon}).bindTooltip("New Sligo",{permanent: true}).addTo(map);
L.marker([-1689,-5638], {icon: systemIcon}).bindTooltip("Lotch",{permanent: true}).addTo(map);
L.marker([-1649,-5584], {icon: systemIcon}).bindTooltip("Orkon",{permanent: true}).addTo(map);
//Vawur
L.marker([-1543,-5558], {icon: systemIcon}).bindTooltip("Vawur",{permanent: true}).addTo(map);
L.marker([-1620,-5518], {icon: systemIcon}).bindTooltip("Melllvar",{permanent: true}).addTo(map);
L.marker([-1556,-5518], {icon: systemIcon}).bindTooltip("Lanoitan",{permanent: true}).addTo(map);
L.marker([-1503,-5528], {icon: systemIcon}).bindTooltip("Gomes",{permanent: true}).addTo(map);
//Mayagrazi
L.marker([-696,-5834], {icon: systemIcon}).bindTooltip("Mayagrazi",{permanent: true}).addTo(map);
L.marker([-718,-5871], {icon: systemIcon}).bindTooltip("Alorina",{permanent: true}).addTo(map);
L.marker([-657,-5838], {icon: systemIcon}).bindTooltip("Beyven",{permanent: true}).addTo(map);
L.marker([-687,-5802], {icon: systemIcon}).bindTooltip("Didi",{permanent: true}).addTo(map);
//Iora
L.marker([-745,-5923], {icon: systemIcon}).bindTooltip("Iora",{permanent: true}).addTo(map);
L.marker([-689,-5951], {icon: systemIcon}).bindTooltip("Quirad",{permanent: true}).addTo(map);
L.marker([-729,-5987], {icon: systemIcon}).bindTooltip("Pimo",{permanent: true}).addTo(map);
L.marker([-779,-5957], {icon: systemIcon}).bindTooltip("Sido",{permanent: true}).addTo(map);
//Sverlov
L.marker([-883,-6039], {icon: systemIcon}).bindTooltip("Sverlov",{permanent: true}).addTo(map);
L.marker([-826,-6070], {icon: systemIcon}).bindTooltip("Skelg",{permanent: true}).addTo(map);
L.marker([-863,-6101], {icon: systemIcon}).bindTooltip("Vemarii",{permanent: true}).addTo(map);
L.marker([-919,-6065], {icon: systemIcon}).bindTooltip("Saqua",{permanent: true}).addTo(map);
//Jobe
L.marker([-995,-6032], {icon: systemIcon}).bindTooltip("Jobe",{permanent: true}).addTo(map);
L.marker([-974,-6089], {icon: systemIcon}).bindTooltip("Feer",{permanent: true}).addTo(map);
L.marker([-1035,-6108], {icon: systemIcon}).bindTooltip("Kerao",{permanent: true}).addTo(map);
L.marker([-1049,-6010], {icon: systemIcon}).bindTooltip("Lyquan",{permanent: true}).addTo(map);
//Falko
L.marker([-1067,-5817], {icon: systemIcon}).bindTooltip("Falko",{permanent: true}).addTo(map);
L.marker([-1096,-5882], {icon: systemIcon}).bindTooltip("Wuver",{permanent: true}).addTo(map);
L.marker([-1136,-5829], {icon: systemIcon}).bindTooltip("Muhen",{permanent: true}).addTo(map);
L.marker([-1116,-5768], {icon: systemIcon}).bindTooltip("Khic",{permanent: true}).addTo(map);
//Cymon
L.marker([-1044,-5684], {icon: systemIcon}).bindTooltip("Cymon",{permanent: true}).addTo(map);
L.marker([-1074,-5729], {icon: systemIcon}).bindTooltip("Maq",{permanent: true}).addTo(map);
L.marker([-1107,-5691], {icon: systemIcon}).bindTooltip("Jeybriol",{permanent: true}).addTo(map);
L.marker([-1068,-5649], {icon: systemIcon}).bindTooltip("Donnel",{permanent: true}).addTo(map);
//Bodex
L.marker([-647,-5657], {icon: systemIcon}).bindTooltip("Bodex",{permanent: true}).addTo(map);
L.marker([-636,-5700], {icon: systemIcon}).bindTooltip("Reelah",{permanent: true}).addTo(map);
L.marker([-670,-5680], {icon: systemIcon}).bindTooltip("Slawlor",{permanent: true}).addTo(map);
L.marker([-686,-5640], {icon: systemIcon}).bindTooltip("Boorhi",{permanent: true}).addTo(map);
//Toshen
L.marker([-575,-5721], {icon: systemIcon}).bindTooltip("Toshen",{permanent: true}).addTo(map);
L.marker([-543,-5758], {icon: systemIcon}).bindTooltip("Poja",{permanent: true}).addTo(map);
L.marker([-595,-5766], {icon: systemIcon}).bindTooltip("Nidox",{permanent: true}).addTo(map);
L.marker([-606,-5721], {icon: systemIcon}).bindTooltip("Lipas",{permanent: true}).addTo(map);
//Dalfa
L.marker([-440,-5694], {icon: systemIcon}).bindTooltip("Dalfa",{permanent: true}).addTo(map);
L.marker([-391,-5743], {icon: systemIcon}).bindTooltip("Tohvus",{permanent: true}).addTo(map);
L.marker([-426,-5756], {icon: systemIcon}).bindTooltip("Bo-Jeems",{permanent: true}).addTo(map);
L.marker([-465,-5720], {icon: systemIcon}).bindTooltip("Zanti",{permanent: true}).addTo(map);
//Follin
L.marker([-416,-5640], {icon: systemIcon}).bindTooltip("Follin",{permanent: true}).addTo(map);
L.marker([-372,-5664], {icon: systemIcon}).bindTooltip("Soeller",{permanent: true}).addTo(map);
L.marker([-380,-5619], {icon: systemIcon}).bindTooltip("Barra",{permanent: true}).addTo(map);
L.marker([-408,-5602], {icon: systemIcon}).bindTooltip("Corla",{permanent: true}).addTo(map);
//Cospilon
L.marker([-493,-5467], {icon: systemIcon}).bindTooltip("Cospilon",{permanent: true}).addTo(map);
L.marker([-450,-5479], {icon: systemIcon}).bindTooltip("Doma",{permanent: true}).addTo(map);
L.marker([-464,-5441], {icon: systemIcon}).bindTooltip("Heima",{permanent: true}).addTo(map);
L.marker([-502,-5424], {icon: systemIcon}).bindTooltip("Halkon",{permanent: true}).addTo(map);
//Groshi
L.marker([-599,-5457], {icon: systemIcon}).bindTooltip("Groshi",{permanent: true}).addTo(map);
L.marker([-570,-5451], {icon: systemIcon}).bindTooltip("Dovaler",{permanent: true}).addTo(map);
L.marker([-612,-5417], {icon: systemIcon}).bindTooltip("Banks",{permanent: true}).addTo(map);
L.marker([-632,-5470], {icon: systemIcon}).bindTooltip("Izbel",{permanent: true}).addTo(map);
//Boru
L.marker([-831,-5422], {icon: systemIcon}).bindTooltip("Boru",{permanent: true}).addTo(map);
L.marker([-797,-5424], {icon: systemIcon}).bindTooltip("Eshu",{permanent: true}).addTo(map);
L.marker([-824,-5455], {icon: systemIcon}).bindTooltip("Leza",{permanent: true}).addTo(map);
L.marker([-857,-5435], {icon: systemIcon}).bindTooltip("Tapio",{permanent: true}).addTo(map);
L.marker([-842,-5394], {icon: systemIcon}).bindTooltip("Kauko",{permanent: true}).addTo(map);
L.marker([-810,-5390], {icon: systemIcon}).bindTooltip("Kibuka",{permanent: true}).addTo(map);
L.marker([-797,-5403], {icon: systemIcon}).bindTooltip("Katonda",{permanent: true}).addTo(map);
//Aodaan
L.marker([-830,-5327], {icon: systemIcon}).bindTooltip("Aodaan",{permanent: true}).addTo(map);
L.marker([-806,-5344], {icon: systemIcon}).bindTooltip("Duvlock",{permanent: true}).addTo(map);
L.marker([-853,-5343], {icon: systemIcon}).bindTooltip("Ergantal",{permanent: true}).addTo(map);
L.marker([-853,-5314], {icon: systemIcon}).bindTooltip("Boniv",{permanent: true}).addTo(map);
L.marker([-807,-5309], {icon: systemIcon}).bindTooltip("Sual",{permanent: true}).addTo(map);
//Suilneimhe
L.marker([-971,-5317], {icon: systemIcon}).bindTooltip("Suilneimhe",{permanent: true}).addTo(map);
L.marker([-954,-5337], {icon: systemIcon}).bindTooltip("Maglynn",{permanent: true}).addTo(map);
L.marker([-989,-5324], {icon: systemIcon}).bindTooltip("Moston",{permanent: true}).addTo(map);
L.marker([-980,-5294], {icon: systemIcon}).bindTooltip("Pyr",{permanent: true}).addTo(map);
L.marker([-935,-5302], {icon: systemIcon}).bindTooltip("Bernin",{permanent: true}).addTo(map);
//Aindia
L.marker([-956,-5412], {icon: systemIcon}).bindTooltip("Aindia",{permanent: true}).addTo(map);
L.marker([-930,-5426], {icon: systemIcon}).bindTooltip("Fiadh",{permanent: true}).addTo(map);
L.marker([-965,-5441], {icon: systemIcon}).bindTooltip("Alonso",{permanent: true}).addTo(map);
L.marker([-980,-5423], {icon: systemIcon}).bindTooltip("Mara Eya",{permanent: true}).addTo(map);
L.marker([-976,-5401], {icon: systemIcon}).bindTooltip("Cosa",{permanent: true}).addTo(map);
L.marker([-943,-5381], {icon: systemIcon}).bindTooltip("Ulzar",{permanent: true}).addTo(map);
L.marker([-923,-5400], {icon: systemIcon}).bindTooltip("Mielikki",{permanent: true}).addTo(map);
//Fithis
L.marker([-1099,-5256], {icon: systemIcon}).bindTooltip("Fithis",{permanent: true}).addTo(map);
L.marker([-1094,-5281], {icon: systemIcon}).bindTooltip("Cara Alpha",{permanent: true}).addTo(map);
L.marker([-1117,-5246], {icon: systemIcon}).bindTooltip("Cara Beta",{permanent: true}).addTo(map);
L.marker([-1076,-5225], {icon: systemIcon}).bindTooltip("Rosenburg",{permanent: true}).addTo(map);
L.marker([-1046,-5252], {icon: systemIcon}).bindTooltip("Minnea",{permanent: true}).addTo(map);
//Coth
L.marker([-1189,-5345], {icon: systemIcon}).bindTooltip("Coth",{permanent: true}).addTo(map);
L.marker([-1160,-5363], {icon: systemIcon}).bindTooltip("Veist",{permanent: true}).addTo(map);
L.marker([-1189,-5373], {icon: systemIcon}).bindTooltip("Emola",{permanent: true}).addTo(map);
L.marker([-1226,-5343], {icon: systemIcon}).bindTooltip("Kroci",{permanent: true}).addTo(map);
L.marker([-1213,-5317], {icon: systemIcon}).bindTooltip("Fyufi",{permanent: true}).addTo(map);
L.marker([-1192,-5308], {icon: systemIcon}).bindTooltip("Gurdy",{permanent: true}).addTo(map);
L.marker([-1155,-5335], {icon: systemIcon}).bindTooltip("Wretsky",{permanent: true}).addTo(map);
//Solusta
L.marker([-1192,-5147], {icon: systemIcon}).bindTooltip("Solusta",{permanent: true}).addTo(map);
L.marker([-1191,-5178], {icon: systemIcon}).bindTooltip("Iaswo",{permanent: true}).addTo(map);
L.marker([-1215,-5170], {icon: systemIcon}).bindTooltip("Lyon",{permanent: true}).addTo(map);
L.marker([-1251,-5155], {icon: systemIcon}).bindTooltip("Littledove",{permanent: true}).addTo(map);
L.marker([-1215,-5128], {icon: systemIcon}).bindTooltip("Taleka",{permanent: true}).addTo(map);
L.marker([-1196,-5113], {icon: systemIcon}).bindTooltip("Mesadin",{permanent: true}).addTo(map);
L.marker([-1168,-5133], {icon: systemIcon}).bindTooltip("Istyna",{permanent: true}).addTo(map);
//Rua
L.marker([-1121,-5034], {icon: systemIcon}).bindTooltip("Rua",{permanent: true}).addTo(map);
L.marker([-1086,-5037], {icon: systemIcon}).bindTooltip("Tova",{permanent: true}).addTo(map);
L.marker([-1086,-5094], {icon: systemIcon}).bindTooltip("Zog",{permanent: true}).addTo(map);
L.marker([-1155,-5047], {icon: systemIcon}).bindTooltip("Robesi",{permanent: true}).addTo(map);
L.marker([-1117,-4999], {icon: systemIcon}).bindTooltip("Demavar",{permanent: true}).addTo(map);



//Add each cluster to a group, add all individual systems to a group, add layer groups, add layer control