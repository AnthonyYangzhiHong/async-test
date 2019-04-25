const fetch = require('node-fetch')

async function fetchCatAvatars(userId){
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const user  = await response.json()
  const catImageUrls = []
  for(const catId of user.cats){
    const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
    const catData = await response.json()
    catImageUrls.push(catData.imageUrl)
  }
  console.log(catImageUrls)
  return catImageUrls
}

const result = fetchCatAvatars(123)

