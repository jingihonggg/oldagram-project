const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likes = document.querySelector('.post-icon-heart');
const likesDisplay = document.querySelector('.post-likes');
const postImage = document.querySelector('.post-img');
const authorUsername = document.querySelector('.author-username');
const authorName = document.querySelector('.author-name');
const authorLocation = document.querySelector('.author-location');


function displayAuthorsInformation(){
    for (let i = 0 ; i<posts.length;i++){
        authorName.textContent = posts[i].name;
        authorUsername.textContent = posts[i].username;
        authorLocation.textContent = posts[i].location;
    }
}

displayAuthorsInformation();

likes.addEventListener('click', function() {
    let currentLikes = parseInt(likesDisplay.textContent);
    currentLikes = currentLikes + 1;
    likesDisplay.textContent = `${currentLikes} likes`;
});



postImage.addEventListener('dblclick',function(){
    let currentLikes = parseInt(likesDisplay.textContent);
    currentLikes = currentLikes + 1;
    likesDisplay.textContent = `${currentLikes} likes`
})