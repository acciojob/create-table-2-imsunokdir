const table = document.getElementById("myTable");
let startRow=0;

function createTable() {
    //Write your code here
	let rn = Number(prompt("Input number of rows"));
	let cn = Number(prompt("Input number of columns"));
	let i=0;
	for(i=startRow;i<rn+startRow;i++){
		console.log(i)
		let newTr = document.createElement("tr");
		for(j=0;j<cn;j++){
			let newTd = document.createElement("td");
			newTd.textContent = `Row-${i} Column-${j}`
			newTr.appendChild(newTd);
		}
		table.appendChild(newTr)
	}
	startRow=i;
	
}
