var Person = function(){
	this.name = "lsy";
	this.weight = 50;
	this.height = 166;
	this.future = function dream(){
		return "future";
		};
};

var Chinese = function(){
	this.country = "China";
	}
	
Chinese.prototype = new Person(); 

var lsy = new Chinese();


var person = new Person();

document.write(person.name + "<br>");
document.write(person.future + "<br>");

