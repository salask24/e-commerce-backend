const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'nude',
    },
    {
        tag_name: 'black',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'gold',
    },
    {
        tag_name: 'off white',
    }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;