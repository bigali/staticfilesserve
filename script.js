var getSomething = function (url) {
    localStorage.setItem('info', document.getElementsByClassName('top-card-header-name')[0].innerText+'#'+document.getElementsByClassName('top-card-header-headline')[0].innerText+'#'+document.getElementsByClassName('profile-photo person120')[0].src+'#'+document.getElementsByClassName('summary-cell-text1')[0].innerText+'#'+url);
    console.log('url:',url)
};

