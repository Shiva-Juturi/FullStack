var names = ['sam', 'ram', 'siva', 'java', 'script'];

function SearchElement(arrayname, findelements) {

    // console.log(findelements);
    for (var i = 0; i < findelements.length; i++) {

        if (arrayname.includes(findelements[i])) {
            var index1 = arrayname.indexOf(findelements[i]);
            console.log("     Element Found in Array ", findelements[i]);
        } else {
            console.log(" Element is not found in Array ", findelements[i]);
        }
    }
}
SearchElement(names, ['ram', 'sivaaaa']);


