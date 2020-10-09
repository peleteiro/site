module.exports = {
  origin: {
    //delegate: { getFileParams: (file, params) => Promise.resolve(params) },
    //ignores: (file) => file.Key.endsWith('.zip'),
    //ignorePatterns: ['*.zip'],
    root: './public',
  },

  target: {
    //delegate: { putFileParams: (file, params) => Promise.resolve(params) },
    //ignores: (file) => file.Key.endsWith('.zip'),
    //ignorePatterns: ['*.zip'],
    root: 's3://peleteiro.net',
  },

  schemaVersion: 2, // Config file schema (always 2)
}
