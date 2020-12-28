var string1 = ' RAMA RAO';

function stringhaving_space(string1) {

    var op = string1.includes(" ");
    console.log(op);


}

stringhaving_space(string1);


var Arrar1 = ["rama", "1", "Sam", "ban", "rama", "rama", "Sam", "ban"];
var array2 = [];


function Removeduplicate(Arrar1) {

    for (var i = 0; i < Arrar1.length; i++) {

        if (array2.includes(Arrar1[i])) {

        }
        else {
            array2.push(Arrar1[i]);

        }


    }


}

Removeduplicate(Arrar1);
console.log("Orignal Array  duplicate");
console.log(Arrar1);
console.log("remove duplicate");
console.log(array2);



console.log("  Filter the Object ");

var names = ["Hyderabad", 1, true, "Bangalure", "AndhraPradesh", 4, "Chennai", 3, 2, 0, 99];
console.log(" Original Arrany ", names);
var stringnames = [];
var numbergnames = [];
var boolnames = [];


names.filter(function (element) {

    if (typeof element == 'string') {
        stringnames.push(element);
        stringnames.sort();
    }
    if (typeof element == 'boolean') {
        boolnames.push(element);
        boolnames.sort();
    }
    if (typeof element == 'number') {
        numbergnames.push(element);
        numbergnames.sort();


    }

}


);

console.log("string Element ", stringnames);
console.log("boolean Elements  ", boolnames);
console.log("numbers Elements  ", numbergnames);
