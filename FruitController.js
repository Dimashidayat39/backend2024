/**
 * TODO 3:
 * - Import fruits dari data/fruits.js
 * - Refactor variable ke ES6 variable
 */

const fruits = require("./fruits");

// TODO 4: Buat method index
function index() {
    console.log("Method index - Menampilkan Buah");
    console.log(fruits);
}

// TODO 5: Buat method store
function store(name) {
    console.log(`\nMethod store - Menambahkan buah ${name}`);
    fruits.push(name);
    console.log(fruits);
}

// TODO 6: Buat method update
function update(position, name) {
    if (position < fruits.length) {
        console.log(`\nMethod update - Update data ${position} menjadi ${name}`);
        fruits[position] = name;
        console.log(fruits);
    } else {
        console.log(`\nPosition ${position} tidak valid`);
    }
}

// TODO 7: Buat method destroy
function destroy(position) {
    if (position < fruits.length) {
        console.log(`\nMethod destroy - Menghapus data ${position}`);
        fruits.splice(position, 1);
        console.log(fruits);
    } else {
        console.log(`\nPosition ${position} tidak valid`);
    }
}

/** 
 * TODO 8: export semua method 
 */
module.exports = { index, store, update, destroy };
