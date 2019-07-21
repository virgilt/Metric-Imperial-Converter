/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    input = input.replace(/(\s)/g, '')
    input = input.toLowerCase()
    let separate = input.split(/([a-z]+)/i)
    let number = separate[0];
    const periodFirst = /(^\.{1})/
    const validDecimal = /(^\d+(\.{1}\d+)?$)/
    const validFraction = /(^\d+(\/\d+)?$)/
  
    
    var result;
    
    if (periodFirst.test(number)) {
      number = "0" + number;
      console.log('added period')
    }

    if(validFraction.test(number)) {
      console.log('fraction registered')
      let divisibleTester = number.split(/(\/)/)
      console.log(divisibleTester)
      if (divisibleTester[2] !== '0' && divisibleTester[2]) {
      result = Number(divisibleTester[0] / Number(divisibleTester[2]))
    } else { result = Number(divisibleTester[0])} 
    } else if (validDecimal.test(number)) {
      result = number;
      console.log('test2')
    } else {
      result = 'invalid number'
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let letters;

    input = input.replace(/(\s)/g, '');
    input = input.toLowerCase()

    let separate = input.split(/([a-z]+)/i)
    
    if (separate.length > 1 ) {
      letters = separate[1] + separate[2];
    } else {
      letters = 'z';
    }

    
    const validUnit = /(gal|L|lbs|kg|mi|km)/
    let unit = letters.match(validUnit)

    if (validUnit.test(letters) && unit[0] === letters) {
      result = letters;
    } else {
      result = 'invalid unit';
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    let num;
    
    switch (initUnit) {
      case 'gal':
        result = (initNum * galToL).toFixed(5);
        break;
      case 'l':
        result = (initNum / galToL).toFixed(5);
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case 'kg':
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5);
        break;
      case 'km':
        result = (initNum / miToKm).toFixed(5);
        
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      result = 'invalid number and unit';
    } else if (initUnit === 'invalid unit') {
      result = 'invalid unit';
    } else if (initNum === 'invalid number') {
      result = 'invalid number'
    } else {
      result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    }
      
    return result;
  };
  
}

module.exports = ConvertHandler;
