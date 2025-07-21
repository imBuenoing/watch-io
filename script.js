document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    const errorMessage = document.getElementById('error-message');
    const videoContainer = document.getElementById('video-container');
    const video1Btn = document.getElementById('video1Btn');
    const video2Btn = document.getElementById('video2Btn');

    // --- Masked Video Links ---
    // Store your Google Drive embed links here.
    const videoLinks = {
        video1: 'https://drive.google.com/file/d/13KeYpl9iWjiHV4Bf9h0gFyu8hVmDejJ6/preview',
        video2: 'https://drive.google.com/file/d/18dDXIpgw1Qkq6Co4-nC6w7soGNBJLXaJ/preview'
    };
    // -------------------------

    // Function to load a video into the container
    function loadVideo(videoKey) {
        // Clear the container first
        videoContainer.innerHTML = '';
        
        const videoUrl = videoLinks[videoKey];
        if (videoUrl) {
            const iframe = document.createElement('iframe');
            iframe.src = videoUrl;
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'autoplay; encrypted-media');
            iframe.setAttribute('allowfullscreen', 'true');
            videoContainer.appendChild(iframe);
        }
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;

        if (password === '123qwe') {
            errorMessage.textContent = '';

            const scriptURL = 'https://script.google.com/macros/s/AKfycbyJvNIZfBQ_CYvKnmeXaR8_2weYJP-yCfUgiQUS7uMV5esKrCi5yB9yMpbI0-3g6FzjMA/exec'; // <-- Replace with your Google Apps Script Web App URL
            const formData = new FormData(this);

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message));

            // Show the overlay and load the first video by default
            overlay.style.display = 'flex';
            loadVideo('video1');

        } else {
            errorMessage.textContent = 'Incorrect password.';
        }
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        // Clear the video container when closing to stop playback
        videoContainer.innerHTML = '';
    });

    // Navigation button event listeners
    video1Btn.addEventListener('click', () => loadVideo('video1'));
    video2Btn.addEventListener('click', () => loadVideo('video2'));
});
