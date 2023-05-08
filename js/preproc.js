window.onload = function(){
    let info = document.getElementById("info");
    let infotime = new Date();
    info.innerHTML = infotime.toLocaleString();
    var timein = setInterval(function() {
    	infotime = new Date();
    	info.innerHTML = infotime.toLocaleString();
    }, 1000);
    let home = document.getElementById("homelink");
    let bbs = document.getElementById("aboutlink");
    let menu1 = document.getElementById("menu1");
    let menu2 = document.getElementById("menu2");
    home.oncontextmenu = function(e) {
    	menu1.style.display = "block";
    	menu2.style.display = "none";
    	menu1.style.left = e.clientX + "px";
    	menu1.style.top = e.clientY + "px";
    	return false;
    };
    bbs.oncontextmenu = function(e) {
    	menu2.style.display = "block";
    	menu1.style.display = "none";
    	menu2.style.left = e.clientX + "px";
    	menu2.style.top = e.clientY + "px";
    	return false;
    };
    document.onclick = function() {
    	menu1.style.display = "none";
    	menu2.style.display = "none";
    };
};
