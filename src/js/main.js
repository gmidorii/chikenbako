
const apiUrl = 'http://localhost:8888'

function searchChiken() {
  const word = document.chikenSearch.word.value

  const request = new XMLHttpRequest()
  request.open("GET", `${apiUrl}/search?word=${word}`)
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