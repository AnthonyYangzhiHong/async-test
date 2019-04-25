const fetch = require('node-fetch')

//using promises
/*function fetchCatAvatars(userId, callback){
	return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
		.then(response => response.json())
		.then(user => {
			//console.log(user)
			const promises = user.cats.map(catId => 
				//console.log(catId);
				fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
					.then(response => response.json())
					.then(catData => catData.imageUrl)
			)
			//console.log(promises);
      
			Promise.all(promises).then(result => {
        result
        callback(result)
      });
		})
}

const result = fetchCatAvatars(123, res => {
  console.log(res)
})*/

//using async/await
async function fetchCatAvatars(userId){
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const user  = await response.json()
  user
  const catImageUrls = []
  for(const catId of user.cats){
    const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
    const catData = await response.json()
    catImageUrls.push(catData.imageUrl)
  }
  return catImageUrls
}

const result = fetchCatAvatars(123)
result

