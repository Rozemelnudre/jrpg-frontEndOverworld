
//initial location-in the middle of the canvas
var toStr = {"location": {"x" : 75.5, "y": 75.5}};
var playerJsn = {"playerParty":{"location": {"x" : 75.5,"y": 75.5}, "level" : 1, "inBattle" : false},
 "otherParties":[{"location": {"x" : 89,"y": 120.0}, "level" : 5, "inBattle" : false},
 {"location": {"x" : 20.4,"y": 45.0}, "level" : 190, "inBattle" : true}, 
 {"location": {"x" : 11.8,"y": 23.3}, "level" : 16, "inBattle" : false}]};
var newJson = {
    "mapSize" : {"width" : 7, "height" : 7},
    "tiles" : [
        [{"type" : "", "passable" : true}, {"type" : "", "passable" : false},
        {"type" : "", "passable" : true},{"type" : "", "passable" : true},{"type" : "", "passable" : true},
        {"type" : "", "passable" : false}, {"type" : "", "passable" : true}],
        [{"type" : "", "passable" : true}, {"type" : "", "passable" : true}, {"type" : "", "passable" : true},
        {"type" : "", "passable" : false},{"type" : "", "passable" : false},
        {"type" : "", "passable" : false}, {"type" : "", "passable" : true}],
        [{"type" : "", "passable" : false}, {"type" : "", "passable" : true}, {"type" : "", "passable" : false},
        {"type" : "", "passable" : true},{"type" : "", "passable" : false},
        {"type" : "", "passable" : true}, {"type" : "", "passable" : false}],
        [{"type" : "", "passable" : true}, {"type" : "", "passable" : true} ,{"type" : "", "passable" : true},
        {"type" : "", "passable" : true},{"type" : "", "passable" : true},
        {"type" : "", "passable" : true}, {"type" : "", "passable" : true}],
        [{"type" : "", "passable" : true}, {"type" : "", "passable" : false},{"type" : "", "passable" : true}, 
        {"type" : "", "passable" : true},{"type" : "", "passable" : false},
        {"type" : "", "passable" : false}, {"type" : "", "passable" : true}],
        [{"type" : "", "passable" : false}, {"type" : "", "passable" : false},{"type" : "", "passable" : true},
        {"type" : "", "passable" : true},{"type" : "", "passable" : true},
        {"type" : "", "passable" : false}, {"type" : "", "passable" : false}],
        [{"type" : "", "passable" : true}, {"type" : "", "passable" : true}, {"type" : "", "passable" : true},
        {"type" : "", "passable" : true},{"type" : "", "passable" : false},
        {"type" : "", "passable" : false}, {"type" : "", "passable" : false}]
] 
}
//initial column and row 
var col = 0;
var row = 0;
//denotes number of rows or columns so that the canvas does not slide out of the map
var maxrow = 0;
var maxcolon = 0;
var tileSize = 50;

//stringifys fukin json string
function toJs(str){
    return JSON.stringify(str)
}

