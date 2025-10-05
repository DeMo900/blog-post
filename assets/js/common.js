// Media query to detect small screens
const isSmallScreen = window.matchMedia('(max-width: 639px)');

function reloadPage() {
    location.reload(true);
}

function fade(e) {            
    if (e.classList.contains('opacity-100') || !e.classList.contains('opacity-0')) {
        e.classList.remove('opacity-100');
        e.classList.add('opacity-0');
    } else {
        e.classList.remove('opacity-0');
        e.classList.add('opacity-100');
    }
}

function toggleHidden(e, afterFade = false, afterFadeTimer = 200) {
    if (afterFade) {
        setTimeout(() => {
            if (e.classList.contains('hidden')) {
                e.classList.remove('hidden');
            } else {
                e.classList.add('hidden');
            }
        }, afterFadeTimer);
    } else {
        if (e.classList.contains('hidden')) {
            e.classList.remove('hidden');
        } else {
            e.classList.add('hidden');
        }
    }
}

let popups = document.getElementById('popups');

let popupTemp = `
<div id="popupModalContainer" class="z-10">
    <div id="popupModal">
        <h2 id="popupModalTitle">Type</h2>
        <p id="popupModalDescription">Description...</p>
        <button id="popupModalClose" onclick="closePopup()">Close</button>
    </div>
</div>
`

function closePopup() {
    popups.innerHTML = '';
    toggleHidden(popups);
}

function showPopup(type, details) {
    popups.innerHTML = popupTemp;
    let popupModal = document.getElementById('popupModal');
    let popupModalTitle = document.getElementById('popupModalTitle');
    let popupModalDescription = document.getElementById('popupModalDescription');
    
    popupModalTitle.textContent = type.toUpperCase();
    popupModalDescription.textContent = details;
    
    toggleHidden(popups);
    
    switch (type) {
        case 'info':
            popupModal.classList.add('info');
            break;
        case 'warning':
            popupModal.classList.add('warning');
            break;
        case 'error':
            popupModal.classList.add('danger');
            break;
        default:
            closePopup();
    }
}
