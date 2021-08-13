!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
          name: 'Aruarian Dance',
          artist: 'Nujabes',
          url: '/songs/song1.mp3',
          cover: '/img/Nujabes.png'
        },
        {
          name: 'Unstoppable',
          artist: 'FKJ',
          url: '/songs/song2.mp3',
          cover: '/img/Unstoppable.jpg'
          lrc: '/songs/Unstoppable.lrc'
        }
      ]
    });
  }
})();