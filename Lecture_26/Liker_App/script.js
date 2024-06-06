document.addEventListener('click', () => {
    let likeCount = localStorage.getItem("likeCount") || 0;
    let commentCount = localStorage.getItem("commentCount") || 0;
    let shareCount = localStorage.getItem("shareCount") || 0;
    let Following = localStorage.getItem("Following") === 'true';
    let MsgIconcount = localStorage.getItem("MsgIconcount") || 0;

    const LikeIcon = document.getElementById('likeCount');
    const CmtIcon = document.getElementById('commentCount');
    const ShareIcon = document.getElementById('shareCount');
    const followBtn = document.getElementById('followBtn');
    const MsgIcon = document.getElementById('MsgIcon');

    LikeIcon.innerHTML = likeCount;
    CmtIcon.innerHTML = commentCount;
    ShareIcon.innerHTML = shareCount;
    followBtn.textContent = Following ? 'Following' : 'Follow';
    MsgIcon.innerHTML = MsgIconcount;

    const likerApp = (count) => {
        if (count === 'like') {
            likeCount++;
            LikeIcon.innerHTML = likeCount;
            localStorage.setItem("likeCount", likeCount);
            showAlert("You liked this post.");
        } else if (count === 'comment') {
            commentCount++;
            CmtIcon.innerHTML = commentCount;
            localStorage.setItem("commentCount", commentCount);
            showAlert("You commented on this post.");
        } else if (count === 'share') {
            shareCount++;
            ShareIcon.innerHTML = shareCount;
            localStorage.setItem("shareCount", shareCount);
            showAlert("You shared this post.");
        } else if (count === 'follow') {
            Following = !Following;
            followBtn.textContent = Following ? 'Following' : 'Follow';
            localStorage.setItem("Following", Following);
            showAlert(Following ? "You are now following this user." : "You unfollowed this user.");
        } else if (count === 'msg') {
            MsgIconcount++;
            MsgIcon.innerHTML = MsgIconcount;
            localStorage.setItem("MsgIconcount", MsgIconcount);
            showAlert("You opened the message box.");
        }
    };

    const showAlert = (message) => {
        alert(message);
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        }, 2000);
    };

    document.getElementById('likeBtn').addEventListener('click', () => likerApp('like'));
    document.getElementById('commentBtn').addEventListener('click', () => likerApp('comment'));
    document.getElementById('shareBtn').addEventListener('click', () => likerApp('share'));
    document.getElementById('MsgIcon').addEventListener('click', () => likerApp('msg'));
    followBtn.addEventListener('click', () => likerApp('follow'));
});
