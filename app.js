const containerId = 'gallery';

const amountOfImages = 17; //change this if adding new images

const container = document.getElementById(containerId);

let htmlContent = '';

for (let i = 1; i <= amountOfImages; i++) {
  htmlContent += `<div class="gallery-item"><img src="https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/${i}.jpg" alt=""></div>`;
}

container.innerHTML = htmlContent;