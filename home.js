// Top Nav
document.addEventListener('DOMContentLoaded', () => {
    const viewToggle = document.getElementById('view-toggle');
    const wrapper = document.getElementById('content-wrapper');

    // Check if elements exist to avoid errors in the console
    if (viewToggle && wrapper) {
        viewToggle.addEventListener('click', () => {
            console.log("Button clicked!"); // This helps you debug in the browser console

            if (wrapper.classList.contains('grid-view')) {
                wrapper.classList.remove('grid-view');
                wrapper.classList.add('index-view');
                viewToggle.innerText = 'Grid';
            } else {
                wrapper.classList.remove('index-view');
                wrapper.classList.add('grid-view');
                viewToggle.innerText = 'Index';
                previewImage.classList.remove('visible');
            }
        });
    } else {
        console.error("Could not find the toggle button or content wrapper.");
    }

    // Auto-hover for mobile view (responsive)
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '-25% 0% -55% 0%', // triggers range
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        // Only run this "auto-hover" logic on mobile screens
        if (window.innerWidth <= 980) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    document.querySelectorAll('.project-item').forEach(item => {
                        item.classList.remove('is-active');
                    });

                    // Add class to trigger the 28px font size
                    entry.target.classList.add('is-active');
                    
                    // Trigger existing hover logic
                    const color = item.getAttribute('data-color');
                    const imgSrc = item.getAttribute('data-image');
                    const theme = item.getAttribute('data-theme');
                    
                    document.body.style.backgroundColor = color;

                    // Toggle the text color theme
                    if (theme === 'light') {
                    body.classList.add('light-ui');
                    } else {
                    body.classList.remove('light-ui');
                    }
                    
                    // Show preview image (only if in index view)
                    if (document.getElementById('content-wrapper').classList.contains('index-view')) {
                        const previewImage = document.getElementById('project-preview-image');
                        previewImage.src = imgSrc;
                        previewImage.classList.add('visible');
                    }else{
                        previewImage.classList.remove('visible');
                    }

                }else {
                    // Remove class when it leaves the center
                    entry.target.classList.remove('is-active');
                }
            });
        }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Tell the observer to watch every project item
    document.querySelectorAll('.project-item').forEach(item => {
        observer.observe(item);
    });
});

// Auto-scrolling banner
const track = document.getElementById('track');
const originalContent = document.getElementById('original-content');

const clone = originalContent.cloneNode(true);
track.appendChild(clone);

let currentX = 0; 
let lastSnappedItem = null;
const speed = 2;

function animate() {
  currentX -= speed;

  // Reset loop when the first set of items has fully passed
  if (Math.abs(currentX) >= originalContent.offsetWidth) {
    currentX = 0;
  }

  track.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animate);
}

// Start the animation
animate();

// function animate() {
// if (!isPaused) {
//     currentX -= speed;
//     if (Math.abs(currentX) >= originalContent.offsetWidth) {
//     currentX = 0;
//     }
//     track.style.transform = `translateX(${currentX}px)`;

//     const allCategories = document.querySelectorAll('.category');
//     const screenCenter = window.innerWidth / 2;

//     allCategories.forEach(cat => {
//     const rect = cat.getBoundingClientRect();
//     const catCenter = rect.left + (rect.width / 2);

//     if (Math.abs(catCenter - screenCenter) < (speed / 2 + 1) && lastSnappedItem !== cat) {
//         triggerPause(cat);
//     }
//     });
// }
// requestAnimationFrame(animate);
// }

// function triggerPause(element) {
// isPaused = true;
// lastSnappedItem = element;

// // 1. Capture width before change
// const widthBefore = element.offsetWidth;

// // 2. Magnify
// element.classList.add('magnified');

// // 3. Capture width after change
// const widthAfter = element.offsetWidth;

// // 4. Calculate how much the center shifted to the right
// const shift = (widthAfter - widthBefore) / 2;

// // 5. Instantly adjust the track position to the left by that shift 
// // to keep the word's center perfectly still on the screen center
// currentX -= shift;
// track.style.transform = `translateX(${currentX}px)`;

// setTimeout(() => {
//     // When un-magnifying, shift the track back to the right
//     element.classList.remove('magnified');
//     currentX += shift;
//     track.style.transform = `translateX(${currentX}px)`;
    
//     isPaused = false;
//     setTimeout(() => { lastSnappedItem = null; }, 500); 
// }, 1000);
// }

// animate();

// Project list (Main body)
const wrapper = document.getElementById('content-wrapper');
const projectItems = document.querySelectorAll('.project-item');
const body = document.body;
const previewImage = document.getElementById('project-preview-image');
const defaultColor = "#000000"; // Your starting background color

projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const color = item.getAttribute('data-color');
        const theme = item.getAttribute('data-theme'); // Check the theme
        //const imgSrc = item.getAttribute('data-image');

        // 1. Change Background Color
        body.style.backgroundColor = color;

        // Toggle the text color theme
        if (theme === 'light') {
        body.classList.add('light-ui');
        } else {
        body.classList.remove('light-ui');
        }

        // Only show the index-view floating preview if the wrapper is in index-view mode
        if (wrapper.classList.contains('index-view')) {
            const imgSrc = item.getAttribute('data-image');
            if (imgSrc) {
                previewImage.src = imgSrc;
                previewImage.classList.add('visible');
            }
        }
    });

    item.addEventListener('mouseleave', () => {
        // Reset Background
        body.style.backgroundColor = defaultColor;
        // Always reset to dark theme
        body.classList.remove('light-ui'); 

        // Hide Image
        previewImage.classList.remove('visible');
        // Optional: Clear src after fade out to prevent "flicker" on next hover
        setTimeout(() => {
            if(!previewImage.classList.contains('visible')) previewImage.src = "";
        }, 300);
    });
});