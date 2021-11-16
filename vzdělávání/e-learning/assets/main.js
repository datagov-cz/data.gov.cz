
(function main() {

  const parsedQuery = parseQuery();
  disableFragments(parsedQuery);

  function parseQuery() {
    return window.location.search
      .substring(1)
      .split("&")
      .map(string => string.includes("=") ? string : string.toLowerCase());
  }

  function disableFragments(query) {
    if (query.includes("bezanimace")) {
      document.querySelectorAll(".fragment")
        .forEach(element => element.classList.remove("fragment"));
    }
  }

})();
