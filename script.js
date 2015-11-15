var getSomething = function () {
    localStorage.setItem('fullname', document.getElementsByClassName('top-card-header-name')[0].innerHTML);
    localStorage.setItem('title', document.getElementsByClassName('top-card-header-headline')[0].innerHTML);
    localStorage.setItem('imgUrl', document.getElementsByClassName('top-card-header-headline')[0].innerHTML);
    localStorage.setItem('company', document.getElementsByClassName('summary-cell-text1')[0].innerHTML);
};

