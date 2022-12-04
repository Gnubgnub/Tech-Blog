const { Post } = require('../models');

const postdata =
    [
        {
            "postTitle": "Weather",
            "postContent": "It's getting colder",
            "userId": 1
        },
        {
            "postTitle": "Fruit",
            "postContent": "Grapes are my favorite fruit",
            "userId": 2
        },
        {
            "postTitle": "Painting",
            "postContent": "This is a beautiful painting",
            "userId": 3
        }
    ];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;