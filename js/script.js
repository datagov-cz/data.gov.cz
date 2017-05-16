(function initialize() {

    // Must NOT end with '/'.
    const CATALOG_URL = "https://novy.nkod.opendata.cz";

    function initializeFormAction() {
        document.getElementById("searchForm").action = CATALOG_URL;
    }

    function readNumberOfDatasets() {
        const url = CATALOG_URL + "/api/v1/solr/info";
        fetch(url).then((response) => {
            return response.json();
        }).then((body) => {
            const datasetCount = numberToStringAddSpaces(body.data.numberOfDatasets);
            document.getElementById("datasetCountLabel").textContent = datasetCount;
            document.getElementById("datasetCount").style.visibility = "visible";
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

    initializeFormAction();
    readNumberOfDatasets();

})();

