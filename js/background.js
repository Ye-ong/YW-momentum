const images = ["0.jpeg", "1.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);



// document.body.style.backgroundImage = "url('img_tree.png')";

// let img = document.body.style.backgroundImage;