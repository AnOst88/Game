let count = 0;
let songs = ["Changes", "Calvin Harris - Feel So Close (Radio Edit)","Dead space-main", "В поле спят мательки"];

window.onload = function(){
	let mp3 = document.getElementById("mp3");
	document.getElementById('next').onclick = next;
	document.getElementById("stop").onclick = stop;
	document.getElementById("play").onclick = play;
	document.getElementById("prev").onclick = prev;

	let ul = document.getElementById("ul");

for(let i = 0; i < songs.length;i++){
	let li = document.createElement('li');
	li.innerHTML = songs[i];
	
}
}

function changeColor(){
	let color = document.getElementsByTagName('li');

	for(let x = 0; x<color.length; x++){
		if(count == x){
			color[x].classList.add('active')
		}else{
			color[x].classList.remove('active')
		}
	}
}

function next(){
	if(count<songs.length-1){
		count++;
		play()
	}
}
function prev(){
	if(count>0){
		count--;
		play()
	}
}
function play(){
	changeColor()
	mp3.src = 'music\\'+songs[count]+'.mp3';
}
function stop(){
	mp3.pause()
}