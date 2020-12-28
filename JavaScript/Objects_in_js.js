

var company = {
    name: 'Sodi',
    url: "https://sodicompaly.com"

}

var student = Object.create(company);
student.sname = 'Sam',
    student.id = 111,

    console.log(student.name);


var config = Object.freeze({
    url: "https://google.com",
    port: 8080
}
);
config.url = "https://youtube.com";
console.log(config);

// clone objects

var laptop = {
    name: "Asus",
    price: 55000,
    website: 'flipkart'
}


var laps = Object.assign({}, laptop);
laps.price = 75000;

console.log("Original Object ", laptop);
console.log("  Cloned  Objects ", laps);




