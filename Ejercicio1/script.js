let heart = document.querySelectorAll('.fa-heart');


heart.forEach(heartIcon => {
    heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle('fa-solid');
        heartIcon.classList.toggle('fa-regular');
    });
});
