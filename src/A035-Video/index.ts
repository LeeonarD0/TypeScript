interface video {
  stopButton: HTMLButtonElement;
  playButton: HTMLButtonElement;
  videoPlayer: HTMLVideoElement;
}

interface videoPlayerProtocols {
  playerToggle(): void;
  stop(): void;
  iniciarEvent(): void;
}

export default class Videoplayer implements videoPlayerProtocols {
  private stopButton: HTMLButtonElement;
  private playButton: HTMLButtonElement;
  private videoPlayer: HTMLVideoElement;

  constructor(VideoPlayerElement: video) {
    this.videoPlayer = VideoPlayerElement.videoPlayer;
    this.playButton = VideoPlayerElement.playButton;
    this.stopButton = VideoPlayerElement.stopButton;
  }
  iniciarEvent(): void {
    this.playButton.addEventListener('click', () => {
      this.playerToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }

  playerToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerHTML = 'Play';
  }
}

const videoPlayer = new Videoplayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

videoPlayer.iniciarEvent();
