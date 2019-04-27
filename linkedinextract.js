
var basics = {
    "name": extractText("pv-top-card-section__name t-24 t-black t-normal"),
    "label": extractText("pv-top-card-section__headline t-16 t-black t-normal"),
    "picture": extractText("photo-upload-preview", "src") || extractText("pv-top-card-section__photo presence-entity__image EntityPhoto-circle-8 ember-view", "style").backgroundImage.split('url("')[1].split('")')[0],
    "email": getCi("ci-email"),
    "phone": getCi("ci-phone"),
    "website": getCi("ci-websites"),
    "summary": extractText("pv-top-card-section__summary-text mt4 ember-view"),
	"location": {
      "address": getCi("ci-address")
    },
    "profiles": [{
      "network": "linkedin",
      "username": getCi("ci-vanity-url").split("in/")[1],
      "url": getCi("ci-vanity-url")
    }]
}
getCi = (className) => extractText("pv-contact-info__contact-link t-14 t-black t-normal","textContent", document.getElementsByClassName("pv-contact-info__contact-type "+ className)[0]) 

var extractText = (className, atr="textContent", parent=document) => {
    let elt = parent.getElementsByClassName(className)
	if(elt) {
		let t = elt[0]
		if(t) {
			return t[atr]
		} else {
        	return ""
		}
		
	} else {
    	return ""
	}
}
