const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

nextBtn.addEventListener('click', () => {
    // Ensure the index does not exceed 5 (since there are 6 elements)
    index = (index < 5) ? index + 1 : 5;
    listInfo.style.transform = `translateY(${index * -16.67}%)`; // 100% / 6 = 16.67%
    listImg.style.transform = `translateY(${index * -100}%)`; // 100% / 6 = 16.67%

});

prevBtn.addEventListener('click', () => {
    // Ensure the index does not go below 0
    index = (index > 0) ? index - 1 : 0;
    listInfo.style.transform = `translateY(${index * -16.67}%)`; // 100% / 6 = 16.67%
    listImg.style.transform = `translateY(${index * -100}%)`; // 100% / 6 = 16.67%
});
