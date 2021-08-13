const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'none',
    volume: 0.7,
    lrcType: 3,
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
          cover: 'https://i.loli.net/2021/08/13/SOaNv81fiFRlwkp.jpg',
          lrc: '/songs/Unstoppable.lrc'
        }
    ]
});