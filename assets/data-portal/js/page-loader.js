function revealGovPage() {
  document.documentElement.classList.remove('gov-components-loading');
}

function waitForGovComponents() {
  const componentNames = [...new Set([...document.querySelectorAll('*')]
    .map((element) => element.localName)
    .filter((name) => name.startsWith('gov-'))
  )];

  Promise.all(componentNames.map((name) => customElements.whenDefined(name))).then(() => {
    window.setTimeout(revealGovPage, 150);
  });
  window.setTimeout(revealGovPage, 3000);
}

document.addEventListener('DOMContentLoaded', waitForGovComponents, { once: true });