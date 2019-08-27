module.exports = function regCheck(regNumber, location) {

	    if (location.endsWith("GP")) {
		            return regNumber.endsWith("GP")
		        }
	    else if (location.endsWith("L")) {
		            return regNumber.endsWith("L")
		        }
	    else if (location.endsWith("EC")) {
		            return regNumber.endsWith("EC")
		        }
	    else if (location.endsWith("MP")) {
		            return regNumber.endsWith("MP")
		        }

	    else {
		            return false
		        }
}
