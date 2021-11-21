list = 0
for (let i = 0; i < 10; i++) {
    list += 1
let ism = prompt("Ismingizni kriting" )
if( ism == " " || !isNaN(ism) ){
    ism = "Name"
}
else{
    ism = ism 
}


let yosh = +prompt(" Yoshingizni kriting")



    console.log( list + " foydalanuvchi " );
  
    const user = {
        name: " ",
        age: " "
        

    }
    user.name = ism
    user.age = yosh
    
  
    console.log(user);
    console.log( "Sizning ismingiz " + user.name );
    console.log( "Sizning yoshingiz " + user.age);
   
    

    

}

