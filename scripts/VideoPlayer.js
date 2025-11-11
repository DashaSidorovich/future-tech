const rootSelector = '[data-js-video-player]';

class VideoPlayer {
    selectors = {
        root: rootSelector,
        video: '[data-js-video-player-video]',
        panel: '[data-js-video-player-panel]',
        button: '[data-js-video-player-button]'
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.videoElement = this.rootElement.querySelector(this.selectors.video);
        this.panelElement = this.rootElement.querySelector(this.selectors.panel);
        this.buttonElement = this.rootElement.querySelector(this.selectors.button);
        this.bindEvents()
    }

    onButtonClick = () => {
        console.log('Button clicked - playing video');
        this.videoElement.play()
        this.videoElement.controls = true
        this.panelElement.classList.remove(this.stateClasses.isActive)
        console.log('Panel class after play:', this.panelElement.className);
    }

    onVideoPause = () => {
        console.log('Video paused');
        this.videoElement.controls = false
        this.panelElement.classList.add(this.stateClasses.isActive)
        console.log('Panel class after pause:', this.panelElement.className);
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onButtonClick);
        this.videoElement.addEventListener('pause', this.onVideoPause);

    }
}

class VideoPlayerCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new VideoPlayer(element);
        })
    }
}

export default VideoPlayerCollection;