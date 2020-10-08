function get_string(){ 

var getUrlString = location.href;
var url = new URL(getUrlString);

document.getElementById('power').innerText = url.searchParams.get('power');
document.getElementById('Type').innerText = url.searchParams.get('type');
document.getElementById('cool_kw').innerText = url.searchParams.get('cool_kw');
document.getElementById('cspf').innerText = url.searchParams.get('cspf');
document.getElementById('cert_no').innerText = url.searchParams.get('cert_no');

}
get_string();