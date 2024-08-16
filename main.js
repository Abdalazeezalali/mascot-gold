const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        showTitles()
        if (entry.isIntersecting) {
            // showTitles()
            entry.target.classList.add("show")
        } else {
            // showTitles()
            entry.target.classList.remove("show")
        }
    })
})
const hidden = document.querySelectorAll(".hidden")
hidden.forEach((el) => observer.observe(el))
// async
async function showTitles() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("h1").style.visibility = "visible"
            resolve()
        }, 500)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("h2").style.visibility = "visible"
            resolve()
        }, 500)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("h3").style.visibility = "visible"
            resolve()
        }, 500)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("h4").style.visibility = "visible"
            resolve()
        }, 500)
    })
    setTimeout(() => {
        document.getElementById("h5").style.visibility = "visible"
        resolve()
    }, 500)
}
