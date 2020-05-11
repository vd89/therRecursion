// Indirect recursion and how to see


function nationFirst(params) {
   if (params === "yes") {
       console.log("This is the time for NATION");
   } else {
       console.log("You need to Learn Patriotism");
       return lifeFirst("yes")
   } 
}

function lifeFirst(params) {
    if (params === "yes") {
        console.log("You have to understand about life and dedication");
        return nationFirst("yes")
    } else {
        return console.log("You have no goal");
    }
}


function letBringTogether(params) {
    if (params === "yes") {
        return nationFirst("yes")
    } else {
        return lifeFirst("yes")
    }
}

letBringTogether("No") // You have to understand about life and dedication // This is the time for NATION
letBringTogether("yes") // This is the time for NATION 
