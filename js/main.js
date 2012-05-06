jQuery.support.cors = true;


function isInPhoneGap(){
 if (typeof PhoneGap === 'undefined') {
    return false;
  }
  else{
    return true;
  }
}

function getURLParameter(name) {
  return location.toString().split('=')[1];
}