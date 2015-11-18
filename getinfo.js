var getInfo = function () {
    var info=localStorage.getItem('info').split('#');
    console.log(info);
    var emails=[];
    email.push(info[6]);
    var phones=[];
    phones.push(info[7]);
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

