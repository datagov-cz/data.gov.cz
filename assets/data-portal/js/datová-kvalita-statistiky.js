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

  const REPORT_QUERY_ARGUMENT = "sestava";

  const DATA_QUALITY_CATALOG_URL = "../soubory-datové-kvality.json";

  window.addEventListener("DOMContentLoaded", async () => {

    // We need to wait for gov-design-system to define the element.
    await customElements.whenDefined("gov-form-select");

    const userInterface = {
      group: document.getElementById("group-selector"),
      metricWrap: document.getElementById("metric-wrap"),
      metric: document.getElementById("metric-selector"),
      contentWrap: document.getElementById("content-wrap"),
    };

    const state = {
      group: "",
      metric: "",
    };

    const definitions = await fetchDefinitions();

    renderGroupSelector(userInterface.group, definitions);

    renderFromUrlQuery(userInterface, definitions, state,
      window.location.search);

    // Event handlers

    userInterface.group.addEventListener("gov-change", (event) => {
      state.group = event.detail.value;
      state.metric = "";
      // Update user interface.
      const group = definitions.groups[state.group];
      renderGroup(userInterface, group);
      // Update URL query.
      updateUrlQuery(group.identifier);
    });

    userInterface.metric.addEventListener("gov-change", (event) => {
      state.metric = event.detail.value;
      // Update user interface.
      const metric = definitions.groups[state.group].metrics[state.metric];
      renderMetric(userInterface, metric);
      // Update URL query.
      updateUrlQuery(metric.identifier);
    });

    window.addEventListener("popstate", (event) => {
      renderFromUrlQuery(userInterface, definitions, state,
        window.location.search);
    });

  });

  async function fetchDefinitions() {
    const response = await fetch(DATA_QUALITY_CATALOG_URL);
    return await response.json();
  }

  /**
   * @param {string} value
   */
  function renderGroupSelector(element, definitions) {
    element.options = [
      { value: "", label: "Vyberte skupinu pro zobrazení" },
      ...definitions.groups.map((item, index) => ({
        value: String(index),
        label: item.title,
      })),
    ];
    element.value = "";
  }

  /**
   * @param {string} urlQuery
   */
  function renderFromUrlQuery(userInterface, definitions, state, urlQuery) {
    const params = new URLSearchParams(urlQuery);
    const identifier = params.get(REPORT_QUERY_ARGUMENT);
    for (const [groupKey, group] of Object.entries(definitions.groups)) {
      if (group.identifier === identifier) {
        renderGroup(userInterface, group);
        state.group = userInterface.group.value = groupKey;
        return;
      }
      for (const [metricKey, metric] of Object.entries(group.metrics ?? [])) {
        if (metric.identifier === identifier) {
          renderGroup(userInterface, group);
          renderMetric(userInterface, metric);
          state.group = userInterface.group.value = groupKey;
          state.metric = userInterface.metric.value = metricKey;
          return;
        }
      }
    }
    // Default.
    renderNoGroup(userInterface);
    state.group = userInterface.group.value = "";
    state.metric = userInterface.metric.value = "";
  }

  function renderGroup(userInterface, group) {
    if (group?.type === "quality-group") {
      renderQualityGroup(userInterface, group);
    } else if (group?.type === "files") {
      renderFiles(userInterface, group);
    } else if (group?.type === "file") {
      renderFile(userInterface, group);
    } else {
      renderNoGroup(userInterface);
    }
  }

  function renderQualityGroup(userInterface, group) {
    renderMetricSelector(userInterface.metric, group);

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";

    // Update visibility
    userInterface.metricWrap.hidden = false;
    userInterface.contentWrap.hidden = false;
  }

  function renderMetricSelector(element, group) {
    element.options = [
      { value: "", label: "Vyberte ukazatel pro zobrazení" },
      ...group.metrics.map((item, index) => ({
        value: String(index),
        label: item.title,
      })),
    ];
    element.value = "";
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

      element.append(createCsvTable(file.url));

      root.append(element);
    }

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";
    userInterface.contentWrap.append(root);

    // Update visibility
    userInterface.metricWrap.hidden = true;
    userInterface.contentWrap.hidden = false;
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

    root.append(createCsvTable(url));

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";
    userInterface.contentWrap.append(root);

    // Update visibility
    userInterface.metricWrap.hidden = true;
    userInterface.contentWrap.hidden = false;
  }

  function renderNoGroup(userInterface) {
    // Update visibility
    userInterface.metricWrap.hidden = true;
    userInterface.contentWrap.hidden = true;
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

      element.append(createCsvTable(file.url));

      root.append(element);
    }

    // Clear and set new content.
    userInterface.contentWrap.innerText = "";
    userInterface.contentWrap.append(root);
  }

  // URL HANDLING

  /**
   * @param {string | undefined} report
   */
  function updateUrlQuery(report) {
    let url = window.location.pathname;
    if (report !== undefined) {
      url += `?${REPORT_QUERY_ARGUMENT}=${encodeURIComponent(report)}`
    }
    window.history.pushState({}, "", url);
  }

  // TABLE RENDER SECTION

  function createCsvTable(url) {
    const wrap = document.createElement("div");
    wrap.className = "data-quality-table";
    const table = document.createElement("table");
    renderCsvTable(table, url);
    wrap.append(table);
    return wrap;
  }

  async function renderCsvTable(element, url) {
    const payload = await (await fetch(url)).text();
    const csv = window.jQuery.csv.toArrays(payload);
    const header = createTableHeader(csv[0])
    const body = createTableBody(csv.slice(1));
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

  function createTableBody(rows) {
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
