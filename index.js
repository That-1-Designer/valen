document.addEventListener('DOMContentLoaded', function() {
    const foldedLetter = document.querySelector('.folded-letter');
    const letterContent = document.querySelector('.letter-content');
    const letterOverlay = document.querySelector('.letter-overlay');
    const closeButton = document.querySelector('.close-letter');

    // Show the letter after rose animation (10 seconds)
    setTimeout(() => {
        foldedLetter.classList.add('show');
    }, 10000);

    foldedLetter.addEventListener('click', function() {
        letterContent.classList.add('open');
        letterOverlay.classList.add('open');
    });

    function closeLetter() {
        letterContent.classList.remove('open');
        letterOverlay.classList.remove('open');
    }

    closeButton.addEventListener('click', closeLetter);
    letterOverlay.addEventListener('click', closeLetter);
});