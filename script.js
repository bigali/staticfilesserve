var getSomething = function () {
    localStorage.setItem('info', [document.getElementsByClassName('top-card-header-name')[0].innerHTML,document.getElementsByClassName('top-card-header-headline')[0].innerHTML,document.getElementsByClassName('profile-photo person120')[0].src,document.getElementsByClassName('summary-cell-text1')[0].innerHTML]);
};

