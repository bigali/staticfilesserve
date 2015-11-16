var putInfo = function (url) {
    //localStorage.setItem('info', document.getElementsByClassName('top-card-header-name')[0].innerText+'#'+document.getElementsByClassName('top-card-header-headline')[0].innerText+'#'+document.getElementsByClassName('profile-photo person120')[0].src+'#'+document.getElementsByClassName('summary-cell-text1')[0].innerText);
    localStorage.setItem('name', document.getElementsByClassName('top-card-header-name')[0].innerText);
    localStorage.setItem('title', document.getElementsByClassName('top-card-header-headline')[0].innerText);
    localStorage.setItem('imgUrl', document.getElementsByClassName('profile-photo person120')[0].src);
    localStorage.setItem('company', document.getElementsByClassName('summary-cell-text1')[0].innerText);
    localStorage.setItem('linkedInUrl', document.getElementsByClassName('summary-cell-text1')[0].innerText);
};

var getInfo = function () {
    return {
        name: localStorage.getItem('name'),
        title: localStorage.getItem('title'),
        imgUrl: localStorage.getItem('imgUrl'),
        company: localStorage.getItem('company'),
        linkedInUrl: localStorage.getItem('linkedInUrl')
    }
}

