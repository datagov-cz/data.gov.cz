(function initialize() {

    // Must NOT end with '/'.
    const CATALOG_URL = "";

    function readNumbers() {
        const url = CATALOG_URL + "/api/v1/solr/info";
        fetch(url).then(function(response) {
            return response.json();
        }).then(function(body) {
            const datasetCount = numberToStringAddSpaces(body.data.numberOfDatasets);
            //const applicationCount = numberToStringAddSpaces(body.data.numberOfApplications);
            const publisherCount = numberToStringAddSpaces(body.data.numberOfPublishers);
            const keywordCount = numberToStringAddSpaces(body.data.numberOfKeywords);
            document.getElementById("datasetCountLabel").textContent = datasetCount;
            //document.getElementById("applicationCountLabel").textContent = applicationCount;
            document.getElementById("publisherCountLabel").textContent = publisherCount;
            document.getElementById("keywordCountLabel").textContent = keywordCount;
            document.getElementById("count").style.visibility = "visible";
        });
    }
    
    function numberToStringAddSpaces(value) {
        let valueAsString = value.toString();
        let output = "";
        for (let index = 0; index < valueAsString.length; ++index) {
            if ((valueAsString.length - index) % 3 === 0) {
                output += " ";
            }
            output += valueAsString[index];
        }
        return output;
        return value;
    }

    readNumbers();

})();

