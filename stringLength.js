function stringLength(string) {
  if ( 0 < string.length &&  string.length <= 10) {
    return string.length;  
  }
  else if(string.length <= 0) {
    return "String most be greater than 0";
  }
  else if(string.length > 10) {
    return "String most be less than 10";
  }
}

module.exports = stringLength;