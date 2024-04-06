//table 1
var value = [41, 18, 21, 63, 2, 53, 5, 57, 60, 93, 28, 3, 90, 39, 80, 88, 49, 60, 26, 28];
var table1 = '<table><thead><tr><td class = "headerTable1">Index#</td><td class = "headerTable1">Value</td></tr></thead><tbody>';

for (var i = 0; i< 20; i++){
    table1 += '<tr><td id="index" >' + 'A' + (i+1) + '</td><td id="value">' + value[i] + '</td></tr>'
}

table1 += '</tbody></table>';

document.getElementById('table1').innerHTML = table1;

//table 2
var category = ['Alpha', 'Beta', 'Charlie'];
var value2 = [(value[4] + value[19]), (value[14] / value[6]), (value[12] * value[11])];

var table2 = '<table><thead><tr><th class = "headerTable2">Category</th><th class = "headerTable2">Value</th></tr></thead><tbody>';

for (var i = 0; i< category.length; i++){
    table2 += '<tr><td id="category" >' + category[i] + '</td><td id="value2">' + value2[i] + '</td></tr>'
}

table2 += '</tbody></table>';

document.getElementById('table2').innerHTML = table2;
