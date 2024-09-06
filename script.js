// Select all question containers
const questions = document.querySelectorAll('.questions');

// Loop through each question
questions.forEach(question => {
    const info = question.querySelector('.info');
    const correctButton = question.querySelector('.correct');
    const incorrectButtons = question.querySelectorAll('.incorrect');

    // Event listener for the correct answer
    correctButton.addEventListener('click', () => {
        console.log("Correct");
        info.style.color = "aqua";
        correctButton.style.color = "green";
    });

    // Event listeners for the incorrect answers
    incorrectButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("Incorrect");
            info.style.color = "black";
            button.style.color = "red";
        });
    });
});
