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
  if (value.startsWith('[') && value.endsWith(']')) {
    const action = value.slice(1, -1);
    switch (action) {
      case 'dark':
      case 'internal':
        return toggleMode(action);
      case 'print': return window.print();
    }
  }
  if (value) {
    window.location.href = value;
  }
}

/** Toggle mode. */
function toggleMode(mode) {
  toggleState(`${mode}Mode`);
  document.body.classList.toggle(mode);
  setModeIcon(mode);
}

/** Load mode state and add class if enabled. */
function initMode(mode) {
  if (isOpen(`${mode}Mode`)) {
    document.body.classList.add(mode);
  }
}

function getModeToggleButton(mode) {
  return document.getElementsByClassName(`${mode}-mode-toggle`)[0];
}

const ICONS = {
  dark: {
    enabled: 'fa fa-moon-o',
    disabled: 'fa fa-sun-o',
  },
  internal: {
    enabled: 'fa fa-industry',
    disabled: 'fa fa-user',
  },
};

/** Set mode toggle button icon. */
function setModeIcon(mode) {
  const icon = isOpen(`${mode}Mode`)
    ? ICONS[mode].enabled
    : ICONS[mode].disabled;
  document.getElementById(`${mode}-mode-icon`).classList = icon;
  const toggleButton = getModeToggleButton(mode);
  isOpen(`${mode}Mode`)
    ? toggleButton.classList.add(mode)
    : toggleButton.classList.remove(mode);
}

/** Set mode toggle button states upon load. */
addEventListener('load', () => {
  Object.keys(ICONS).map(mode => {
    setModeIcon(mode);
  });
});

/** Toggle hub TOC */
function toggleHubToc() {
  var element = document.getElementById("hub-toc-all");
  if (element.classList.contains("closed")) {
    element.classList.remove("closed");
  } else {
    element.classList.add("closed");
  }
}

/** Toggle page TOC */
function togglePageToc() {
  var element = document.getElementById("page-toc-all");
  if (element.classList.contains("closed")) {
    element.classList.remove("closed");
  } else {
    element.classList.add("closed");
  }
}

window.onload = function() {
  if (window.innerWidth < 768) {
    toggleHubToc();
    togglePageToc();
    document.getElementById("hub-toc-all").classList.add("ready");
    document.getElementById("page-toc-all").classList.add("ready");
  }
}