/**
 * Documentation table of contents collapse/expand section state functions.
 */

/** Load item state value. */
function getState(key) {
  return localStorage.getItem(key);
}

/** Set item state value. */
function setState(navItem, value) {
  log(`set state for ${navItem} to ${value}`);
  localStorage.setItem(navItem, value);
}

/** Get console log verbosity setting. */
function isVerbose() {
  return getState('verbose') == 'true';
}

/** Log a message to console according to verbosity setting. */
function log(message) {
  isVerbose() && console.log(message);
}

/** Toggle the 'open' class for a nav item. */
function toggleOpenClass(navItem) {
  log(`toggle open class for ${navItem}`);
  const navItemElement = document.getElementById(navItem);
  if (navItemElement) {
    navItemElement.classList.toggle('open');
  }
}

/** Get nav item open state. */
function isOpen(navItem) {
  const navItemIsOpen = getState(navItem) == 'open';
  log(`is ${navItem} open? ${navItemIsOpen}`);
  return navItemIsOpen;
}

/** Toggle nav item open state. */
function toggleState(navItem) {
  setState(navItem, isOpen(navItem) ? 'closed' : 'open');
}

/** Toggle nav item and parent section open state. */
function toggleSectionState(navItem) {
  toggleOpenClass(navItem);
  toggleOpenClass(`${navItem}-top`);
  toggleState(navItem);
}

/** Set nav item and parent section open state. */
function openSectionState(navItem) {
  addOpenClass(navItem);
  addOpenClass(`${navItem}-top`);
  setState(navItem, 'open');
}

/** Add the 'open' class to a nav item. */
function addOpenClass(navItem) {
  log(`add open class to ${navItem}`);
  const navItemElement = document.getElementById(navItem);
  if (navItemElement) {
    navItemElement.classList.add('open');
  }
}

/**
 * Load nav item open state value and set the 'open' class accordingly.
 * If a page is open, open the section that includes it.
 */
function initSectionState(navItem, current) {
  if (isOpen(navItem)) {
    addOpenClass(navItem);
    addOpenClass(`${navItem}-top`);
  } else {
    if (current == 'current') {
      log(`current nav item is: ${navItem}`)
      setState(navItem, 'open');
      addOpenClass(navItem);
      addOpenClass(`${navItem}-top`);
    }
  }
}

/** Version and mobile table of contents menu navigation. */
function navigate(value) {
  if (value == 'darkMode') {
    toggleDarkMode();
    return;
  }
  if (value) {
    window.location.href = value;
  }
}

/** Toggle dark mode. */
function toggleDarkMode() {
  toggleState('darkMode');
  document.body.classList.toggle('dark');
  setDarkModeIcon();
}

/** Load dark mode state and add class if enabled. */
function initDarkMode() {
  if (isOpen('darkMode')) {
    document.body.classList.add('dark');
  }
}

function getDarkModeToggleButton() {
  return document.getElementsByClassName('dark-mode-toggle')[0];
}

/** Set dark mode toggle button icon. */
function setDarkModeIcon() {
  const icon = isOpen('darkMode') ? 'fa fa-moon-o' : 'fa fa-sun-o';
  document.getElementById('dark-mode-icon').classList = icon;
  const toggleButton = getDarkModeToggleButton();
  isOpen('darkMode')
    ? toggleButton.classList.add('dark')
    : toggleButton.classList.remove('dark');
}

/** Set dark mode toggle button state upon load. */
addEventListener('load', () => {
  getDarkModeToggleButton().classList.add('visible');
  setDarkModeIcon();
});
