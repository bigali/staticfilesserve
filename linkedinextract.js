var basics = {
    "name": extractText("pv-top-card-section__name t-24 t-black t-normal"),
    "label": extractText("pv-top-card-section__headline t-16 t-black t-normal"),
    "picture": extractText("photo-upload-preview", "src"),
    "email":extractText("pv-contact-info__contact-link t-14 t-black t-normal", "textContent", 1),
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "",
    "profiles": [{
      "network": "linkedin",
      "username": extractText("pv-contact-info__contact-link t-14 t-black t-normal") ? extractText("pv-contact-info__contact-link t-14 t-black t-normal").split("in/")[1] : "" ,
      "url": extractText("pv-contact-info__contact-link t-14 t-black t-normal")
    }]
}
