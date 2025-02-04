const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    minimize: () => ipcRenderer.send('Window', 'minimize'),
    maximize: () => ipcRenderer.send('Window', 'maximize'),
    close: () => ipcRenderer.send('Window', 'close'),
    descargar: (version) => ipcRenderer.send('descargar-version', version)
});
