const containerId = 'gallery';

//change these if adding new images
const amountOfImages = 17; 

const natureImages = 5;
//

const container = document.getElementById(containerId);

let htmlContent = '';

for (let i = 1; i <= amountOfImages; i++) {
  htmlContent += `<div class="gallery-item misc" data-category="misc"><img src="https://ik.imagekit.io/64c35uuyg/Portfolio/tr:w-600/${i}.jpg" alt="" ></div>`;
}

for (let i = 1; i <= natureImages; i++) {
  htmlContent += `<div class="gallery-item nature" data-category="nature"><img src="https://ik.imagekit.io/64c35uuyg/Nature/tr:w-600/${i}.jpg" alt="" ></div>`;
}

container.innerHTML = htmlContent;



