
let i = 0;
async function initData(params) {
    const response = await fetch("/data")
    const data = await response.json()
    const len = data.lenght
    console.log("dmkl")
    const rev = document.querySelector(".oih")
    rev.innerHTML = `
            <button class="sides left"><img class="sidI" src="static/lefts.png" alt=""></button>
            <button class="sides right" ><img class="sidI" src="static/rights.png" alt=""></button>`
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
    const btn = document.querySelector(".right")
    const btn2 = document.querySelector(".left")
    btn.addEventListener("click", () => {
        rev.innerHTML = `
        <button class="sides left"><img class="sidI" src="static/lefts.png" alt=""></button>
        <button class="sides right" ><img class="sidI" src="static/rights.png" alt=""></button>`
        console.log(i)
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
            console.log("ssw")
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
            console.log("ssw")
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
}
initData()

