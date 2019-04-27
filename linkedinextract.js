
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
getjob = (elt) => { 
	let dateRange = elt.getElementsByClassName("pv-entity__date-range t-14 t-black--light t-normal")[0].getElementsByTagName("span")[1].innerText.split("–")
	return {
		"position": elt.getElementsByClassName("t-16 t-black t-bold")[0].innerText,
		"startDate": dateRange[0],
		"endDate": dateRange[1],
		"company": elt.getElementsByClassName("pv-entity__secondary-title")[0].innerText
	}
 }

getJobs = () => {
	jobs= []
for(var elt of document.getElementsByClassName("pv-profile-section__card-item-v2 pv-profile-section pv-position-entity ember-view")) {
	var cnelt = elt.getElementsByClassName("pv-entity__company-summary-info")[0]
	if(cnelt) {
		var cn = cnelt.getElementsByTagName("span")[1].innerText
		var jd = elt.getElementsByClassName("pv-entity__position-group mt2")[0].getElementsByClassName("pv-entity__summary-info-v2 pv-entity__summary-info--background-section pv-entity__summary-info-margin-top ")
		for(jdd of jd) {
			var dateRange = jdd.getElementsByClassName("pv-entity__date-range t-14 t-black t-normal")[0].getElementsByTagName("span")[1].innerText.split("–")
			jobs.push( {position: jdd.getElementsByClassName("t-14 t-black t-bold")[0].getElementsByTagName("span")[1].innerText,
		company: cn,
"startDate": dateRange[0],
		"endDate": dateRange[1]
	})
        }
		
    } else {
		let dateRange = elt.getElementsByClassName("pv-entity__date-range t-14 t-black--light t-normal")[0].getElementsByTagName("span")[1].innerText.split("–")
	jobs.push({
		"position": elt.getElementsByClassName("t-16 t-black t-bold")[0].innerText,
		"startDate": dateRange[0],
		"endDate": dateRange[1],
		"company": elt.getElementsByClassName("pv-entity__secondary-title")[0].innerText
	})
    }
	
}
	return jobs
}

getEducations = () => {
	var educations = []
	for(educ of document.getElementsByClassName("pv-profile-section education-section ember-view")[0].getElementsByClassName("pv-profile-section__sortable-item pv-profile-section__section-info-item relative pv-profile-section__sortable-item--v2 pv-profile-section__list-item sortable-item ember-view")) {
		var dateRange = educ.getElementsByClassName("pv-entity__dates t-14 t-black--light t-normal")[0].getElementsByTagName("span")[1].innerText.split("–")
	     educations.push({
		institution: educ.getElementsByClassName("pv-entity__school-name t-16 t-black t-bold")[0].innerText,
		area: educ.getElementsByClassName("pv-entity__comma-item")[1].innerText,
		studyType: educ.getElementsByClassName("pv-entity__comma-item")[0].innerText,
			startDate: dateRange[0],
			endDate: dateRange[1]
	    })
	}
	return educations
}

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
