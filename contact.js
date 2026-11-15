const dialog = document.querySelector('#contact-dialog');
const trigger = document.querySelector('.contact-trigger');
const closeButton = document.querySelector('.close-dialog');
const copyButton = document.querySelector('.copy-email');
const status = document.querySelector('.copy-status');

trigger.addEventListener('click', () => {
  status.textContent = '';
  dialog.showModal();
});
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog &&
      (event.clientX < bounds.left || event.clientX > bounds.right ||
       event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    dialog.close();
  }
});
dialog.addEventListener('close', () => trigger.focus());
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('eganathan.dev@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Couldn’t copy automatically. You can select the email address above.';
  }
});
