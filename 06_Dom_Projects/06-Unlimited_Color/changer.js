// const colorArray = ["red", "blue", "black", "grey", "dark red", "dark blue"]

// const startBtn = document.getElementById("start")
// const stopBtn = document.getElementById("stop")

// const changeColor = startBtn.addEventListener('click', function() {
//     const interval = setInterval(() => {
//         const randomColor = Math.floor(Math.random() * colorArray.length)
//         document.querySelector('body').style.backgroundColor = colorArray[randomColor]
//     }, 2000)

//     stopBtn.addEventListener('click', function() {
//         clearInterval(interval);
//         console.log("Cleared!");
//     })
// })

const start = document.getElementById('start')
const stop = document.getElementById('stop')

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

const changeColor = start.addEventListener('click', function() {
    const interval = setInterval(() => {
        document.querySelector('body').style.backgroundColor = randomColor()
    }, 2000)

    stop.addEventListener('click', function() {
        clearInterval(interval);
        console.log("Cleared!");
    })
})


