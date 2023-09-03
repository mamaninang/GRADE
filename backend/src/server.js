const express = require('express');
const app = express();

const path = require("path");
const { firebase } = require('firebase-admin')
const { db } = require('./firebaseConfig')

const { auth, signOut, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('firebase/auth')
const { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, query, where } = require('firebase/firestore')

const PORT = process.env.PORT || 8080;

// Json & Express Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


// Home Page Routes
app.get('/', (req, res) => {
  res.status(200).render('home')
})

// User Authorization Routes
app.get('/login', (req, res) => {
  // is teacher middleware
  // is logged in middleware
  // redirect to students viewport
  // or
  // redirect to teacher viewport
})

app.get('/logout', (req, res) => {
  firebase.auth().signOut()
    .then(() => {
      res.redirect('/');
    })
    .catch((e) => {
      res.status(500).json({ success: false, message: 'Logout Failed: ' + e.message})
    })
})

// Student Viewport Routes
app.get('/students/:id', async (req, res) => {
  try {
    const id = req.params.id
    const studentsRef = db.collection('students')
    const queryDb = await studentsRef.doc(id).get()
    
    if(!queryDb.exists) {
      return res.status(404).json({ error: "This student doesn't exist" })
    }
  
    const studentData = queryDb.data()
  
    res.status(200).json(studentData)
  } catch(e) {
    console.error('Error fetching data from Firebase', e)
    res.status(500).json({ error: 'An error occurred while fetching the data from Firebase' })
  }
})

app.get('/courses/:id', async (req, res) => {

})

// Server
app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`)
})