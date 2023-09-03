const express = require('express');
const admin = require('firebase-admin');

const app = express();
const PORT = 3010;

const serviceAccount = require('../secrets/grade-firebase.json');

// Initialize the Firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Middleware to authenticate Firebase token
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  admin.auth().verifyIdToken(token)
      .then(decodedToken => {
          req.user = decodedToken;
          next();
      })
      .catch(err => {
          res.status(401).send('Unauthorized');
      });
};

app.get('/secure-endpoint/:uid',  (req, res) => {
  console.log('Successfully reached endpoint!');
  res.json({ "message": `UID is ${req.params.uid}`});
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})