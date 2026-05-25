// Drag functionality for windows
let draggedWindow = null;
let offsetX = 0;
let offsetY = 0;

// Get all windows
const windows = document.querySelectorAll('.window');

// Add drag listeners to each window
windows.forEach(windowEl => {
  const header = windowEl.querySelector('.window-header');
  
  // When you press down on the header
  header.addEventListener('mousedown', (e) => {
    draggedWindow = windowEl;
    const rect = windowEl.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    
    // Bring window to front
    windowEl.style.zIndex = 1000;
    header.style.cursor = 'grabbing';
  });
});

// When you move the mouse
document.addEventListener('mousemove', (e) => {
  if (draggedWindow) {
    draggedWindow.style.left = (e.clientX - offsetX) + 'px';
    draggedWindow.style.top = (e.clientY - offsetY) + 'px';
  }
});

// When you release the mouse
document.addEventListener('mouseup', () => {
  if (draggedWindow) {
    draggedWindow.style.zIndex = 'auto';
    const header = draggedWindow.querySelector('.window-header');
    header.style.cursor = 'grab';
  }
  draggedWindow = null;
});