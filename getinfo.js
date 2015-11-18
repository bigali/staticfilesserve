var getInfo = function () {
    var info=localStorage.getItem('info').split('#');
    console.log(info);
    var emails=[];
    emails.push({
        "email":info[6]
    });
    var phones=[];
    phones.push({
        "number":info[7]
    });
    return {
        'firstname': info[0],
        'lastname': info[1],
        'title': info[2],
        'profile_img_url': info[3],
        'company': info[4],
        'linkedin_url': 'https://www.linkedin.com/profile/view?id=' + info[5],
        'emails':emails,
        'phones':phones
    };
};

var putInfo = function (url) {
    var fullname=document.getElementsByClassName('top-card-header-name')[0].innerText.split(' ');
    var title=document.getElementsByClassName('top-card-header-headline')[0].innerText;
    var imgUrl=document.getElementsByClassName('profile-photo person120')[0].src;
    var company=document.getElementsByClassName('summary-cell-text1')[0].innerText;
    var linkedinMember=url.match(new RegExp("profile/(.*)/name"))[1];
    var email='';
    var phone='';
    var s=document.getElementsByClassName('profile-media-object');
    var phonePatern=/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

    for (i = 0; i < s.length; i++) {
        if(s[i].children[0].nodeName=='H3'){
            if(s[i].children[1].innerText.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) email=s[i].children[1].innerText;
            if(s[i].children[1].innerText.split(' (')[0].match(phonePatern)) phone=s[i].children[1].innerText;
        }

    }
    console.log('email:'+email+','+'phone:'+phone);

    localStorage.setItem('info',fullname[0]+'#'+fullname[1]+'#'+title+'#'+imgUrl+'#'+company+'#'+linkedinMember+'#'+email+'#'+phone);
};
