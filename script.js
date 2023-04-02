console.log("Welcome To Spotify");
let audioeElement = newAudio('1.mp3');

//Initialising Te Variable

let songindex = 0;
let audioElement = newAudio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');


let songs = [{ SongName: "copines", Fileppath: "C:\Users\ASHARMA\OneDrive\Documents\spotify clone\1.mp3", coverPath: "cover/cover4.jpg" },
{ SongName: "copines", Fileppath: "C:\Users\ASHARMA\OneDrive\Documents\spotify clone\1.mp3", coverPath: "cover/cover4.jpg" },
{ SongName: "copines", Fileppath: "C:\Users\ASHARMA\OneDrive\Documents\spotify clone\1.mp3", coverPath: "cover/cover4.jpg" },
{ SongName: "copines", Fileppath: "C:\Users\ASHARMA\OneDrive\Documents\spotify clone\1.mp3", coverPath: "cover/cover4.jpg" },
{ SongName: "copines", Fileppath: "C:\Users\ASHARMA\OneDrive\Documents\spotify clone\1.mp3", coverPath: "cover/cover4.jpg" },
{ SongName: "copines", Fileppath: "C:\Users\ASHARMA\OneDrive\Documents\spotify clone\1.mp3", coverPath: "cover/cover4.jpg" },

]

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0) 
    { audioElement.play();
    }
})

// Listen to Events
myprogressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar
})

