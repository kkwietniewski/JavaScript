var table = document.createElement('table');
table.classList.add('table');
for(var i = 0; i < 3; i++){
	var tr = document.createElement('tr');
	
	for(var j = 0; j < 5; j++){
		var td = document.createElement('td');
		td.appendChild(document.createTextNode(j + '. Column'));
	tr.appendChild(td);
		
	}
table.appendChild(tr);
}
document.querySelector('#newTable').appendChild(table);