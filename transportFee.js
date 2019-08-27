module.exports = function transportFee(shift){
    if (shift.startsWith("m")){
    return "R20";
    } 
    else if (shift.startsWith("a")){
      return "R10";
    }
    else if (shift.startsWith("l")){
      return "R50";
    }
    else {
      return "free";
    }
  }
  
  