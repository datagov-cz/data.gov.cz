document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.gov-navigation');

  if (!navigation) {
    return;
  }

  const getButton = (trigger) => trigger.shadowRoot?.querySelector('button') || trigger.querySelector('button, .element');

  navigation.addEventListener('gov-click', (event) => {
    const trigger = event.target.closest?.('gov-button');
    const item = trigger?.parentElement;
    const submenu = item?.querySelector(':scope > ul');

    if (!trigger || !submenu) {
      return;
    }

    event.preventDefault();
    const button = getButton(trigger);
    const isOpen = button?.getAttribute('aria-expanded') === 'true';

    navigation.querySelectorAll(':scope > ul > li').forEach((otherItem) => {
      const otherTrigger = otherItem.querySelector(':scope > gov-button');
      const otherSubmenu = otherItem.querySelector(':scope > ul');
      const otherButton = otherTrigger && getButton(otherTrigger);

      if (!otherButton || !otherSubmenu) {
        return;
      }

      otherButton.setAttribute('aria-expanded', 'false');
      otherSubmenu.hidden = true;
      otherSubmenu.setAttribute('aria-hidden', 'true');
      otherTrigger.querySelector('gov-icon')?.setAttribute('name', 'chevron-down');
    });

    if (!isOpen && button) {
      button.setAttribute('aria-expanded', 'true');
      submenu.hidden = false;
      submenu.setAttribute('aria-hidden', 'false');
      trigger.querySelector('gov-icon')?.setAttribute('name', 'chevron-up');
    }
  });
});
