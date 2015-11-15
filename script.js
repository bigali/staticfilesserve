var getSomething = function () {
    localStorage.setItem('informations', {
        fullName: document.getElementsByClassName('top-card-header-name')[0].innerHTML,
        title: document.getElementsByClassName('top-card-header-headline')[0].innerHTML,
        imgUrl: document.getElementsByClassName('profile-photo person120')[0].src,
        company: document.getElementsByClassName('summary-cell-text1')[0].innerHTML
    });
};

