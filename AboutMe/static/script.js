
let i = 1;
const rev = document.querySelector(".oih")
rev.innerHTML = `
        <button class="sides left"><img class="sidI" src="static/lefts.png" alt=""></button>
        <button class="sides right" ><img class="sidI" src="static/rights.png" alt=""></button>`
const btn = document.querySelector(".right")
const btn2 = document.querySelector(".left")

async function initData(params) {
    const response = await fetch("/data")
    const data = await response.json()
    const len = data.length
    console.log("dmkl")
    
    let cart = document.createElement("div")
    cart.classList.add("rev")
    cart.innerHTML = `
                <div class="revcart">
                    <p class="revt">${data[0].Text}</p>
                    <div class="autrev">
                        <img src="${data[0].Image}" alt="тут аватарка" class="revic">
                        <p class="revau">${data[0].Author}</p>
                    </div>
                </div>
        `
    console.log("ssw")
    let cart2 = document.createElement("div")
    cart2.classList.add("rev")
    cart2.innerHTML = `
                <div class="revcart">
                    <p class="revt">${data[1].Text}</p>
                    <div class="autrev">
                        <img src="${data[1].Image}" alt="тут аватарка" class="revic">
                        <p class="revau">${data[1].Author}</p>
                    </div>
                </div>
        `
    rev.appendChild(cart)
    rev.appendChild(cart2)

    btn.addEventListener("click", () => {
        while (document.querySelectorAll(".rev").length != 0){
            rev.removeChild(document.querySelectorAll(".rev")[0])
        }
        
        const cart = document.createElement("div")
        cart.classList.add("rev")
        if (i == len - 1) {
            let cart = document.createElement("div")
            cart.classList.add("rev")
            cart.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[i].Text}</p>
                            <div class="autrev">
                                <img src="${data[i].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[i].Author}</p>
                            </div>
                        </div>
                `
            console.log("Условие 1")
            console.log(len)
            console.log(i)
            let cart2 = document.createElement("div")
            cart2.classList.add("rev")
            cart2.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[0].Text}</p>
                            <div class="autrev">
                                <img src="${data[0].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[0].Author}</p>
                            </div>
                        </div>
                `
            rev.appendChild(cart)
            rev.appendChild(cart2)
            i = 0
            console.log(i)
        }
        else{
            let cart = document.createElement("div")
            cart.classList.add("rev")
            cart.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[i].Text}</p>
                            <div class="autrev">
                                <img src="${data[i].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[i].Author}</p>
                            </div>
                        </div>
                `
            console.log("Условие 2")
            console.log(len)
            console.log(i)
            console.log(i + 1)
            let cart2 = document.createElement("div")
            cart2.classList.add("rev")
            cart2.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[i + 1].Text}</p>
                            <div class="autrev">
                                <img src="${data[i + 1].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[i + 1].Author}</p>
                            </div>
                        </div>
                `
            rev.appendChild(cart)
            rev.appendChild(cart2)
            i++
        }

    })
    btn2.addEventListener("click", () => {
        while (document.querySelectorAll(".rev").length != 0){
            rev.removeChild(document.querySelectorAll(".rev")[0])
        }
        const cart = document.createElement("div")
        cart.classList.add("rev")
        if (i == 1) {
            let cart = document.createElement("div")
            cart.classList.add("rev")
            cart.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[i - 1].Text}</p>
                            <div class="autrev">
                                <img src="${data[i - 1].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[i - 1].Author}</p>
                            </div>
                        </div>
                `
            console.log("Условие 1")
            console.log(len)
            console.log(i)
            let cart2 = document.createElement("div")
            cart2.classList.add("rev")
            cart2.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[len - 1].Text}</p>
                            <div class="autrev">
                                <img src="${data[len - 1].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[len - 1].Author}</p>
                            </div>
                        </div>
                `
            rev.appendChild(cart2)
            rev.appendChild(cart)
            i = len - 1
            console.log(i)
        }
        else if ( i == 0){
            let cart = document.createElement("div")
            cart.classList.add("rev")
            cart.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[len - 1].Text}</p>
                            <div class="autrev">
                                <img src="${data[len - 1].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[len - 1].Author}</p>
                            </div>
                        </div>
                `
            console.log("Условие 1")
            console.log(len)
            console.log(i)
            let cart2 = document.createElement("div")
            cart2.classList.add("rev")
            cart2.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[len - 2].Text}</p>
                            <div class="autrev">
                                <img src="${data[len - 2].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[len - 2].Author}</p>
                            </div>
                        </div>
                `
            rev.appendChild(cart2)
            rev.appendChild(cart)
            i = len - 1
            console.log(i)
        }
        else{
            let cart = document.createElement("div")
            cart.classList.add("rev")
            cart.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[i - 1].Text}</p>
                            <div class="autrev">
                                <img src="${data[i - 1].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[i - 1].Author}</p>
                            </div>
                        </div>
                `
            console.log("Условие 2")
            console.log(len)
            console.log(i)
            console.log(i - 1)
            let cart2 = document.createElement("div")
            cart2.classList.add("rev")
            cart2.innerHTML = `
                        <div class="revcart">
                            <p class="revt">${data[i - 2].Text}</p>
                            <div class="autrev">
                                <img src="${data[i - 2].Image}" alt="тут аватарка" class="revic">
                                <p class="revau">${data[i - 2].Author}</p>
                            </div>
                        </div>
                `
            rev.appendChild(cart2)
            rev.appendChild(cart)
            i--
        }
    })
}
initData()

btn.addEventListener("click", () => {
    console.log("1s")
})