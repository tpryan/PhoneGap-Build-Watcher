jQuery.support.cors = true;


function isInPhoneGap(){
 if (typeof window.device === 'undefined') {
    return false;
  }
  else{
    return true;
  }
}

function getURLParameter(name) {
  return location.toString().split('=')[1];
}

function isiOS(){
	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
	return iOS;
}