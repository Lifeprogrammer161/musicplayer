// Get the audio element and control buttons
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPauseButton');
const stopButton = document.getElementById('stopButton');

// Add event listeners
playPauseButton.addEventListener('click', togglePlayPause);
stopButton.addEventListener('click', stopPlayback);

// Function to play or pause the audio
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Function to stop the audio
function stopPlayback() {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'Play';
}
