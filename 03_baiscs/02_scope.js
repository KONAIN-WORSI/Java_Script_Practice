let a = 300

if (true) {
    let a  = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "koanain"

    function two () {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()


// console.log(addOne(8));

function addOne(num) {
    return num + 1
}

// console.log(addTwo(8)); we cannot access the variable before initialization


const addTwo = function (num) {
    return num + 2
}