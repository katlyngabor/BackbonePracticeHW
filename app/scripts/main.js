// Fetching the data & creating my view
girls.fetch().done(function () {
  new View( { collection: girls } );
});
 
// Creating a new student
var ingrid = new Person({ name: 'Ingrid' });

 
 
// // I could also do some updating to my view
// var s = all_students.findWhere({name: "NAME"});
// s.set('location', 'Idaho');
// s.destroy();