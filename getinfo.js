var getInfo = function () {
    return {
        name: localStorage.getItem('name'),
        title: localStorage.getItem('title'),
        imgUrl: localStorage.getItem('imgUrl'),
        company: localStorage.getItem('company'),
        linkedInUrl: localStorage.getItem('linkedInUrl')
    }
};

