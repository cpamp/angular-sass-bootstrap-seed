const path = require('path');
var rootDir = path.resolve(__dirname, '..');

module.exports = {
    rootDir: rootDir,
    local: {
        publicPath: "http://localhost:8765",
        outDir: path.resolve(rootDir, "dist/local")
    },
    staging: {
        publicPath: "http://staging.localhost:8765",
        outDir: path.resolve(rootDir, "dist/staging")
    },
    production: {
        publicPath: "http://production.localhost:8765",
        outDir: path.resolve(rootDir, "dist/production")
    }
}