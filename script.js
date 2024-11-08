const aquarium = document.querySelector('.aquarium');
const fish1 = document.querySelector('.fish1');
const fish2 = document.querySelector('.fish2');
const fish3 = document.querySelector('.fish3');
const fish4 = document.querySelector('.fish4');
const fish5 = document.querySelector('.fish5');
const fish6 = document.querySelector('.fish6');

const backgrounds = [
    './Hinh anh/pexels-jeremy-bishop-1260133-2397651.jpg',
    './Hinh anh/pixel-art-underwater-world_611870-10071.png',
    './Hinh anh/pixel-art-deep-sea-dive_611870-10006.png'
];
let currentBackground = 0;


document.getElementById('changeBackgroundButton').addEventListener('click', () => {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    aquarium.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
});

function createBubble(fish) {
    const bubble = document.createElement('div');
    const size = Math.random() * 20 + 10;
    bubble.classList.add('bubble');
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${fish.offsetLeft + fish.offsetWidth / 2}px`;
    bubble.style.top = `${fish.offsetTop + fish.offsetHeight - 20}px`;
    aquarium.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 4000);
}
function createRandomBubble() {
    const bubble = document.createElement('div');
    const size = Math.random() * 30 + 10;
    bubble.classList.add('bubble', 'random-bubble');
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.bottom = '0';
    aquarium.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}
function createMultipleRandomBubbles() {
    for (let i = 0; i < 5; i++) {
        createRandomBubble();
    }
}

setInterval(createMultipleRandomBubbles, 800);
setInterval(() => createBubble(fish1), 300);
setInterval(() => createBubble(fish2), 400);
setInterval(() => createBubble(fish3), 500);
setInterval(() => createBubble(fish4), 600);
