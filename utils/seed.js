const connection = require('../config/connection'); 
const { User, Thought, Reaction } = require('../models');

const users = [
    {
        username: 'Patrik',
        email: 'patrik@gmail.com',
        thoughtText: ['Opportunities don nott happen you create them'],
        thoughts: [],
    },
    {
        username: 'Lue',
        emails: 'Lue@gmail.com',
        thoughtText: ['It is never too late to be what you might have been'],
        thoughts: [],
    },
    {
        username: 'Chris',
        email: 'chris@gmail.com',
        thoughtText: ['Just one small positive thought in the morning can change your whole day'],
        thoughts: [],
    },
    {
        username: 'Roy',
        email: 'roy@gmail.com',
        thoughts: [],
    },
    {
        username: 'Gary',
        email: 'gary@gmail.com',
        thoughts: [],
    },
    {
        username: 'Sam',
        email: 'sam@gmail.com',
        thoughts: [],
    },
    {
        username: 'Julie',
        email: 'julie@gmail.com',
        thoughts: [],
    },
    {
        username: 'Jen',
        email: 'jen@gmail.com',
        thoughts: [],
    },
    {
        username: 'Rose',
        email: 'rose@gmail.com',
        thoughts: [],
    },
    {
        username: 'Katy',
        email: 'katy@gmail.com',
        thoughts: [],
    },
    {
        username: 'Pat',
        email: 'pat@gmail.com',
        thoughts: [],
    },
    {
        username: 'Andrew',
        email: 'andrew@gmail.com',
        thoughts: [],
    },
  ]

  connection.on('error', (err) => err); 

  connection.once('open', async () => {
      console.log('connected');
      await Thought.deleteMany({});
      await User.deleteMany({});
    
      await User.collection.insertMany(users);
  
      console.info('Seeding complete! 🌱');
      process.exit(0);
    });
  