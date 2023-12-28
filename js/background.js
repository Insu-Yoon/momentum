const images = ["0.jpg", "1.jpg", "2.jpg"];
const randomImage = images[Math.trunc(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `background/${randomImage}`;

document.body.appendChild(bgImage);


// bgImage = `url(background/${randomImage})`;
// document.body.style.backgroundImage = bgImage;