// -- Example 1 -----------------------
let users = [
    { name: "Jill" },
    { name: "Alex" },
    { name: "Bill" }
];

let user = users.find((user) => {
    return user.name === "Alex"
})

console.log(user)


// -- Example 2 -----------------------
let posts = [
    { id: 1, title: "New Post" },
    { id: 2, title: "Old Post" }
]
let comment = { postId: 1, content: "Creat Post" };

function getPostForComment(posts, comment) {
    return posts.find((post) => {
        return post.id == comment.postId
    })
}

console.log(getPostForComment(posts, comment));