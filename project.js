const config = document.getElementById('project-config');
const slides = JSON.parse(config.getAttribute('data-slides'));
const isInteractive = config.getAttribute('data-interactive') === 'true';

let currentIndex = 0;
const slideArea = document.getElementById('slideArea');
const cursor = document.getElementById('custom-cursor');
const mediaFrame = document.querySelector('.media-frame');

// Initialize the first slide properly
// function initSlider() {
//     updateMedia();
// }

function initCursor() {
    if (isInteractive) {
        // Show the real mouse
        document.body.style.cursor = 'default';
        slideArea.style.cursor = 'default';
        
        // Hide the custom cursor element entirely
        cursor.style.display = 'none';
    }
}

function updateMedia() {
    const item = slides[currentIndex];
    // We clear the frame and add the new element to reset any stretching
    mediaFrame.innerHTML = ''; 
    
    let element;
    if (item.type === 'image') {
        element = document.createElement('img');
    } else if (item.type === 'video') {
        element = document.createElement('video');
        element.autoplay = true;
        element.loop = true;
        element.muted = true;
        element.playsInline = true;
    } else if (item.type === 'iframe') {
        element = document.createElement('iframe');
        // Allow the iframe to be interactive
        element.style.pointerEvents = "auto";
    }
    
    element.src = item.url;
    element.className = 'slide-item';
    mediaFrame.appendChild(element);
}

// 2. Click Logic
slideArea.addEventListener('click', (e) => {
    // IF interactive, STOP right here. Don't slide.
    if (isInteractive) {
        return; 
    } 
    // Otherwise, proceed with navigation for normal projects
    const windowWidth = window.innerWidth;
    if (e.clientX < windowWidth / 2) {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    } else {
        currentIndex = (currentIndex + 1) % slides.length;
    }
    updateMedia();
});

// 3. Mouse Logic (Keeping your existing logic)
slideArea.addEventListener('mousemove', (e) => {
    if (isInteractive) return;

    cursor.style.opacity = '1';
    cursor.style.transform = `translate(${e.clientX + 20}px, ${e.clientY + 20}px)`;
    cursor.textContent = (e.clientX < window.innerWidth / 2) ? '← PREV' : 'NEXT →';
});

slideArea.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Start the slider
initCursor();
updateMedia();