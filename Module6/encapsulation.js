// Hiding you data is called Encapsulation 

function Person(_name , _age)
 {
    var name  = _name;
     this.age = _age;
    
    this.getName = function(){
        return name
        
    }
 }


 let Person1= new Person('Anurag' , 25);

 Person1.name = 'anu';
 Person1.age = 35;

 console.log(Person1.getName());
 console.log(Person1.age);
