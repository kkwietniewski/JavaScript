var person =
{
	fname: "Kacper",
  greet: function()
  {
  	//var self = this;
  	var innerGreet = function()
    {
    	console.log("Hi, I'm " + this.fname);
    }
    //innerGreet.call(this);
		var nextGreet = innerGreet.bind(this);
    nextGreet();
  }
}
person.greet();

var person2 =
{
  fname: "Kacper",
  greet: function()
  {
    //var self = this;
    var innerGreet = 
    () => console.log("Hi, I'm " + this.fname);
    innerGreet()
  }
}
person2.greet();