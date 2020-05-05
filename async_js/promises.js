const posts = [
    {
        title: 'Post One',
        body: 'This is the first post',
    },
    {
        title: 'Post Two',
        body: 'This is the second post',
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// instead of passing in a callback, we want to return a promise
function createPost(post) {
    // promise takes in two params, resolve and reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            // error checking
            const error = false;

            if (!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

createPost({ title: 'Post Three', body: 'This is the third post' })
    .then(getPosts)
    .catch(err => console.log(err));