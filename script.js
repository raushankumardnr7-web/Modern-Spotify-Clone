// Get Elements

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const title = document.getElementById("songTitle");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const playerCard = document.querySelector(".player-card");


// Songs Data

const songs = [
    {
        name: "Dream Beats",
        artist: "DJ Future",
        file: "songs/song1.mp3",
        cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600"
    },

    {
        name: "Summer Night",
        artist: "Moon Vibes",
        file: "songs/song2.mp3",
        cover:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600"
    },

    {
        name: "Relax Mood",
        artist: "LoFi Studio",
        file: "songs/song3.mp3",
        cover:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600"
    },

    {
        name: "Energy Boost",
        artist: "Power Music",
        file: "songs/song4.mp3",
        cover:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600"
    }
];


// Current Song Index

let currentSong = 0;


// Load Song

function loadSong(song) {

    title.innerText = song.name;
    artist.innerText = song.artist;
    cover.src = song.cover;
    audio.src = song.file;
}


// Play Song

function playSong() {

    audio.play();

    playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    playerCard.classList.add("playing");
}


// Pause Song

function pauseSong() {

    audio.pause();

    playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    playerCard.classList.remove("playing");
}


// Play/Pause Button

playBtn.addEventListener("click", () => {

    if(audio.paused) {
        playSong();
    }
    else {
        pauseSong();
    }

});


// Next Song

function nextSong() {

    currentSong++;

    if(currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);
    playSong();
}


// Previous Song

function prevSong() {

    currentSong--;

    if(currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);
    playSong();
}


// Button Events

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);


// Update Progress Bar

audio.addEventListener("timeupdate", () => {

    const progressValue =
        (audio.currentTime / audio.duration) * 100;

    progress.value = progressValue || 0;

});


// Change Song Time

progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});


// Volume Control

volume.addEventListener("input", () => {

    audio.volume = volume.value / 100;

});


// Auto Next Song

audio.addEventListener("ended", () => {

    nextSong();

});


// Playlist Click

const playlistSongs =
document.querySelectorAll(".song");


playlistSongs.forEach((songElement, index) => {

    songElement.addEventListener("click", () => {

        currentSong = index;

        loadSong(songs[currentSong]);

        playSong();

    });

});


// Initial Load

loadSong(songs[currentSong]);

audio.volume = 0.7;