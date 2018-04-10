const apiUrl = 'http://localhost:8888'

const searchChiken = async () => {
  const word = document.chikenSearch.word.value

  try {
    const res = await fetch(`${apiUrl}/search?word=${word}`)
    const json = await res.json()
    console.log(json)
  } catch (e) {
    console.log(e)
    return
  }

}

export {
  searchChiken
}