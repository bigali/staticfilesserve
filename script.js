var getSomething = function (url) {
    console.log(url);
    localStorage.setItem('info', document.getElementsByClassName('top-card-header-name')[0].innerText+'#'+document.getElementsByClassName('top-card-header-headline')[0].innerText+'#'+document.getElementsByClassName('profile-photo person120')[0].src+'#'+document.getElementsByClassName('summary-cell-text1')[0].innerText);
};

