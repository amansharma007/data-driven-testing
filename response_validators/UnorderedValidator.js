(function() {

    //Supporting Functions
    //check whether the response type is json or string through response headers
    var getType = function(headers, content){
        var contentType = headers && (headers['Content-Type'] || headers['content-type']);
        if(contentType && contentType.indexOf("json") != -1){
            return 'json';
        } else {
            try {
                return JSON.parse(content);
            } catch(e){
                return 'string';
            }
        }
    };

    /**
     * Main Function
     * Checks whether the actual results of a testcase matches with expected results
     *
     * @param {object} testcase - testcase object
     * @param {object} response - response object after execution of testcase
     * @param {object}  methods  - utility methods. For more info, please visit "Methods" section of "Configuration" tab
     *
     * @returns {Boolean}
     */
    var validateResponseFunction = function(testcase, response, methods) {


        var expectedResults = testcase.expectedResponse.content,
            actualResults = response.actualResponse.content,
            responseType = getType(response.headers, actualResults),
            expectedResultsJSON, actualResultsJSON;

        if(expectedResults === '' && actualResults === '') return true;
        if(typeof responseType === 'object') {
            actualResultsJSON = responseType;
            responseType = 'json';
        }
        if(!expectedResults || !actualResults || !testcase.expectedResponse.type) return false;
        else {
            if(responseType === 'json' && testcase.expectedResponse.type === 'json'){
                try {
                    expectedResultsJSON = JSON.parse(expectedResults);
                } catch(err){
                    response.remarks = "Expected results is not in JSON format.";
                    return false;
                }
                if(!actualResultsJSON){
                    try {
                        actualResultsJSON = JSON.parse(actualResults);
                    } catch(err){
                        response.remarks = "Actual results received was not in JSON format.";
                        return false;
                    }
                }

                var customJSONPropertyChecker = {
                    /*
                     * Create your own custom validators by copying this default validator and check any dynamic property values by this way
                     * @returns {Boolean} returns true if expected value matches the actual value or if you want to ignore this property to check, false otherwise.
                     */
                    /*
                    "keyname1": function(expectedValue, actualValue){ //provide a function to perform a special check on property "keyname1" in responses
                        //write the code here to check the value of this property
                        return true/false;
                    },
                    "keyname2": true, //provide true to just ignore this property "keyname2" in responses
                    ...
                    */
                };
                return methods.UnorderedCompareJSON(expectedResultsJSON, actualResultsJSON, customJSONPropertyChecker);
            } else {
                return expectedResults === actualResults;
            }
        }
    };

    return validateResponseFunction; // returning main function
})();
