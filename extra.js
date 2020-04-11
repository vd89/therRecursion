
//The value of the question is important 

const a = () => {
    return {
        b:() => {
            return {
                c:() => {
                    console.log("Hello World");
                }
            }
        }
    }
}

a().b().c() // Hello World 