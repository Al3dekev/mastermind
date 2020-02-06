const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
  // Cree la fenetre du navigateur.
  let win = new BrowserWindow({
    width: 500,
    height: 600,
    //icon: __dirname + '/src/assets/icon.png',
    webPreferences: {
      nodeIntegration: true
    },
  });
  win.resizable = false;
  win.fullScreenable = false;
  win.autoHideMenuBar =  true;

  // Dev mode only
  win.webContents.openDevTools();

  // and load the index.html of the app.
  win.loadURL(url.format({
    protocol: 'file',
    slashes: true,
    pathname: `${__dirname}/dist/mastermind/index.html`
  }));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('close-app', () => {
  app.quit()
});


app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
