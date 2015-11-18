var putInfo = function (url) {
    var fullname=document.getElementsByClassName('top-card-header-name')[0].innerText.split(' ');
    var title=document.getElementsByClassName('top-card-header-headline')[0].innerText;
    var imgUrl=document.getElementsByClassName('profile-photo person120')[0].src;
    var company=document.getElementsByClassName('summary-cell-text1')[0].innerText;
    var linkedinMember=url.match(new RegExp("profile/(.*)/name"))[1];
    localStorage.setItem('info',fullname[0]+'#'+fullname[1]+'#'+title+'#'+imgUrl+'#'+company+'#'+linkedinMember);
};

