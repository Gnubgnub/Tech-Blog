const { User } = require('../models');

const userdata =
    [
        {
            "username": "Jack",
            "password": "password"
        },
        {
            "username": "Harris",
            "password": "password"
        },
        {
            "username": "Smith",
            "password": "password"
        }
    ];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;