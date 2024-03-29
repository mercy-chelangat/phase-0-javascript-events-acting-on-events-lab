// Your code here
function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let container = document.getElementById('game-container');
    let dodgerLeftEdge = parseInt(dodger.style.left);
    
    if (dodgerLeftEdge > 0) {
        dodger.style.left = `${dodgerLeftEdge - 1}px`;
    }
}
function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let container = document.getElementById('game-container');
    
    // Check if dodger and container are found
    if (!dodger || !container) {
        console.error("Dodger or container not found.");
        return;
    }

    let dodgerRightEdge = parseInt(dodger.style.left || 0) + dodger.offsetWidth;
    let containerRightEdge = container.offsetWidth;

    if (dodgerRightEdge < containerRightEdge) {
        dodger.style.left = `${parseInt(dodger.style.left || 0) + 1}px`;
    }
}
