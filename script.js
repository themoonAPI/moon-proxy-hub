// Moon•API Proxy Hub Script

function proxySite() {
    let input = document.getElementById('proxy-url');
    let url = input.value.trim();
    if (!url) return;

    // Add http if missing
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    let frame = document.getElementById('proxy-frame');
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    input.value = '';
}

function searchSite() {
    let input = document.getElementById('search-url');
    let query = input.value.trim();
    if (!query) return;

    // If it's a URL, proxy it; else Google search
    if (query.includes('.') && !query.includes(' ')) {
        let url = query;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        document.getElementById('proxy-frame').src = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }

    input.value = '';
}

// Enter key support
document.getElementById('proxy-url').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') proxySite();
});

document.getElementById('search-url').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') searchSite();
});
