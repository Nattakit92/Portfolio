document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const images = slidesContainer.querySelectorAll('img');
    const numImages = images.length;
    const animationName = 'slide';
    const animationDuration = numImages * 5; // 5 seconds per image
  
    // Set the width of the slides container
    slidesContainer.style.width = `${numImages * 100}%`;
  
    // Create keyframes for the slide animation
    let keyframes = `@keyframes ${animationName} {`;
    for (let i = 0; i < numImages; i++) {
      const percentage = (i / numImages) * 100;
      const nextPercentage = ((i + 1) / numImages) * 100;
      keyframes += `${percentage}% { transform: translateX(-${i * 100}%); }
                    ${nextPercentage}% { transform: translateX(-${i * 100}%); }`;
    }
    keyframes += `}`;
  
    // Inject the keyframes into a style element
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);
  
    // Apply the animation to the slides container
    slidesContainer.style.animation = `${animationName} ${animationDuration}s infinite linear`;
  });
  