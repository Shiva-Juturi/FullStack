var names = ['sam', 'ram', 'siva', 'java', 'script'];

function removeElement(arrayname, elements) {
console.log( "Before Deleting  Array ",arrayname)
    console.log("Elements to be deleting ",elements);
    for (var i = 0; i < elements.length; i++) {

        if (arrayname.includes(elements[i])) {
            var index1 = arrayname.indexOf(elements[i]);
            console.log("Element Found", elements[i]);
            arrayname.splice(index1, 1);

        } else {
            console.log(" Element is not found", elements[i]);
        }
    }
    console.log("After Deleting Array  Elements", arrayname);

}

removeElement(names, ['ram', 'sivaaaa']);


