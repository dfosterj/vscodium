(function() {
  const notification = document.createElement('div');
  notification.id = 'save-notification';
  notification.innerText = 'File Saved!';
  document.body.appendChild(notification);

  vscode.workspace.onDidSaveTextDocument(() => {
    notification.style.opacity = 1;
    setTimeout(() => {
      notification.style.opacity = 0;
    }, 2000); // Display the notification for 2 seconds
  });
})();

