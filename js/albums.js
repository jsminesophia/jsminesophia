const album1 = document.getElementById("js-album-1");
const album1Title = document.getElementById("album-1-title");
const album1TitleContainer = document.getElementById("album-1-title-container");
const album2 = document.getElementById("js-album-2");
const album2Title = document.getElementById("album-2-title");
const album2TitleContainer = document.getElementById("album-2-title-container");
const songTitle1 = document.createElement("span");
const songTitle2 = document.createElement("span");
const lyricsContainer1 = document.getElementById("lyrics-container-1");
const lyricsContainer2 = document.getElementById("lyrics-container-2");

const backButton1 = document.getElementById("back-button-stage-1");
const backButton2 = document.getElementById("back-button-stage-2");
const backButton3 = document.getElementById("back-button-stage-3");
const backButton4 = document.getElementById("back-button-stage-4");

const card1 = document.getElementById("card-1");
const cardFront1 = document.getElementById("card-front-1");
const cardBack1 = document.getElementById("card-back-1");
const card2 = document.getElementById("card-2");
const cardFront2 = document.getElementById("card-front-2");
const cardBack2 = document.getElementById("card-back-2");

cardFront1.addEventListener("click", function () {
  card1.classList.toggle("flipped");
  function lazyFlip() {
    cardBack1.classList.toggle("off");;
  }
  setTimeout(lazyFlip, 200);
})

cardFront2.addEventListener("click", function () {
  card2.classList.toggle("flipped");
  function lazyFlip() {
    cardBack2.classList.toggle("off");;
  }
  setTimeout(lazyFlip, 200);
})

function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i=0; i<children.length; i++) {
       if (children[i]==node) return num;
       if (children[i].nodeType==1) num++;
  }
  return -1;
}  
album1.addEventListener("click", (e) => {
  backButton1.classList.add("off");
  backButton2.classList.remove("off");


  if (e.target && e.target.matches("li")) {
    album1Title.classList.add("off");
    album1.classList.add("off");

    songTitle1.textContent = e.target.innerHTML;
    album1TitleContainer.appendChild(songTitle1);

    const songIndex = indexInParent(e.target);
    let lyrics = lyricsContainer1.children[songIndex];
    lyrics.classList.add("active");

      backButton2.addEventListener("click", () => {
        songTitle1.remove();
        album1Title.classList.remove("off");
        album1.classList.remove("off");
        lyrics.classList.remove("active"); 
        backButton1.classList.remove("off");
        backButton2.classList.add("off");   
      });
  }
});

album2.addEventListener("click", (e) => {
  backButton3.classList.add("off");
  backButton4.classList.remove("off");


  if (e.target && e.target.matches("li")) {
    album2Title.classList.add("off");
    album2.classList.add("off");

    songTitle2.textContent = e.target.innerHTML;
    album2TitleContainer.appendChild(songTitle2);

    const songIndex = indexInParent(e.target);
    let lyrics = lyricsContainer2.children[songIndex];
    lyrics.classList.add("active");

      backButton4.addEventListener("click", () => {
        songTitle2.remove();
        album2Title.classList.remove("off");
        album2.classList.remove("off");
        lyrics.classList.remove("active"); 
        backButton3.classList.remove("off");
        backButton4.classList.add("off");   
      });
  }
});

backButton1.addEventListener("click", function () {
  card1.classList.toggle("flipped");
  function lazyFlip() {
    cardBack1.classList.toggle("off");;
  }
  setTimeout(lazyFlip, 200);
})

backButton3.addEventListener("click", function () {
  card2.classList.toggle("flipped");
  function lazyFlip() {
    cardBack2.classList.toggle("off");;
  }
  setTimeout(lazyFlip, 200);

})