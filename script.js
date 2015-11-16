var getSomething = function (url) {
    localStorage.setItem('info', document.getElementsByClassName('top-card-header-name')[0].innerText+'#'+document.getElementsByClassName('top-card-header-headline')[0].innerText+'#'+document.getElementsByClassName('profile-photo person120')[0].src+'#'+document.getElementsByClassName('summary-cell-text1')[0].innerText+'#'+url);
    var infos=[
        document.getElementsByClassName('top-card-header-name')[0].innerText,
        document.getElementsByClassName('top-card-header-headline')[0].innerText,
        document.getElementsByClassName('profile-photo person120')[0].src,
        document.getElementsByClassName('summary-cell-text1')[0].innerText,
        url
    ];
    localStorage.setItem('infos',infos);
    console.log('url:',url);
    console.log('info;',infos);
};

