const Student =  {
    name: '',
    email: '',
    password: '',
    classes: [
        {
            className: '',
            teacher: '',
            assignments: [
                {
                    assignmentName: '',
                    grade: 0
                }
            ],
            classGrade: 0
        }
    ]
};

module.exports = Student;