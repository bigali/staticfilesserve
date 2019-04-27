var basics = {
    "name": extractText("pv-top-card-section__name t-24 t-black t-normal"),
    "label": extractText("pv-top-card-section__headline t-16 t-black t-normal"),
    "picture": extractText("photo-upload-preview", "src"),
    "email":extractText("pv-contact-info__contact-link t-14 t-black t-normal", "textContent", 1),
    "phone": "",
    "website": "",
    "summary": extractText("pv-top-card-section__summary-text mt4 ember-view"),
    "profiles": [{
      "network": "linkedin",
      "username": extractText("pv-contact-info__contact-link t-14 t-black t-normal") ? extractText("pv-contact-info__contact-link t-14 t-black t-normal").split("in/")[1] : "" ,
      "url": extractText("pv-contact-info__contact-link t-14 t-black t-normal")
    }]
}

const extractText = (className, atr="textContent", index=0) => {
    let elt = document.getElementsByClassName(className)
	if(elt) {
		let t = elt[index]
		if(t) {
			return t[atr]
		} else {
        	return ""
		}
		
	} else {
    	return ""
	}
}
