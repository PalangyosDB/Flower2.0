onload = () =>{
    document.body.classList.remove("container");
};
window.onload = () => {
  // Remove container class if needed
  document.body.classList.remove("container");

  const music = document.getElementById("bg-music");

  // Play music on first click/tap anywhere
  function startMusic() {
    music.play().then(() => {
      console.log("Music is playing!");
    }).catch(err => {
      console.log("Playback failed:", err);
    });

    // Remove event listeners so it only triggers once
    window.removeEventListener("click", startMusic);
    window.removeEventListener("touchstart", startMusic);
  }

  // Listen for user interaction
  window.addEventListener("click", startMusic);
  window.addEventListener("touchstart", startMusic);
};
