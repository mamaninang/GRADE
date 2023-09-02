const { db } = require('../firebaseConfig');
const data = require('./sampleStudent');
const Student = require('../models/student')

async function seedFirestore() {
    const studentsCollection = db.collection('students');

    for(const student of data) {
        try {
            const studentRef = await studentsCollection.add(student);
            console.log('Student added with ID: ', studentRef.id);
        } catch (error) {
            console.error('Error adding student: ', error);
        }
    }
}

seedFirestore();