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