//function that is called when loading the page
function load(){
    //json that stores the whole map
    var mapJson = toJs(
        {
            "mapSize" : {"width" : 7, "height" : 7},
            "tiles" : [
                [{"type" : "", "passable" : true}, {"type" : "", "passable" : false},
                {"type" : "", "passable" : true},{"type" : "", "passable" : true},{"type" : "", "passable" : true},
                {"type" : "", "passable" : false}, {"type" : "", "passable" : true}],
                [{"type" : "", "passable" : true}, {"type" : "", "passable" : true}, {"type" : "", "passable" : true},
                {"type" : "", "passable" : false},{"type" : "", "passable" : false},
                {"type" : "", "passable" : false}, {"type" : "", "passable" : true}],
                [{"type" : "", "passable" : false}, {"type" : "", "passable" : true}, {"type" : "", "passable" : false},
                {"type" : "", "passable" : true},{"type" : "", "passable" : false},
                {"type" : "", "passable" : true}, {"type" : "", "passable" : false}],
                [{"type" : "", "passable" : true}, {"type" : "", "passable" : true} ,{"type" : "", "passable" : true},
                {"type" : "", "passable" : true},{"type" : "", "passable" : true},
                {"type" : "", "passable" : true}, {"type" : "", "passable" : true}],
                [{"type" : "", "passable" : true}, {"type" : "", "passable" : false},{"type" : "", "passable" : true}, 
                {"type" : "", "passable" : true},{"type" : "", "passable" : false},
                {"type" : "", "passable" : false}, {"type" : "", "passable" : true}],
                [{"type" : "", "passable" : false}, {"type" : "", "passable" : false},{"type" : "", "passable" : true},
                {"type" : "", "passable" : true},{"type" : "", "passable" : true},
                {"type" : "", "passable" : false}, {"type" : "", "passable" : false}],
                [{"type" : "", "passable" : true}, {"type" : "", "passable" : true}, {"type" : "", "passable" : true},
                {"type" : "", "passable" : true},{"type" : "", "passable" : false},
                {"type" : "", "passable" : false}, {"type" : "", "passable" : false}]
        ] 
    });

    //initial row and col values-middle of "big" map
    var parsd = JSON.parse(mapJson);
    row = Math.ceil(parsd["mapSize"]["height"] / 2);
    col = Math.ceil(parsd["mapSize"]["width"] / 2);
    console.log("initial big y");
    console.log(row);
    console.log("initial big x");
    console.log(col);
    maxrow = parsd["mapSize"]["height"];
    maxcolon = parsd["mapSize"]["width"];

     
    var playJs = toJs(toStr);

    var canva = document.getElementById("canvas1");
    var ctx = canva.getContext("2d") ;
    canva.width = 3 * 50;
    canva.height =  3 * 50;

    var canva1 = document.getElementById("canvas2");
    var ctx1 = canva1.getContext("2d") ;
    canva1.width = 3 * 50;
    canva1.height =  3 * 50;

    var canva3 = document.getElementById("canvas3")
    var ctx3 = canvas3.getContext("2d")
    canva3.width = 3 * 50;
    canva3.height =  3 * 50;

//display map with the correct three x three tiles
    displayMap(mapJson, col, row);

    displayPlayer(playJs,ctx1,0,0);

    displayParties(JSON.stringify(playerJsn));

 document.body.onkeydown = function (e) {
        var key = e.key;
        console.log(key);
        var incrx = 0;
        var incry = 0;
        if (key == "ArrowDown"){
            incry = 1 ;
        }else if(key == "ArrowUp"){
            incry = -1;
        }else if(key == "ArrowLeft"){
            incrx = -1;
        }else if(key == "ArrowRight"){
            incrx = 1;
        }

        //check if moving further does not go out of the edges, do not allow it
        if(toStr["location"]["x"] + incrx >= 150 || toStr["location"]["x"] + incrx <= 0){
            incr = 0;
        }
        if(toStr["location"]["y"] + incry >= 150 || toStr["location"]["y"] + incry <= 0){
            incry = 0;
        }
    
        toStr["location"]["x"] += incrx;
        toStr["location"]["y"] += incry;

    var json = JSON.stringify(toStr);
    updatePlayer(json);
    }

}



//displays map of correct size  and correct tiles-extract sizes,
//tile arrays look like tiles:[[row],[row],[row]] where each row is [tile, tile, tile]
//utimately it looks like tiles:[[tile,  tile, tile], [tile, tile, tile], [tile, tile, tile]] or
// tiles:[[{“type”:””, “passable”: true/false}, {“type”:””, “passable”: true/false}],
// [{“type”:””, “passable”: true/false},{“type”:””, “passable”: true/false}]]
function displayMap(mapJson, col, row) {

    var canva = document.getElementById("canvas1");
    var ctx = canva.getContext("2d") ;


    var parsed = JSON.parse(mapJson);
    var tileSize = 50;
    var x = 0;
    var y = 0;
    var mapHeight = parsed["mapSize"]["height"];
    //map.rows = mapHeight 
    var mapWidth = parsed["mapSize"]["width"];
   // map.cols = mapWidth



    //check if the column and row are at edges or corners, set appropriate columna nd row value
    if (row <= 2){
        row = 2;
    }else if(row >= mapHeight - 1){
        row = mapHeight - 1;
    }


    if(col <= 2){
        col = 2;
    }else if(col >= mapWidth  - 1){
        col = mapWidth - 1;
    }


    console.log("rows and columns in map drawing");
    console.log(row);
    console.log(col);
    var tileArr = parsed["tiles"];
    //loop through array indexes compare to the 3 that are useful - current
    //location of the player + 1 behind and 1 next
    for (var rowind in tileArr){
        if(row - 2 <= rowind && rowind <= row ){
            //console.log("loooping through rows");
            //console.log(row - 2)
            //console.log(rowind);
            for (colonind in tileArr[rowind]){
                if(col - 2 <= colonind && colonind <= col){
                    //console.log("looping through columns");
                   // console.log(colonind);
            
                    if (tileArr[rowind][colonind]["passable"]){
                        ctx.fillStyle = 'green';
                        ctx.fillRect(x, y, tileSize, tileSize);
                        x += tileSize;
                        //console.log(x)
                    }
                    else{
                        ctx.fillStyle = 'black';
                        ctx.fillRect(x, y, tileSize, tileSize);
                        x += tileSize;
                        

                    }
                }
                
            }
            y += tileSize;
            x = 0;
        }
        }
       console.log("got here") ;
       x = 0;
       y = 0;
}
    
