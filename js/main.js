$.support.cors = true;


function isInPhoneGap(){
 if (typeof PhoneGap === 'undefined') {
    return false;
  }
  else{
    return true;
  }
}

