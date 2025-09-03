// poly -> many 
// morph -> forms
// ism -> method

//  sound--->same funtion but different output
class Animal {
    
    sound(){
        console.log(`Animals make differrent sound`)
    }
}

class Dog{
    
    sound(){
        console.log(`Dog Barks`)
    } 
}

class cat {
    
    sound(){
        console.log(`Cat Mews`)
    }
}


let Animal1 = new Animal()

let tommy = new Dog()

let percy  = new cat()

Animal1.sound()
tommy.sound()
percy.sound()



