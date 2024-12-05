/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructuring Object
 */

const { index, store, update, destroy } = require("./fruitController");

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 * - Jalankan program: node app.js
 */
const main = () => {
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(
        0);
    };
    
    main();
    