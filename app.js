const data = {
  videos: [
    { name: "Capítulo 1", file: "videos/cap1.mp4" },
    { name: "Capítulo 2", file: "videos/cap2.mp4" }
  ],
  musica: [
    { name: "Canción 1", file: "music/song1.mp3" }
  ]
};

function loadFolder(folder) {
  const list = document.getElementById("fileList");
  list.innerHTML = "";

  data[folder].forEach(item => {
    const div = document.createElement("div");
    div.className = "file";
    div.innerText = item.name;

    div.onclick = () => openFile(item);
    list.appendChild(div);
  });
}

function openFile(item) {
  document.getElementById("title").innerText = item.name;

  const player = document.getElementById("player");
  player.src = item.file;
  player.load();
}
