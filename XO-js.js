let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let newbutton = document.querySelector("#play");
let winnerMsg=document.querySelector("#winnerMsg");
let msgC=document.querySelector(".hide")
let turn = true;
let count=0;
let winpattern = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const resetGame=()=>{
	let turn = true;
	count=0;
	enableboxes();
	msgC.classList.add("hide")

}
boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (turn) {
			box.innerText = "O";
			turn = false;
		} else {
			box.innerText = "X";
			turn = true;
		}
		box.disabled = true;
		count++;
		let draw=win();
		if(count===9 && !draw)
		{
			gameDraw();
		}
	
	});
});
const disableboxes=()=>{
	for(let box of boxes){
		box.disabled=true;
	}
}
const enableboxes=()=>{
	for(let box of boxes){
		box.disabled=false;
		box.innerText="";
	}
}
const gameDraw=()=>{
	winnerMsg.innerText=`It's a Draw :)`;
	msgC.classList.remove("hide");
	msgC.classList.add("msg-c");
	disableboxes();
}
const showWiner=(winner)=>{
winnerMsg.innerText=`Winner Is ${winner}:)`;
msgC.classList.remove("hide");
msgC.classList.add("msg-c");
disableboxes();
}
const win = () => {
	for ( let part of winpattern) {
		let post1 = boxes[part[0]].innerText;
		let post2 = boxes[part[1]].innerText;
		let post3 = boxes[part[2]].innerText;
		if (post1 !== "" && post2 !== "" && post3 != "") {
			if (post1 === post2 && post2 === post3) {
				 showWiner(post1);
				 return true;
			}
			
		}
	
	}
};
newbutton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);