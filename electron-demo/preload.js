// const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('electronAPI', {
//   openFile: () => ipcRenderer.invoke('dialog:openFile')
// })

// const fs = require('fs')

// fs.writeFile('/Users/vimalakirti/Desktop/example.txt', 'abc', () => {
//   console.log('done.')
// })

const { contextBridge, ipcRenderer } = require('electron')

const handleSend = async () => {
  let fallback = await ipcRenderer.invoke('send-event', 'hahahah')
  console.log('fallback', fallback)
}

contextBridge.exposeInMainWorld('myApi', {
  handleSend
})