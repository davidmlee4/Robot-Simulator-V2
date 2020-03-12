document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  const moveButton = document.getElementById("move-button")
  let moveTracker = document.getElementById("moves-container")

  
  document.addEventListener("keydown",function(event){
    let li = document.createElement("li")
    let direction = event.key
  if (direction === "ArrowLeft"){
    li.innerText = "left"
    moveTracker.append(li)
  }
  if (direction === "ArrowRight"){
    li.innerText = "right"
    moveTracker.append(li)
  }
  if (direction === "ArrowUp"){
    li.innerText = "up"
    moveTracker.append(li)
  }
  if (direction === "ArrowDown"){
    li.innerText = "down"
    moveTracker.append(li)
  }
  if (direction === "Backspace"){
    moveTracker.lastChild.remove()
  }
  
})


  // ADD CODE HERE!
  moveButton.addEventListener("click",function(event){
    let li = moveTracker.querySelector("li")
  if ( li.innerText === "left"){
    move("left")
  }
  if (li.innerText === "right"){
    move("right")

  }
  if (li.innerText === "up"){
    move("up")

  }
  if (li.innerText === "down"){
    move("down")

  }

  li.remove()


  })


})
