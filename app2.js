let pyramidSections = [
  {
    name: "Upper",
    text: "Nihat Abdullazade",
    active: true,
    color: "#9a8c98",
    height: "25%",

  },
  {
    name: "Middle",
    text: "Passionate Frontend Developer",
    active: false,
    color: "#4a4e69",
    height: "35%",

  },
  {
    name: "Core",
  
    text: "With 6 months experience",
    active: false,
    color: "#22223b",
    height: "45%",

  },
]

function handlePyramidClick(item) {
  pyramidSections.forEach(x => { x.name == item.name ? x.active = true : x.active = false })
  renderActivePyramid()
}

pyramidSections.forEach((item, index) => {
  let p = document.createElement('p')
  p.onclick = () => { handlePyramidClick(item) }
  p.style.cssText = ` background-color :  ${item.color};   height:  ${item.height}   `
  p.classList = `part part-${index} ${item.active ? "active" : ""} `

  document.querySelector(".hero .pyramid").appendChild(p)
})


function renderActivePyramid() {
  let activeOne = pyramidSections.filter(p => p.active === true)[0]
  document.querySelector(".hero .heading").innerHTML = activeOne.text
}


renderActivePyramid()