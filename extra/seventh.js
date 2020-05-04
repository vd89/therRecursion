// ARRAY DESTRUCTURING
function user(user) {
    let [fname, Sname, age, ...rest] = user.split(' ')
    console.log({
        fname: fname,
        Sname: Sname,
        age: Number(age),
        food: rest
    })
}
user('Rizwan Aman 17 tea dosa biryani')
// OBJECT DESTRUCTURING
function printObj() {
    let object = {
        name: 'motu',
        age: 17,
        edu: {
            school: 'the levelfield school',
            bootcamp: 'the hacking school',
            prevSchool: {
                kg: 'school1',
                later: 'school2'
            }
        }
    }
    function render() {
        let { name, age, edu } = object
        return console.log(name, age, edu.prevSchool)
    }
    render()
}
printObj()