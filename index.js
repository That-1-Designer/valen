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

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const polaroids = document.querySelectorAll('.polaroid');

    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('enlarged')) {
                // Shrink
                this.classList.remove('enlarged');
                overlay.classList.remove('active');
            } else {
                // Remove enlarged class from any other polaroids
                document.querySelectorAll('.polaroid.enlarged').forEach(p => {
                    p.classList.remove('enlarged');
                });
                // Enlarge this one
                this.classList.add('enlarged');
                overlay.classList.add('active');
            }
        });
    });

    // Close on overlay click
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.polaroid.enlarged').forEach(polaroid => {
            polaroid.classList.remove('enlarged');
        });
        overlay.classList.remove('active');
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.polaroid.enlarged').forEach(polaroid => {
                polaroid.classList.remove('enlarged');
            });
            overlay.classList.remove('active');
        }
    });
});