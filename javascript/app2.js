

var IO = new Object();
function print(result){
	document.write(result);
	
};

IO.print = print;
IO.print("This is a test !");


var Person={ name: "lsy", weight: 50, height: 166};
function dream(){
	future;

};

Person.future = dream;
document.write(typeof Person);
document.write(Person.future);




