song_1="";
song_2="";

function preload()
{
    song_1 = loadSound("AI MUSIC_music.mp3");
    song_2 = loadSound("AI MUSIC_music2.mp3");
}

function setup()
{
    canvas = createCanvas(550,550);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,300,300);
}
