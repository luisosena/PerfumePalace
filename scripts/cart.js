import { mountHeader, /*getHeaderHTML*/ headerHTML, mountFooter, footerHTML } from './global.js';

// Mount header into `.header-js` on this page. Since `src/cart.html` is one level deeper
// than `index.html`, assets live at `../images/...` from here.
mountHeader(document, '../');

/*
// Optional: log the header HTML used on this pag
console.log(getHeaderHTML('../'));
*/

mountFooter(document, `../`);
