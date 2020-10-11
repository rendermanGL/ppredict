const ppredictDatabase = firebase.database();
const ppredictStudent = firebase.database().ref().child('student');
const ppredictSubjects = firebase.database().ref().child('subjects');

const addNewGraphLiElement = document.getElementById('add_new_graph')
const removeNewGraphLiElement = document.getElementById('remove_new_graph')
const predictGradeButton = document.getElementById('predict_grade')
const unpredictGradeButton = document.getElementById('unpredict_grade')

var newPostKey = ''

ppredictStudent.on('value', snap => {
    console.log(snap.val())
});

ppredictSubjects.on('value', snap => {
    console.log(snap.val)
})

addNewGraphLiElement.onclick = function () {
    newPostKey = ppredictDatabase.ref().child('grades').push().key;
    ppredictDatabase.ref('grades/' + newPostKey).set({
        assessmentId: "dhdsg",
        batchId: "rwdfs",
        feedback: "Great to see an improvement...",
        grade: 8,
        isActive: 1,
        isDeleted: 0,
        number: 6,
        outOff: 10,
        studentId: "unique1",
        subjectId: "awse"
    }, function (error) {
        if (error) {
            console.log('There was an error')
        } else {
            addNewGraphLiElement.classList.remove('btn-primary');
            addNewGraphLiElement.classList.add('btn-success');
            addNewGraphLiElement.disabled = true;
        }
    });
}

removeNewGraphLiElement.onclick = function () {
    ppredictDatabase.ref('grades/' + newPostKey).set({
        0: null
    })
}

predictGradeButton.onclick = function () {
    ppredictDatabase.ref('isPredicted').set(1)
}

unpredictGradeButton.onclick = function () {
    ppredictDatabase.ref('isPredicted').set(0)
}