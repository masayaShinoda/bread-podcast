console.log("Custom script is working!")

const goDark = () => {
  const parent = document.querySelector(".parent.light")
  const goDarkBtn = document.querySelector("#goDark")
  if (goDarkBtn) {
    goDarkBtn.addEventListener("click", function() {
      //after parent is switched to dark, change moon to sun
      parent.classList.toggle("dark")
    })
  }
}

goDark()
