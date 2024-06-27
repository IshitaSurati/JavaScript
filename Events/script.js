// Event Delegation
document.getElementById('parent').addEventListener('click',(event)=>  {
    if (event.target.tagName === 'LI') {
        alert(event.target.textContent);
    }
});

// Event Bubbling
document.getElementById('inner').addEventListener('click', () => {
    alert('Inner button clicked');
});

document.getElementById('outer').addEventListener('click', () => {
    alert('Outer div clicked');
});

// Event Capturing
document.getElementById('out').addEventListener('click', () => {
    alert('Outer div clicked');
}, true); // Capture phase

document.getElementById('in').addEventListener('click', () => {
    alert('Inner button clicked');
});
