const admin = require('firebase-admin')
const { db } = require('../firebaseConfig');
const data = require('./sampleCourse');

async function deleteAndReseedFirestoreCourseData() {
    try {
        const courseCollection = db.collection('courses');

        const querySnapshot = await courseCollection.get();
        querySnapshot.forEach((doc) => {
            doc.ref.delete();
        })

        for (const course of data) {
            try {
                const courseRef = await courseCollection.add(course);
                console.log('Course added with ID: ', courseRef.id);
            } catch (err) {
                console.error('Error adding Course: ', err);
            }
        }

        console.log('Seed data deleted and reseeded.')
    } catch (err) {
        console.error('Error deleting and reseeding data: ', err)
    } finally {
        admin.app().delete()
    }
}

deleteAndReseedFirestoreCourseData();