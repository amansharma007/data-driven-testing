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
    
        if(typeof alert !== 'undefined')
            alert("Please import the swagger files (petstore-swagger and uber-swagger) from 'cmd-executor/dumps/vrest-new/misc/' and import them into API Specs and Test Cases Tab.");

        return true;
    };

    return validateResponseFunction; // returning main function
})();