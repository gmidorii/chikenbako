
function searchChiken() {
  const word = document.chikenSearch.word.value
  console.log(word)

  const request = new XMLHttpRequest()
  request.open("GET", ``)
  request.addEventListener("load", (event) => {
    console.log(event.target.status)
    console.log(event.target.responseText)
  })
  request.addEventListener("error", (event) => {
    console.log(event.target.status)
    console.log("Error")
  })
  request.send()
}