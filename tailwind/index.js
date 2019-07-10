const fs = require('fs');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const customSelectors = require('postcss-custom-selectors');
const decache = require('decache');

const currentPath = process.cwd();

const tailwindConfigPath = currentPath + '/tailwind/defaultConfig.js';
const styleInputPath = currentPath + '/src/styles/global.css';
const styleOutputDir = currentPath + '/static/';

function processTailwindCSS() {
  fs.readFile(styleInputPath, (err, css) => {
    postcss([postcssImport, tailwindcss(tailwindConfigPath), customSelectors])
      .process(css, {
        from: styleInputPath,
        to: styleOutputDir
      })
      .then(result => {
        fs.writeFile(styleOutputDir + 'global.css', result.css, () => true);

        if (result.map) {
          fs.writeFile(
            styleOutputDir + 'global.css.map',
            result.map,
            () => true
          );
        }
      });
  });
}

processTailwindCSS();
decache(currentPath + '/tailwind.config.js');

console.log('watching tailwind config');

fs.watch(currentPath + '/tailwind.config.js', { recursive: true }, () => {
  decache(currentPath + '/tailwind.config.js');
  processTailwindCSS();
  console.log('tailwind config changed');
});
