class ViewHeader {
  #parentElement = document.querySelector(".header");
  #bgVideoEl = document.querySelector(".header-bg-video");

  addHandlerSlowBgVideo() {
    this.#bgVideoEl.playbackRate = 0.5; // Slows down the playback speed to half the normal rate
  }
}

export default new ViewHeader();
