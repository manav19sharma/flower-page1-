document.addEventListener("DOMContentLoaded", function() {
    // Function to show text line by line
    function showText() {
        const textElement = document.getElementById('text');
        const textLines = [
            "Here is the first line of new text!",
            "Here's the second line with more details.",
            "This line gives further information.",
            "Finally, this is the last line of the message."
        ];

        let currentLine = 0;
        textElement.innerHTML = ''; // Clear the text container

        function displayLine() {
            if (currentLine < textLines.length) {
                textElement.innerHTML += textLines[currentLine] + '<br>';
                currentLine++;
                setTimeout(displayLine, 1000); // Adjust delay as needed
            }
        }

        displayLine();
    }

    // Delay showing text to give time to admire the flowers
    setTimeout(function() {
        document.getElementById('flowers').style.display = 'none';
        document.getElementById('text').style.display = 'block';
        showText();
    }, 5000); // 5 seconds delay
});