function displayPlayer(playerJson, ctx, offsetx, offsety){
    var parsed = JSON.parse(playerJson);
    var x = parsed["location"]["x"];
    var y = parsed["location"]["y"];
    //ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x + offsetx,y + offsety,1,0,2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill()

    ctx.beginPath();
    ctx.arc(x + offsetx,y + offsety,5,0,2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();


}



function updatePlayer(json){
    var canvas = document.getElementById("canvas2");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width, canvas.height);

    var parsed = JSON.parse(json);
    console.log("x coord");
    var x = parsed["location"]["x"];
    console.log(x);
    console.log("y coord");
    var y = parsed["location"]["y"];
    console.log(y);
    //passed to displayplayer function to show accurate player location not shift to closest center
    var offsetx = 0;
    var offsety = 0;

    var radius = 5;
    if (x <= (tileSize / 2)){

        if(y <= tileSize){

            offsetx = x - tileSize / 2;
            offsety = y - tileSize / 2;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;//+- offsets?
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew1")
            console.log(y);

            row -= 1;
            col -= 1;
        }else if(y >= canvas.height - tileSize){
            offsetx = x - tileSize / 2;
            offsety = y - tileSize * 2.5;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew2");
            console.log(y);

            row += 1;
            col -= 1;

        }else{

            offsetx = x - tileSize / 2;
            offsety = y - tileSize * 1.5;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew3");
            console.log(y);

            col -= 1;

        }

    } else if (x >= canvas.width - tileSize / 2){

        if(y >= canvas.height - tileSize){

            offsetx = x - tileSize * 2.5;
            offsety = y - tileSize * 2.5;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew4");
            console.log(y);

            row += 1;
            col += 1;
        } else if(y <= tileSize){

            offsetx = x - tileSize * 2.5;
            offsety = y - tileSize / 2;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew5");
            console.log(y);

            row -= 1;
            col += 1;
        }else{

            offsetx = x - tileSize * 2.5;
            offsety = y - tileSize * 1.5;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew6");
            console.log(y);

            col += 1;
        }

    } else if(y <= tileSize/2){
        if( x <= tileSize){

            offsetx = x - tileSize / 2;
            offsety = y - tileSize / 2;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew7");
            console.log(y);

            row -= 1;
            col -= 1;
        }else if(x >= canvas.width - tileSize){

            offsetx = x - tileSize * 2.5;
            offsety = y - tileSize / 2;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew8");
            console.log(y);

            row -= 1;
            col += 1;

        }else{

            offsetx = x - tileSize * 1.5;
            offsety = y - tileSize / 2;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew9");
            console.log(y);

            row -= 1;
        }
    } else if (y >= canvas.height - tileSize / 2){
        if(x <= tileSize){

            offsetx = x - tileSize / 2;
            offsety = y - tileSize * 2.5;


            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew10");
            console.log(y);

            row += 1;
            col -= 1;
        }else if(x >= canvas.width - tileSize){

            offsetx = x - tileSize * 2.5;
            offsety = y - tileSize * 2.5;


            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew11");
            console.log(y);

            row += 1;
            col += 1;
        }else{

            offsetx = x - tileSize * 1.5;
            offsety = y - tileSize * 2.5;

            toStr["location"]["x"] = canvas.width / 2 + offsetx;
            toStr["location"]["y"] = canvas.height / 2 + offsety;
            console.log("y after setting anew12");
            console.log(y);

            row += 1;
        }
    }
    parsed["location"]["x"] = x;
    parsed["location"]["y"] = y;
    console.log("here xy");
    console.log (x);
    console.log(y);
    console.log("here offests");
    console.log(offsetx);
    console.log(offsety);
    displayPlayer(JSON.stringify(toStr), ctx, offsetx, offsety);
    displayMap(JSON.stringify(newJson),col,row);
    displayParties(JSON.stringify(playerJsn));
}


function displayParties(json){

    var canva = document.getElementById("canvas3");
    var ctx = canva.getContext("2d");
    ctx.clearRect(0,0,canva.width, canva.height);

    parsed = JSON.parse(json);
    var x = 0;
    var y = 0;
    var level = 0;
    var parties = parsed["otherParties"];
    for (var elem of parties){

        level = elem["level"];
        x = elem["location"]["x"];
        y = elem["location"]["y"];
        console.log("partyx");
        console.log(x);
        console.log("partyy");
        console.log(y);
        
        //check if the parties coordinate is in the current 3x3 smallmap
        if((col - 2) * tileSize <= x && x <= (col) * tileSize && (row - 2) * tileSize <= y && y <= (row) * tileSize ){
            console.log("ready to print parties");
           if (elem["inBattle"]){
            ctx.fillStyle = 'red';
            }else{
                ctx.fillStyle = 'yellow';
            }

            if(x > 150){
                x = x % 150;
            }
            if(y > 150){
                y = y % 150;
            }

            ctx.beginPath();
            ctx.arc(x, y, 7, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.font = "10px Georgia";
            ctx.lineWidth = 1;
            ctx.fillText(level.toString(), x - 2 , y + 1);
            ctx.fill();  
            }
       
        

        
    }

}

