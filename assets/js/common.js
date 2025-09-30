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