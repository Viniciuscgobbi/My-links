import techs from "./links.json" assert {type: 'json'};
let obj = Object.keys(techs)

console.log(techs)

let section = document.querySelector("#section")


for (let i = 0; i < obj.length; i++){
    let buttons = document.createElement("div")
    function redirect(){
        buttons.style.background = '#fff'
        buttons.style.color = 'black'
        open(`${techs[obj[i]]}`)
    }

    function bcolorenter() {
        buttons.style.background = 'rgb(119, 32, 146)'
        buttons.style.color = '#fff'
    }

    function bcolorleave() {
        buttons.style.background = '#fff'
        buttons.style.color = 'black'
    }

    buttons.setAttribute('id',`buttons`)
    buttons.onclick = redirect
    buttons.onmouseenter = bcolorenter
    buttons.onmouseleave = bcolorleave
    buttons.ontouchstart = bcolorenter
    buttons.ontouchend = bcolorleave
    buttons.ontouchcancel = bcolorleave
    buttons.innerHTML = obj[i]
    section.appendChild(buttons)

}

