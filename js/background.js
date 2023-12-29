const images = ["0.jpg", "1.jpg", "2.jpg"];
const randomImage = images[Math.trunc(Math.random() * images.length)];

const bgImage = `url(background/${randomImage})`;
document.body.style.backgroundImage = bgImage;
