

  console.log(  "   With call(), an object can use a method belonging to another object.");


  var employee = {
    firstName:"ssm",
    lastName: "ddd",

    fullName: function(state,location) {
      return this.firstName + " \t" + this.lastName  + "\t" + state+ "\t"+ location;
    }
  }
  var emp1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var emp2 = {
    firstName:"Mary",
    lastName: "Doe"
  }

  console.log(" Call ()      The call() method takes arguments separately")
  var details=["AP","GNT"];
 console.log(  employee.fullName.call(emp1,details));  // Will return "Mary Doe"

  console.log("Apply        The apply() method takes arguments as an array ");

   console.log(   employee.fullName.apply(emp1,details));  // Will return "Mary Doe"