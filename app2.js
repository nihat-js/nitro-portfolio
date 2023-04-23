let pyramidSections = [
  {
    id : 1,
    name: "Upper",
    text: "Hey, <span class='grad'> I am Nihat </span>",
    active: true,
    color: "#9a8c98",
    height: "25%",

  },
  {
    id : 2,
    name: "Middle",
    text: "Passionate Frontend Developer",
    active: false,
    color: "#4a4e69",
    height: "35%",

  },
  {
    id : 3,
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

function continuePyramid(){
  let activeOneId = pyramidSections.filter(p => p.active ===true)[0].id
  let newOne = pyramidSections.filter(p => p.id === activeOneId+1)
  let newOneId ;
  if (newOne.length == 0){
    newOneId = 1
  }else {
    newOneId  = newOne[0].id 
  }
  console.log("new id " + newOneId)

  pyramidSections.forEach(p => p.id === newOneId ? p.active = true : p.active = false )
  renderActivePyramid()
}



renderActivePyramid()