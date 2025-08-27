document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');  
    const textarea = document.getElementById('blogpost');
    const blogContainer = document.querySelector('.blog-container');

    let postsDiv = document.createElement('div'); // create a container for older posts 
    postsDiv.id = 'posts'; 
    blogContainer.appendChild(postsDiv); //add individual posts to container

    //next we load in previous posts from localStorage using json.parse
    function loadPosts() {
        postsDiv.innerHTML = '';
        const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]'); //list of posts
        // style old posts and add to container
        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.style.background = '#f1f1f1';
            postEl.style.margin = '1em 0';
            postEl.style.padding = '1em';
            postEl.style.borderRadius = '6px';
            postEl.style.textAlign = 'left';
            postEl.textContent = post;
            postsDiv.appendChild(postEl);
        });
    }

    loadPosts();

    // handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const postText = textarea.value.trim();
        if (postText) {
            const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
            posts.unshift(postText); // Add new post to the top
            localStorage.setItem('blogPosts', JSON.stringify(posts));
            textarea.value = '';
            loadPosts();
        }
    });
});