var chocolateBars = ['snickers', 'hundred grand','kitkat', 'skittles'];
var chocolateCandy = "foo";
// .push appends on element onto the end of the Array
// .unshift takes an element of the beginning

function addElementToBeginningOfArray(chocolateBars, chocolateCandy) {
  chocolateBars = [chocolateCandy, ...chocolateBars];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray() {
  
}
