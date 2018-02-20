const mongoose = require('mongoose'),
  config = require('../config/Config'),
  dburl = config.MONGO_URI;

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
const gracefulShutdown = msg => {
  return new Promise((resolve, reject) => {
    mongoose.connection
      .close()
      .then(() => {
        resolve(msg);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart')
    .then(() => {
      process.kill(process.pid, 'SIGUSR2');
    })
    .catch(err => {
      console.error(err);
    });
});

// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('App termination (SIGINT)')
    .then(() => {
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
    });
});

// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('App termination (SIGTERM)')
    .then(() => {
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
    });
});

mongoose.Promise = Promise;
mongoose
  .connect(dburl)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.error(err);
    gracefulShutdown()
      .then(() => {
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
      });
  });

require('../models/Product');
