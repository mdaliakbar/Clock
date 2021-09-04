const hour = document.querySelector('#hour')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')






// let count = 0;


// setInterval(() => {
//     hour.style.transform = `rotateZ(${count / 12}deg)`
//     minutes.style.transform = `rotateZ(${count / 2}deg)`
//     seconds.style.transform = `rotateZ(${count}deg)`
//     count += 5;
// }, 1000);










function clockRun() {

    let date = new Date()
    let hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();

    hour.style.transform = `rotateZ(${(hh * 30) + ((mm * 6) / 12)}deg)`
    minutes.style.transform = `rotateZ(${mm * 6}deg)`
    seconds.style.transform = `rotateZ(${ss * 6}deg)`

}

setInterval(clockRun, 1000)
