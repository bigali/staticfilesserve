var putInfo = function (url) {
    localStorage.setItem('info', {
        name: document.getElementsByClassName('top-card-header-name')[0].innerText,
        title: document.getElementsByClassName('top-card-header-headline')[0].innerText,
        imgUrl: document.getElementsByClassName('profile-photo person120')[0].src,
        company: document.getElementsByClassName('summary-cell-text1')[0].innerText,
        linkedInUrl: url
    })
};

