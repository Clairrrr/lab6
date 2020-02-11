'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();
	console.log("inside callback ");

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get(`project/${idNumber}`, (res)=>{
		console.log(res);
		$(`#${projectID} .details`).html(
			generateDetailsHTML(res.title, res.date, res.image, res.summary)
		);
	});
}

function generateDetailsHTML(title, date, img, desc) {
	title = `<h3>${title}</h3>`;
	date = `<h4>${date}</h4>`;
	img = `<img src="${img}" style="width: 50%; float: left; margin: 3%;" alt="foo">`;
	desc = `<p style="width: 90%;">${desc}</p>`;
	return title + date + img + desc;
}
