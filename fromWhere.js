module.exports = function fromWhere(reg){
    if (reg.endsWith("Y")){
      return "Bellville";
    }
    else if (reg.endsWith("J")){
      return "Paarl";
    }
    else if (reg.endsWith("A")){
      return "Cape Town";
    }
    else if (reg.endsWith("P")){
      return "Gauteng";
    }
    else {
      return "Some other place!";
  }
  }