function result(){
	row.innerHTML = initial;
}

let initial = 0;

let buttomAdd = document.getElementById("add");
buttomAdd.addEventListener('click', function(){
	initial = initial + 1;
	result();
});

let buttomReduce = document.getElementById("reduce");
buttomReduce.addEventListener('click', function(){
	initial = initial - 1;
	result();
});

let buttomReset = document.getElementById("reset");
buttomReset.addEventListener('click', function(){
	initial = 0;
	result();
});

let display = document.getElementById("table");
let row = document.createElement("td");
  	display.appendChild(row);
  	result();