var getInfo = function () {
    var info=localStorage.getItem('info').split('#');
    console.log(info);
    return   {
        'firstname': info[0],
        'lastname': info[1],
        'title': info[2],
        'profile_img_url': info[3],
        'company': info[4],
        'linkedin_url': 'https://www.linkedin.com/profile/view?id=' + info[5]
    };
};

