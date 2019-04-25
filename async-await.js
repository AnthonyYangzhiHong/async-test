const fetch = require('node-fetch')

function fetchCatAvatars(userId){
	return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
		.then(response => response.json())
		.then(user => {
			//console.log(user)
			const promises = user.cats.map(catId => {
				//console.log(catId);
				return fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
					.then(response => response.json())
					.then(catData => catData.imageUrl)
			})
			//console.log(promises);

			return Promise.all(promises).then(result => {
				return result;
			})
		})
}

const result = fetchCatAvatars(123)
console.log(result)