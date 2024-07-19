document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let startX, startY;
    let currentX = -45, currentY = -30;
  
    document.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      // Prevent the CSS animation from interfering with manual dragging
      cube.style.animation = 'none';
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        currentX += dx * 0.5;
        currentY -= dy * 0.5; // Invert the Y-axis for better control
        cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
        startX = e.clientX;
        startY = e.clientY;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      // Optionally, you can restart the animation after dragging
      // cube.style.animation = 'rotate 10s infinite linear';
    });
  
    document.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  });
  
