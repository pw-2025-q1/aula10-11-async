
// Function to simulate a long-running synchronous task (blocking the UI thread)
function blockUIThread(duration: number) {
    const startTime = performance.now();
    console.log(`Blocking the UI thread for ${duration}ms`);
    while (performance.now() - startTime < duration) {
        // Intentionally block the thread
    }
    console.log(`UI thread has blocked for ${duration}ms`);
}

// Function to simulate an asynchronous task (setTimeout)
function asynchronousTask(delay: number) {
    setTimeout(() => {
        console.log(`Asynchronous task completed after ${delay}ms`);
    }, delay);
}

// Example:
document.getElementById('blockButton')?.addEventListener('click', () => {
    const blockDuration = 6000; // 6 seconds
    blockUIThread(blockDuration);
});

document.getElementById('asyncButton')?.addEventListener('click', () => {
    const asyncDelay = 2000; // 2 seconds
    asynchronousTask(asyncDelay);
});

document.getElementById('normalButton')?.addEventListener('click', () => {
    console.log("Normal button clicked, UI thread responsive");
});
