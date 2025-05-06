const books = [
  { title: "The Hobbit", image: "kirjatkuvat/hobitti.jpg" },
  { title: "The Picture of Dorian Gray", image: "kirjatkuvat/pictureofdoriangraythe.jpg" },
  { title: "The Stranger", image: "kirjatkuvat/thestranger.jpg" },
  { title: "Thus Spoke Zarathustra", image: "kirjatkuvat/thusspokezarathustra.jpg" },
  { title: "The Unknown Soldier", image: "kirjatkuvat/tuntematonsotilas.jpg" }
];

let currentIndex = 0;

function showBook(index) {
  if (index >= books.length) return;

  const book = books[index];
  const bookTitle = document.getElementById("book-title");
  const bookImage = document.getElementById("book-image");

  bookTitle.textContent = book.title;
  bookImage.src = book.image;
  bookImage.style.display = "block";
  bookImage.classList.remove("animate-left", "animate-right");
}

function animateAndShowNext(direction) {
  const bookImage = document.getElementById("book-image");

  // Poista vanhat animaatiot
  bookImage.classList.remove("animate-left", "animate-right");

  // Pakota reflow (uudelleenlataus jotta animaatio toimii aina)
  void bookImage.offsetWidth;

  // Lisää uusi animaatio
  bookImage.classList.add(direction === "right" ? "animate-right" : "animate-left");

  // Odota animaation loppua ennen seuraavaa kirjaa
  setTimeout(() => {
    currentIndex++;
    showBook(currentIndex);
  }, 500); // vastaava aika kuin animaatiolla
}


document.querySelector(".like-btn").addEventListener("click", () => {
  animateAndShowNext("right");
});

document.querySelector(".dislike-btn").addEventListener("click", () => {
  animateAndShowNext("left");
});

// Alussa näytä ensimmäinen kirja
showBook(currentIndex);
