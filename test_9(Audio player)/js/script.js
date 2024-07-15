document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const audioImg = document.getElementById('audioImg');
    const playlist = document.getElementById('playlist');

    const AudioList = [
        { id: 1, name: 'A.R. Rahman - Hosanna', src: '/test_9(Audio player)/Audios/A.R. Rahman - Hosanna Best Video_Ekk Deewana Tha_Amy Jackson_Prateik Babar_Leon_Suzanne(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img1.jpg' },
        { id: 2, name: 'KK - Haan Tu Hain', src: '/test_9(Audio player)/Audios/Haan Tu Hain Full Video - Jannat_Emraan Hashmi_ Sonal Chauhan_KK_Pritam_Sayeed Quadri(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img2.jpg' },
        { id: 3, name: 'Arijit Singh - Haath Rakh De Tu Dil Pe Zara', src: '/test_9(Audio player)/Audios/Haath Rakh De Tu Dil Pe Zara Full Song ( Lyrics )  Arijit Singh _ Mareez-E-Ishq Song Lyrics(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img3.jpg' }
    ];

    let currentTrackIndex = Math.floor(Math.random() * AudioList.length);

    const loadTrack = (index) => {
        const track = AudioList[index];
        audio.src = track.src;
        audioImg.src = track.img;
        audio.play();
    };

    const renderPlaylist = (searchQuery = '') => {
        playlist.innerHTML = '';
        AudioList.forEach((track, index) => {
            if (track.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                const item = document.createElement('div');
                item.className = 'playlist-item';

                const img = document.createElement('img');
                img.src = track.img;
                img.alt = track.name;
                img.className = 'rounded';
                item.appendChild(img);

                const nameSpan = document.createElement('span');
                nameSpan.textContent = track.name;
                item.appendChild(nameSpan);

                item.addEventListener('click', () => {
                    currentTrackIndex = index;
                    loadTrack(currentTrackIndex);
                });

                playlist.appendChild(item);
            }
        });
    };

    renderPlaylist(); // Initial render

    const handleSearchData = (e) => {
        e.preventDefault();
        let value = document.getElementById("searchValue").value;
        renderPlaylist(value);
    };

    document.getElementById("search-form").addEventListener("submit", handleSearchData);
    document.getElementById("searchValue").addEventListener("input", handleSearchData);

    // Audio player controls functionality
    document.getElementById("play").addEventListener("click", () => {
        audio.play();
    });

    document.getElementById("pause").addEventListener("click", () => {
        audio.pause();
    });

    document.getElementById("prev").addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex - 1 + AudioList.length) % AudioList.length;
        loadTrack(currentTrackIndex);
    });

    document.getElementById("next").addEventListener("click", () => {
        currentTrackIndex = (currentTrackIndex + 1) % AudioList.length;
        loadTrack(currentTrackIndex);
    });

    // Other event listeners and functionality as needed
});
