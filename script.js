document.addEventListener('DOMContentLoaded', () => {
    const pageAudio = document.getElementById('page-audio');
    const playPromise = pageAudio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Autoplay started');
        }).catch(error => {
            console.log('Autoplay prevented:', error);
            document.body.addEventListener('click', playPageAudio);
        });
    }
});

function playPageAudio() {
    const pageAudio = document.getElementById('page-audio');
    pageAudio.play();
    document.body.removeEventListener('click', playPageAudio);
}

const card = document.getElementById('hover-card');
const hoverAudio = document.getElementById('hover-audio');

card.addEventListener('mouseover', () => {
    hoverAudio.play();
    document.getElementById('page-audio').pause();
    launchPigeons();
});

card.addEventListener('mouseout', () => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
    document.getElementById('page-audio').play();
});

function launchPigeons() {
    for (let i = 0; i < 10; i++) {
        createPigeon();
    }
}

function createPigeon() {
    const pigeon = document.createElement('img');
    pigeon.src = 'pigeon.png'; // Replace with your pigeon image URL
    pigeon.classList.add('pigeon');
    document.body.appendChild(pigeon);

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    pigeon.style.left = `${startX}px`;
    pigeon.style.top = `${startY}px`;

    const endX = startX + (Math.random() * 200 - 100);
    const endY = startY - 300; // Pigeons fly upwards

    pigeon.style.transform = `translate(${endX - startX}px, ${endY - startY}px)`;
    setTimeout(() => {
        pigeon.remove();
    }, 5000); // Pigeons will fly for 5 seconds
}
