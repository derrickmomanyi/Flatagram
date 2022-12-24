


document.addEventListener('DOMContentLoaded', () => {
     fetchData();
    
     
    

})

let image = document.getElementById('card-image')
let title = document.getElementById('card-title')
let likes = document.getElementById('like-count')
let likeButton = document.getElementById('like-button')
let commentsDiv = document.getElementById('comments-list')
let form = document.getElementById('comment-form')
let commentInput = document.getElementById('comment')


function fetchData() {
    fetch('http://localhost:3000/images/1')
    .then((res) => res.json())
    .then((data) => displayData(data))
}

function displayData(data) {
    image.src = data.image
    title.innerText = data.title
    likes.innerText = `${data.likes} Likes`
    commentsDiv.innerHTML = ''
    data.comments.forEach(comment => {        
        let commentList = document.createElement('li')
        commentList.innerText = comment.content
        commentsDiv.appendChild(commentList)
    })

    addLikes(data);
}

function addLikes(data) {
    likeButton.addEventListener('click', (e) => {
        e.preventDefault()
         
          data.likes += 1;
          likes.innerText = `${data.likes} Likes`
        
       })

       addComments()
    }

function addComments(data) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();      
     
           
        
        let commentList = document.createElement('li')
        commentList.innerText = comment.value
        commentsDiv.appendChild(commentList)

        const newComment = {
            method: 'PATCH',
            body: JSON.stringify({
                content: comment.value

            }),

            headers: {
                'Content-Type': 'application/json'
            
            },
           
        }
        data.comments.push(newComment)  
         
        fetch('http://localhost:3000/images/1', newComment)
            
        .then(res => res.json())
        .then(data => {
            commentList.innerText = comment.value
        }) 
        }),   

     form.reset()
}

