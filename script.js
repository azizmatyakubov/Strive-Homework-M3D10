const endPoint = 'https://striveschool-api.herokuapp.com/api/movies/'
const container = document.querySelector('#container')
let categories = []

window.onload = async() => getMovie()

const getMovie = async () => {
   const response =  await fetch(endPoint, {
       headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDY5OTkxMjksImV4cCI6MTY0ODIwODcyOX0.tZj15jkzkbn1IZkqDEEDvSVVYOVuwfWunseLMjfR3hw"
        },})
    const data = await response.json()
    categories = await data
    
    displayRowTitle(data)
}

const displayRowTitle = async (array) => {
    array.map(category => {

    
    container.innerHTML += 
    `   
        <div class='categoryLine'>
          
            <div class="p-2">
                <h5 class="title-prime">${category}</h5>
            </div>
            
            <div class="row mt-n2 mx-1   row-poster" id='${category}'>
            </div>

        </div>

    `

    displayMovie(category)
    }).join('')

    
}


const displayMovie = async (category) => {
    const response = await fetch(endPoint + category, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDY5OTkxMjksImV4cCI6MTY0ODIwODcyOX0.tZj15jkzkbn1IZkqDEEDvSVVYOVuwfWunseLMjfR3hw"
        }
    })
    const data = await response.json()
    console.log(data, 'this is result of API with category tag')


     for(let i=0; i<data.length; i++) {
        let code = `
        
        <div class="col-4 col-md-3 col-lg-2 px-1 mb-2 mb-md-2">
        <a class="image-container" href="./backoffice.html?id=${data[i]._id}&category=${data[i].category}"><img src="${data[i].imageUrl}" alt="image movie" class="img-fluid image mb-2"></a>
        </div>
      </div>    
      `
     
    
      document.querySelector(`#${category}`).innerHTML += code
    }
} 