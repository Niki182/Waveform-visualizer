const waveformContainer = document.getElementById('waveform');
const audioFileInput = document.getElementById('audio-input');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');

const wavesurfer = WaveSurfer.create({
    container: waveformContainer,
});

audioFileInput.addEventListener('change', (event) => {
    const playIcon = playButton.querySelector('i') || playButton;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    const files = event.target.files;
    if(!files || !files[0]) {
        return;
    }

    const fileUrl = URL.createObjectURL(files[0]);
    
    wavesurfer.load(fileUrl);
});

playButton.addEventListener('click', () => {
    const playIcon = playButton.querySelector('i') || playButton;

    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else {
        wavesurfer.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }

});

stopButton.addEventListener('click', () => {
    const playIcon = playButton.querySelector('i') || playButton;
    wavesurfer.stop()
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
});

wavesurfer.on('finish', () => {
    const playIcon = playButton.querySelector('i') || playButton;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
});