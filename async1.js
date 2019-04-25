





async function get(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("secret"), 1000)
  })
}

async function process(value){
  return new Promise((resolve, rejct) => {
    setTimeout(() => resolve(`${value}-code`), 1000)
  })
}

async function main(){
  let val = await get();
  let result = await process(val);
  console.log(result)
}

main()