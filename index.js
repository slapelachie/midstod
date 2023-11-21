function pad(value) {
	return value < 10 ? '0' + value : value;
}

function displayClock() {
	days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    now = new Date(); 
	time = `${days[now.getDay()]}, ${months[now.getMonth()]} ${pad(now.getDate())} | ${pad(now.getHours())}:${pad(now.getMinutes())}`
    document.getElementById("clock_time").innerHTML = time;
}

function populateLinkArea() {
	link_html = "";	
	for (let i in sites){
		link_html += `<div class='link_area_item'><h1>${i}</h1>`;
		for (let j in sites[i]) {
			link_html += `<li><a href='${sites[i][j]}'>${j}</a></li>`;
		}
		link_html += '</div>';
	}
	$("#link_area").html(link_html);
}

function populateQuoteArea() {
	quote_index = Math.floor(Math.random() * quotes.length);
	quote = quotes[quote_index];
	quote_html = `<span id='quote'>${quote["text"]}</span>`;
	quote_html += `<span id='author'>${quote["author"]}</span>`;
	$("#quote_area").html(quote_html);
}

$(document).ready(function(){
	displayClock();
	populateLinkArea();
	populateQuoteArea();
	setInterval(displayClock, 10000);	
});
