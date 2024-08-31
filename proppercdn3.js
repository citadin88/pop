document.addEventListener('DOMContentLoaded', function() {
    function simulateClick(element) {
        const isRedirectedToFlash8 = window.location.search.includes('redirected=flash8');
        if (element && isRedirectedToFlash8) {
            const rect = element.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: x,
                clientY: y
            });

            element.dispatchEvent(clickEvent);
        }
    }

    function handleMutations(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    const hasTargetClass = node.classList.contains('img-fluid');
                    if (hasTargetClass) {
                        console.log('Detected element with target class:', node);
                        simulateClick(node);
                    }
                });
            }
        }
    }

    const observer = new MutationObserver(handleMutations);
    observer.observe(document.body, { childList: true, subtree: true });

    function checkRedirectURL() {
        const isRedirectedToFlash8 = window.location.search.includes('redirected=flash8');
        if (isRedirectedToFlash8) {
            console.log('Redirected to flash8, performing necessary actions...');
        } else {
            setTimeout(checkRedirectURL, 300); // Check every half second
        }
    }

    checkRedirectURL();

    const isInitialRedirect = window.location.href === 'https://games.dailycryptic-news.com/?369=0';
    const redirectedFlash = window.location.search.includes('redirected=flash');

    if (isInitialRedirect || redirectedFlash) {
        const flashStrings = ['flash1', 'flash2', 'flash3', 'flash4', 'flash5', 'flash6', 'flash7', 'flash8'];

        const currentRedirectIndex = flashStrings.findIndex(str => window.location.search.includes(str));
        const nextRedirectIndex = (currentRedirectIndex + 1) % flashStrings.length;
        const nextFlashString = flashStrings[nextRedirectIndex];

        setTimeout(function() {
            window.location.href = 'https://games.dailycryptic-news.com/?redirected=' + nextFlashString;
        }, 3000);
    }
});
