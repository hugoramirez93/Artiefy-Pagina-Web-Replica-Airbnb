let heart = document.querySelector('.fa-heart');

function toggleHeart () {
    heart.addEventListener("click", () => {
        heart.classList.toggle('fa-solid');
        heart.classList.toggle('fa-regular');
    });
}

toggleHeart();