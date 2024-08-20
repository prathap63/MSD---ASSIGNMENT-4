document.addEventListener('DOMContentLoaded', function() {
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');
    const generateButton = document.getElementById('generateButton');
    const resultParagraph = document.getElementById('result');

    generateButton.addEventListener('click', function() {
        // Get the values from the input fields
        const minValue = parseInt(minValueInput.value, 10);
        const maxValue = parseInt(maxValueInput.value, 10);

        // Validate the input
        if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
            resultParagraph.textContent = 'Please enter valid minimum and maximum values where minimum is less than or equal to maximum.';
            resultParagraph.style.color = 'red';
            return;
        }

        // Generate a random number between minValue and maxValue
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        // Display the result
        resultParagraph.textContent = `Random Number: ${randomNumber}`;
        resultParagraph.style.color = '#007bff';
    });
});
