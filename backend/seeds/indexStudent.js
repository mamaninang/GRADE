const admin = require('firebase-admin')
const { db } = require('../firebaseConfig');
const data = require('./sampleStudent');

async function deleteAndReseedFirestoreStudentData() {
    try {
        const studentsCollection = db.collection('students');

        const querySnapshot = await studentsCollection.get();
        querySnapshot.forEach((doc) => {
            doc.ref.delete();
        })

        for (const student of data) {
            try {
                const studentRef = await studentsCollection.add(student);
                console.log('Student added with ID: ', studentRef.id);
            } catch (err) {
                console.error('Error adding student: ', err);
            }
        }

        console.log('Seed data deleted and reseeded.')
    } catch (err) {
        console.error('Error deleting and reseeding data: ', err)
    } finally {
        admin.app().delete()
    }
}

deleteAndReseedFirestoreStudentData();