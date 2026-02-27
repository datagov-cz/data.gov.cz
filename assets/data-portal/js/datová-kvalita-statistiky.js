import { micromark } from '/assets/data-portal/js/micromark.js';

(() => {
  // https://data.gov.cz/assets/design-system/

  const YESTERDAY = (() => {
    let today = new Date();

    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    return yesterday.getFullYear() + "-"
      + String(yesterday.getMonth() + 1).padStart(2, "0") + "-"
      + String(yesterday.getDate()).padStart(2, "0");
  })();

  const LAST_MONTH = (() => {
    const today = new Date();
    if (today.getMonth() === 0) {
      return (today.getFullYear() - 1) + "-12-31";
    } else {
      const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
      return lastDay.getFullYear() + "-"
        + String(lastDay.getMonth() + 1).padStart(2, "0") + "-"
        + String(lastDay.getDate()).padStart(2, "0");
    }
  })();

  const dataQualityCatalogUrl = "../soubory-datové-kvality.json";

  window.addEventListener("DOMContentLoaded", async () => {

    const userInterface = {
      group: document.getElementById("group-selector"),
      fileWrap: document.getElementById("file-wrap"),
      file: document.getElementById("file-selector"),
      contentWrap: document.getElementById("content-wrap"),
    };

    const state = {
      group: "",
      metric: "",
    };

    // Initialize user interface.

    const definitions = await fetchDefinitions();
    renderGroupSelector(userInterface.group, definitions, state.group);
    renderNoGroup(userInterface);

    // Event handlers

    userInterface.group.addEventListener("gov-change", (event) => {
      state.group = event.target.value;
      state.metric = "";
      // Update user interface.
      const group = definitions.groups[state.group];
      if (group?.type === "quality-group") {
        renderQualityGroup(userInterface, group);
      } else if (group?.type === "files") {
        renderFiles(userInterface, group);
      } else if (group?.type === "file") {
        renderFile(userInterface, group);
      } else {
        renderNoGroup(userInterface);
      }
    });

    userInterface.file.addEventListener("gov-change", (event) => {
      state.metric = event.target.value;
      const metric = definitions.groups[state.group].metrics[state.metric];
      renderMetric(userInterface, metric);
    });

  });

  async function fetchDefinitions() {
    const response = await fetch(dataQualityCatalogUrl);
    return await response.json();
  }

  function renderGroupSelector(element, definitions, value) {
    definitions.groups.forEach((item, index) => {
      const option = document.createElement("option");
      option.setAttribute("value", index);
      option.innerText = item.title;
      element.appendChild(option);
    });
    element.value = value;
  }

  function renderQualityGroup(userInterface, group) {
    renderMetricSelector(userInterface.file, group);

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";

    // Update visibility
    userInterface.fileWrap.classList.remove("hide");
    userInterface.contentWrap.classList.remove("hide");
  }

  function renderMetricSelector(element, group) {
    // The element is created using JS, so we need to get it here.
    const selectElement = element.querySelector("select");
    // Clear content
    selectElement.innerText = "";
    // Prompt option
    {
      const option = document.createElement("option");
      option.setAttribute("value", "");
      option.innerText = "Vyberte soubor pro zobrazení";
      selectElement.appendChild(option);
    }
    // Other options
    const metrics = group.metrics;
    metrics.forEach((item, index) => {
      const option = document.createElement("option");
      option.setAttribute("value", index);
      option.innerText = item.title;
      selectElement.appendChild(option);
    });
    selectElement.value = "";
  }

  function renderFiles(userInterface, group) {
    const root = document.createElement("div");

    const header = document.createElement("h2");
    header.innerText = group.title;
    root.append(header);

    for (const file of group.files) {
      const element = document.createElement("div");

      const download = document.createElement("a");
      download.setAttribute("href", file.url);
      download.textContent = file.title;
      element.append(download);

      const table = document.createElement("table");
      renderCsvTable(table, file.url);
      element.append(table);

      root.append(element);
    }

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";
    userInterface.contentWrap.append(root);

    // Update visibility
    userInterface.fileWrap.classList.add("hide");
    userInterface.contentWrap.classList.remove("hide");
  }

  function renderFile(userInterface, group) {
    const root = document.createElement("div");

    const header = document.createElement("h2");
    header.innerText = group.title;
    root.append(header);

    const url = group.urlTemplate
      .replace("{{yesterday}}", YESTERDAY)
      .replace("{{last-month}}", LAST_MONTH);

    const download = document.createElement("a");
    download.setAttribute("href", url);
    download.textContent = group.title;
    root.append(download);

    const table = document.createElement("table");
    renderCsvTable(table, url);
    root.append(table);

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";
    userInterface.contentWrap.append(root);

    // Update visibility
    userInterface.fileWrap.classList.add("hide");
    userInterface.contentWrap.classList.remove("hide");
  }

  function renderNoGroup(userInterface) {
    // Update visibility
    userInterface.fileWrap.classList.add("hide");
    userInterface.contentWrap.classList.add("hide");
  }

  function renderMetric(userInterface, metric) {
    const root = document.createElement("div");

    const header = document.createElement("h2");
    header.innerText = metric.title;
    root.append(header);

    const description = document.createElement("p");
    if (metric.content !== undefined) {
      description.innerHTML = micromark(metric.content);
    }
    root.append(description);

    for (const file of metric.files) {
      const element = document.createElement("div");

      const download = document.createElement("a");
      download.setAttribute("href", file.url);
      download.textContent = file.title;
      element.append(download);

      const table = document.createElement("table");
      renderCsvTable(table, file.url);
      element.append(table);

      root.append(element);
    }

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";
    userInterface.contentWrap.append(root);
  }


  // TABLE RENDER SECTION

  async function renderCsvTable(element, url) {
    const payload = await (await fetch(url)).text();
    const csv = window.jQuery.csv.toArrays(payload);
    const header = createTableHeader(csv[0])
    const body = crateTableBody(csv.slice(1));
    element.appendChild(header);
    element.appendChild(body);
  }

  function createTableHeader(row) {
    const tr = document.createElement("tr");
    for (const cell of row) {
      const th = document.createElement("th");
      th.innerText = cell;
      tr.appendChild(th);
    }
    const thead = document.createElement("thead");
    thead.appendChild(tr);
    return thead;
  }

  function crateTableBody(rows) {
    const tbody = document.createElement("tbody");
    for (const row of rows) {
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      for (const cell of row) {
        const th = document.createElement("td");
        th.innerText = cell;
        tr.appendChild(th);
      }
    }
    return tbody;
  }

})();
