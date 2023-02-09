let techs = {
    "Facebook": "https://web.facebook.com/vinicius.cavatigobbi/",
    "Instagram": "https://instagram.com/vinicgobbi",
    "LinkedIn": "https://www.linkedin.com/in/vinicgobbi/",
    "Github": "https://github.com/Viniciuscgobbi",
    "Gmail": "mailto:vinicius.cgobbi2004@gmail.com"
}
let obj = Object.keys(techs)
console.log(techs)
let section = document.querySelector("#section")
for (let i = 0; i < obj.length; i++){
    let buttons = document.createElement("div")
    function redirect(){
        buttons.style.background = '#fff'
        buttons.style.color = '#282828'
        open(`${techs[obj[i]]}`)
    }
    function bcolorenter() {
        buttons.style.background = '#262626'
        buttons.style.color = '#fff'
    }
    function bcolorleave() {
        buttons.style.background = '#fff'
        buttons.style.color = '#282828'
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

