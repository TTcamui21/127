timerCounter = 0


timerCheck =  0

sketch  = quickDrawDataset[randowNamber];
document.getElementById("sketckName").innerHTML  = "esboço a ser desenhado:" + sketck


function checkSketch ()
{

timerCounter++;
document.getElementById("tempo").innerHTML = "tempo:" + timerCounter;
console.log(timerCounter)
if(timerCounter > 400)
{

timerCounter  = 0
timerCheck = "completed"
}

if(timerCheck =="completed"  ||  answerHolder ==  "set")
{

timerCheck = "";
answerHolder = "";
updateCanvas();
}
}

    



