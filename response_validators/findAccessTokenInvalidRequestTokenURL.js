(function() {

    //Supporting Functions, if any

    /**
     * Main Function
     * Checks whether the actual results of a testcase matches with expected results
     * 
     * @param {object} testcase - testcase object
     * @param {object} response - response object after execution of testcase
     * @param {array}  methods  - utility methods. For more info, please visit "Methods" section of "Configuration" tab
     *
     * @returns {Boolean}
     */
    var validateResponseFunction = function(testcase, response, methods) {
        
      
        var expectedResults = testcase.expectedResponse.content, //string
            actualResults = response.actualResponse.content, //string
            headers = response.headers; //object
        if(actualResults.indexOf("Sorry, that page doesn’t exist!") !== -1){
            response.remarks = "Found string - 'Sorry, that page doesn\’t exist!'";
            return true;
        } else {
            response.remarks = "String not found - 'Sorry, that page doesn\’t exist!'";
            return false;
        }
    };

    return validateResponseFunction; // returning main function
})();