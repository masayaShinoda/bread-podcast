console.log("Custom script is working!")

const goDark = () => {
  const parent = document.querySelector(".parent.light")
  const goDarkBtn = document.querySelector("#goDark")
  goDarkBtn.addEventListener("click", function() {
    //after parent is switched to dark, change moon to sun
    parent.classList.toggle("dark")
  })
}
/*const goDark = () => {
  const parent = document.querySelector(".parent.light")
  document.querySelector("#goDark").addEventListener("click", function() {
    //after parent is switched to dark, change moon to sun
    parent.classList.toggle("dark")
  })
}*/

goDark()
