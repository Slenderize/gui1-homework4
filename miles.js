function myFunction() {
		var month = Number($('#month').val());
		var P1 = Number($('#R1').val());
		var P2 = Number($('#R2').val());
		var P3 = Number($('#R3').val());
		var P4 = Number($('#R4').val());
		var P5 = Number($('#R5').val());

		var MPG1 = Number($('#C1').val());
		var MPG2 = Number($('#C2').val());
		var MPG3 = Number($('#C3').val());
		var MPG4 = Number($('#C4').val());
		var MPG5 = Number($('#C5').val());

		//Calculating per mile cost ....
		var mile11 = P1 / MPG1;
		var mile12 = P2 / MPG1;
		var mile13 = P3 / MPG1;
		var mile14 = P4 / MPG1;
		var mile15 = P5 / MPG1;
		var mile = [mile11.toFixed(2), mile12.toFixed(2), mile13.toFixed(2), mile14.toFixed(2), mile15.toFixed(2)]

		//Calculating per mile cost ....
		var mile21 = P1 / MPG2;
		var mile22 = P2 / MPG2;
		var mile23 = P3 / MPG2;
		var mile24 = P4 / MPG2;
		var mile25 = P5 / MPG2;
		var mile1 = [mile21.toFixed(2), mile22.toFixed(2), mile23.toFixed(2), mile24.toFixed(2), mile25.toFixed(2)]

		//Calculating per mile cost ....
		var mile31 = P1 / MPG3;
		var mile32 = P2 / MPG3;
		var mile33 = P3 / MPG3;
		var mile34 = P4 / MPG3;
		var mile35 = P5 / MPG3;
		var mile2 = [mile31.toFixed(2), mile32.toFixed(2), mile33.toFixed(2), mile34.toFixed(2), mile35.toFixed(2)]

		//Calculating per mile cost ....
		var mile41 = P1 / MPG4;
		var mile42 = P2 / MPG4;
		var mile43 = P3 / MPG4;
		var mile44 = P4 / MPG4;
		var mile45 = P5 / MPG4;
		var mile3 = [mile41.toFixed(2), mile42.toFixed(2), mile43.toFixed(2), mile44.toFixed(2), mile45.toFixed(2)]

		//Calculating per mile cost ....
		var mile51 = P1 / MPG5;
		var mile52 = P2 / MPG5;
		var mile53 = P3 / MPG5;
		var mile54 = P4 / MPG5;
		var mile55 = P5 / MPG5;
		var mile4 = [mile51.toFixed(2), mile52.toFixed(2), mile53.toFixed(2), mile54.toFixed(2), mile55.toFixed(2)]

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[1].cells;
	x[i].innerHTML = "$" + mile[i-1] + "/mi" + " : $" + (mile[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[2].cells;
	x[i].innerHTML = "$" + mile1[i-1] + "/mi" + " : $" + (mile1[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[3].cells;
	x[i].innerHTML = "$" + mile2[i-1] + "/mi" + " : $" + (mile2[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[4].cells;
	x[i].innerHTML = "$" + mile3[i-1] + "/mi" + " : $" + (mile3[i-1] * month).toFixed(2) + "/mo";
	}

	for (i = 1; i < 6; i++) {
	var x = document.getElementById("table1").rows[5].cells;
	x[i].innerHTML = "$" + mile4[i-1] + "/mi" + " : $" + (mile4[i-1] * month).toFixed(2) + "/mo";
	}
}

function AddData(){
	var x = document.getElementById("fuel").value;
	var y = document.getElementById("car").value;
	var letters = '/^[a-zA-Z]+$/';
	if((parseInt(x)!=(x))&&(y==parseInt(y))){
		alert("Wrong Value Entered");
	}
	else{
		var rows = "";
		var name = document.getElementById("car").value;
		var fuel = document.getElementById("fuel").value;
		var i = 0;
		rows += "<tr><td>" + "Vehicle" + "<td><td>" + "$" +name  + "</td><td>" + fuel + "</td><td>";
		$(rows).appendTo("#list tbody");
		}
}
function ResetForm(){
		document.getElementById("person").reset();
}
