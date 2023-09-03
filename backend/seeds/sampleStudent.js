module.exports = [
    {
        name: 'Janice Albenworth',
        email: 'janicealbenworth@gmail.com',
        password: '',
        courses: [
            {
                courseName: 'Spanish I',
                teacher: 'Rich Stevens',
                assignments: [
                    {
                        assignmentName: 'Weekly Quiz 1',
                        grade: 72
                    },
                    {
                        assignmentName: 'Weekly Quiz 2',
                        grade: 75
                    },
                    {
                        assignmentName: 'Weekly Quiz 3',
                        grade: 65
                    },
                ],
                courseGrade: 0,
            },
            {
                courseName: 'AP Chemistry',
                teacher: 'Richard Hawk',
                assignments: [
                    {
                        assignmentName: 'Homework 1',
                        grade: 65
                    },
                    {
                        assignmentName: 'Homework 2',
                        grade: 64
                    },
                    {
                        assignmentName: 'Quiz 1',
                        grade: 78
                    },
                    {
                        assignmentName: 'Homework 3',
                        grade: 63
                    },
                    {
                        assignmentName: 'Quiz 2',
                        grade: 80
                    },
                ],
                courseGrade: 0,
            }
        ]
    },
    {
        name: 'Frank Reels',
        email: 'frankreels@gmail.com',
        password: '',
        courses: [
            {
                courseName: 'Algebra II',
                teacher: 'Sarah Price',
                assignments: [
                    {
                        assignmentName: 'Quiz 1',
                        grade: 89
                    },
                    {
                        assignmentName: 'Project 1',
                        grade: 90
                    },
                    {
                        assignmentName: 'Quiz 2',
                        grade: 90
                    },
                    {
                        assignmentName: 'Test 1',
                        grade: 87
                    }
                ],
                courseGrade: 0,
            },
        ]
    },
    {
        name: 'Timothy Sutwater',
        email: 'timothysutwater@gmail.com',
        password: '',
        courses: [
            {
                courseName: 'Spanish I',
                teacher: 'Rich Stevens',
                assignments: [
                    {
                        assignmentName: 'Weekly Quiz 1',
                        grade: 72
                    },
                    {
                        assignmentName: 'Weekly Quiz 2',
                        grade: 74
                    },
                    {
                        assignmentName: 'Weekly Quiz 3',
                        grade: 70
                    },
                ],
                courseGrade: 0,
            },
            {
                courseName: 'AP Chemistry',
                teacher: 'Richard Hawk',
                assignments: [
                    {
                        assignmentName: 'Homework 1',
                        grade: 73
                    },
                    {
                        assignmentName: 'Homework 2',
                        grade: 90
                    },
                    {
                        assignmentName: 'Quiz 1',
                        grade: 82
                    },
                    {
                        assignmentName: 'Homework 3',
                        grade: 78
                    },
                    {
                        assignmentName: 'Quiz 2',
                        grade: 87
                    },
                ],
                courseGrade: 0,
            }
        ]
    },
    {
        name: 'Mac Rox',
        email: 'macrox@gmail.com',
        password: '',
        courses: [
            {
                courseName: 'Spanish I',
                teacher: 'Rich Stevens',
                assignments: [
                    {
                        assignmentName: 'Weekly Quiz 1',
                        grade: 78
                    },
                    {
                        assignmentName: 'Weekly Quiz 2',
                        grade: 82
                    },
                    {
                        assignmentName: 'Weekly Quiz 3',
                        grade: 75
                    },
                ],
                courseGrade: 0,
            },
            {
                courseName: 'Algebra II',
                teacher: 'Sarah Price',
                assignments: [
                    {
                        assignmentName: 'Quiz 1',
                        grade: 86
                    },
                    {
                        assignmentName: 'Project 1',
                        grade: 72
                    },
                    {
                        assignmentName: 'Quiz 2',
                        grade: 70
                    },
                    {
                        assignmentName: 'Test 1',
                        grade: 65
                    }
                ],
                courseGrade: 0,
            }
        ]
    },
    {
        name: 'Penny Frost',
        email: 'pennyfrost@gmail.com',
        password: '',
        courses: [
            {
                courseName: 'Algebra II',
                teacher: 'Sarah Price',
                assignments: [
                    {
                        assignmentName: 'Quiz 1',
                        grade: 74
                    },
                    {
                        assignmentName: 'Project 1',
                        grade: 85
                    },
                    {
                        assignmentName: 'Quiz 2',
                        grade: 92
                    },
                    {
                        assignmentName: 'Test 1',
                        grade: 89
                    }
                ],
                courseGrade: 0,
            }
        ]
    },

]

module.exports.forEach((student) => {
    student.courses.forEach((course) => {
        const grades = course.assignments.map((assignment) => assignment.grade);
        const meanGrade = grades.length > 0 ? (grades.reduce((sum, grade) => sum + grade, 0) / grades.length) : 0;
        course.courseGrade = parseFloat(meanGrade.toFixed(2));
    });
});