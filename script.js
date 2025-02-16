const songs = [
    { title: "Techonolgy bg 1", src: "audio/technology-278512.mp3" },
    { title: "background music", src: "audio/technology-271272.mp3" },
    { title: "tech bg music", src: "audio/introduction-to-technology-electronica-281086.mp3" }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");

function loadSong(index) {
    songTitle.innerText = songs[index].title;
    audioPlayer.src = songs[index].src;
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
}

// Load the first song
loadSong(currentSongIndex);
