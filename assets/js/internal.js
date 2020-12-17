/** Toggle internal mode. */
function toggleInternalMode() {
  toggleState('internalMode');
  document.body.classList.toggle('internal');
  setInternalModeIcon();
}

/** Load internal mode state and add class if enabled. */
function initInternalMode() {
  if (isOpen('internalMode')) {
    document.body.classList.add('internal');
  }
}

function getInternalModeToggleButton() {
  return document.getElementsByClassName('internal-mode-toggle')[0];
}

/** Set internal mode toggle button icon. */
function setInternalModeIcon() {
  const icon = isOpen('internalMode') ? 'fa fa-industry' : 'fa fa-user';
  document.getElementById('internal-mode-icon').classList = icon;
  const toggleButton = getInternalModeToggleButton();
  isOpen('internalMode')
    ? toggleButton.classList.add('internal')
    : toggleButton.classList.remove('internal');
}

/** Set internal mode toggle button state upon load. */
addEventListener('load', () => {
  getInternalModeToggleButton().classList.add('visible');
  setInternalModeIcon();
});
