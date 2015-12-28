var getInfo = function () {
    var info=localStorage.getItem('info').split('#');
    return {
        'firstname': info[0],
        'lastname': info[1],
        'title': info[2],
        'profile_img_url': info[3],
        'company': info[4],
        'linkedin_url': 'https://www.linkedin.com/m/profile/' + info[5]
    };
};

var putInfo = function (url) {
    var fullname=document.getElementsByClassName('detail name')[0].innerText.split(' ');
    var titleCompany=document.getElementsByClassName('detail position')[0].innerText.split(' at ');
    var title =titleCompany[0];
    var company=titleCompany[1];
    var imgUrl=document.getElementsByClassName('member-photo')[0].querySelectorAll('img')[0].src;;
    var linkedinMember=url.split('/')[5];
    console.log('info:',fullname[0]+'#'+fullname[1]+'#'+title+'#'+imgUrl+'#'+company+'#'+linkedinMember);

    localStorage.setItem('info',fullname[0]+'#'+fullname[1]+'#'+title+'#'+imgUrl+'#'+company+'#'+linkedinMember);
};
