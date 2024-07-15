document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('audio');
    const audioImg = document.getElementById('audioImg');
    const playlist = document.getElementById('playlist');
    const artistFilter = document.getElementById('artistFilter');
    const jumbotron = document.getElementById('bg');

    const AudioList = [
        { id: 1, name: 'Hosanna', artist: 'A.R. Rahman', src: '/test_9(Audio player)/Audios/A.R. Rahman - Hosanna Best Video_Ekk Deewana Tha_Amy Jackson_Prateik Babar_Leon_Suzanne(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img1.jpg' },
        { id: 2, name: 'Haan Tu Hain', artist: 'KK', src: '/test_9(Audio player)/Audios/Haan Tu Hain Full Video - Jannat_Emraan Hashmi_ Sonal Chauhan_KK_Pritam_Sayeed Quadri(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img2.jpg' },
        { id: 3, name: 'Haath Rakh De Tu Dil Pe Zara', artist: 'Arijit Singh', src: '/test_9(Audio player)/Audios/Haath Rakh De Tu Dil Pe Zara Full Song ( Lyrics )  Arijit Singh _ Mareez-E-Ishq Song Lyrics(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img3.jpg' },
        { id: 4, name: 'KK Mashup', artist: 'KK', src: '/test_9(Audio player)/Audios/KK Mashup (Musical Tribute) - Chillout Mix _ AB Ambients _ Best of kk songs _ Emraan Hashmi(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img4.jpg' },
        { id: 5, name: 'Mere Bina', artist: 'Nikhil Dsouzas', src: '/test_9(Audio player)/Audios/Mere Bina(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img5.jpg' },
        { id: 6, name: 'Rockstar_ Tum Ho', artist: 'Mohit Chauhan', src: '/test_9(Audio player)/Audios/Rockstar_ Tum Ho Lyrical Video Song _ Ranbir Kapoor _ Nargis Fakhri _ T-Series(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img6.jpg' },
        { id: 7, name: 'Tera Hone Laga Hoon', artist: 'Atif Aslam', src: '/test_9(Audio player)/Audios/Tera Hone Laga Hoon Lyrical - Ajab Prem Ki Ghazab Kahani _ Atif Aslam _ Ranbir_ Katrina K _ Pritam(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img7.jpg' },
        { id: 8, name: 'Tere Hawaale', artist: 'Arijit Singh', src: '/test_9(Audio player)/Audios/Tere Hawaale_ Laal Singh Chaddha _ Aamir_ Kareena _ Arijit_ Shilpa _ Pritam_ Amitabh_ Advait(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img8.jpg' },
        { id: 9, name: 'Tum Se Hi', artist: 'Mohit Chauhan', src: '/test_9(Audio player)/Audios/Tum Se Hi Lyrcial _ Jab We Met _ Kareena Kapoor_ Shahid Kapoor _ Mohit Chauhan _ Pritam(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img9.jpg' },
        { id: 10, name: 'Sang Hoon Tere', artist: 'Nikhil Dsouzas', src: '/test_9(Audio player)/Audios/Sang Hoon Tere Audio Song - Jannat 2_Emraan Hashmi_ Esha_Nikhil D_Souza_Sayeed Quadri(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img10.jpg' },
        { id: 11, name: 'Tera Hone Laga Hoon', artist: 'Atif Aslam', src: '/test_9(Audio player)/Audios/Tu Jaane Na Lyrical - Ajab Prem Ki Ghazab Kahani _ Atif Aslam _ Ranbir Kapoor_ Katrina Kaif _ Pritam(MP3_160K).mp3', img: '/test_9(Audio player)/imges/img11.jpg' },

    ];

    let currentTrackIndex = Math.floor(Math.random() * AudioList.length);

    const loadTrack = (index) => {
        const track = AudioList[index];
        audio.src = track.src;
        audioImg.src = track.img;
        audio.play();

        // Update background based on artist
        jumbotron.classList.remove('bg-ar-rahman', 'bg-kk', 'bg-arijit-singh');
        switch (track.artist) {
            case 'A.R. Rahman':
                jumbotron.classList.add('bg-ar-rahman');
                break;
            case 'KK':
                jumbotron.classList.add('bg-kk');
                break;
            case 'Arijit Singh':
                jumbotron.classList.add('bg-arijit-singh');
                break;
            case 'Mohit Chauhan':
                jumbotron.classList.add('bg-kk');
                break;
            case 'Atif Aslam':
                jumbotron.classList.add('bg-ar-rahman');
                break;
            case 'Nikhil Dsouzas':
                jumbotron.classList.add('bg-arijit-singh');
                break;
        }
    };

    const renderPlaylist = (searchQuery = '', artistQuery = '') => {
        playlist.innerHTML = '';
        AudioList.forEach((track, index) => {
            if (
                track.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (artistQuery === '' || track.artist === artistQuery)
            ) {
                const item = document.createElement('div');
                item.className = 'list-group-item list-group-item-action playlist-item';

                const img = document.createElement('img');
                img.src = track.img;
                img.alt = track.name;
                img.className = 'rounded float-left mr-3';
                item.appendChild(img);

                const nameSpan = document.createElement('span');
                nameSpan.textContent = `${track.name} - ${track.artist}`;
                item.appendChild(nameSpan);

                item.addEventListener('click', () => {
                    currentTrackIndex = index;
                    loadTrack(currentTrackIndex);
                });

                playlist.appendChild(item);
            }
        });
    };

    renderPlaylist();

    const handleSearchData = (e) => {
        e.preventDefault();
        let value = document.getElementById("searchValue").value;
        let artist = artistFilter.value;
        renderPlaylist(value, artist);
    };

    document.getElementById("search-form").addEventListener("submit", handleSearchData);
    document.getElementById("searchValue").addEventListener("input", handleSearchData);
    artistFilter.addEventListener("change", handleSearchData);

    loadTrack(currentTrackIndex);

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

    audio.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % AudioList.length;
        loadTrack(currentTrackIndex);
    });

    // Ensure audio auto-plays on page load
    loadTrack(currentTrackIndex);
});
