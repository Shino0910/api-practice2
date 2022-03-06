let button = document.querySelector("button")
let img = document.querySelector(".photo")

button.addEventListener("click",function(e){

    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
      img.src = response.data.message
    })
    .catch(function(error){
        console.log(error)
    })
})

