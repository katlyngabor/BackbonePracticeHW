var Person = Backbone.Model.extend({
			
			defaults: {
				name:'',
				children: [''],
				hobbies: [''],
			},

			idAttribute:"_id",

			initialize: function() {
				var name = this.get('name');
				console.log( name + ' is now a person.');
			}

});

var katlyn = new Person ({
	name:'Katlyn',
	age: 26,
	children: ['Madelyn', 'Penelope']
	
});



var People = Backbone.Collection.extend ({
		model: Person,
		url: "http://tiy-atl-fe-server.herokuapp.com/collections/katlyn"

});

 
var girls = new People();



