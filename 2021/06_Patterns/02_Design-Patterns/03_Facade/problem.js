console.log(`Message from problem.js`);

const userAPI = `https://jsonplaceholder.typicode.com/users`;

function getFetch(url) {
    return fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

function getUsers() {
    return fetch(userAPI, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

function getUsersPosts(userId) {
    const postsAPI = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    fetch(postsAPI, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json());

};

getUsers().then(users => {
    users.forEach(user => {
        getUsersPosts(user.id).then(posts => {
            console.log(`The user ${user.name} has ${posts.length} posts`);
        });
    });
});

