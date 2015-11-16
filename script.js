var getSomething = function (url) {
    localStorage.setItem('info', document.getElementsByClassName('top-card-header-name')[0].innerText+'#'+document.getElementsByClassName('top-card-header-headline')[0].innerText+'#'+document.getElementsByClassName('profile-photo person120')[0].src+'#'+document.getElementsByClassName('summary-cell-text1')[0].innerText+'#'+url);
    var infos={
        name: document.getElementsByClassName('top-card-header-name')[0].innerText,
        title: document.getElementsByClassName('top-card-header-headline')[0].innerText,
        imageUrl : document.getElementsByClassName('profile-photo person120')[0].src,
        company: document.getElementsByClassName('summary-cell-text1')[0].innerText,
        linkedinUrl: url
    };
    localStorage.setItem('info',infos);
    console.log('url:',url);
    console.log('info;',infos);
};

