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
        if(actualResults.indexOf("MANAGE_TEST_CASES") !== -1){
            response.remarks = "Found string - 'MANAGE_TEST_CASES'";
            return true;
        } else {
            response.remarks = "String not found - 'MANAGE_TEST_CASES'";
            return false;
        }
    };

    return validateResponseFunction; // returning main function
})();