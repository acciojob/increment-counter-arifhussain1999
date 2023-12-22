//your JS code here. If required.
let ele=document.getElementById("counter");
let inc=document.getElementById("incrementBtn");

let cnt=0;
function fn() {
	alert(cnt)
	cnt++;
	ele.innerText=cnt;
}
