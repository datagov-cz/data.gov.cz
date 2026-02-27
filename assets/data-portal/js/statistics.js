(function initialize() {

    const URL = "/api/v2/catalog/v1/statistics";

    function fetchAndDisplayStatistics() {

        fetch(URL).then((response) => response.json()).then((body) => {

            document.getElementById("datasetCountLabel").textContent =
                numberToStringAddSpaces(body.data.numberOfDatasets);

            document.getElementById("applicationCountLabel").textContent =
                numberToStringAddSpaces(body.data.numberOfApplications);

            document.getElementById("publisherCountLabel").textContent =
                numberToStringAddSpaces(body.data.numberOfPublishers);

            document.getElementById("keywordCountLabel").textContent =
                numberToStringAddSpaces(body.data.numberOfKeywords);
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
    }

    fetchAndDisplayStatistics();

})();
