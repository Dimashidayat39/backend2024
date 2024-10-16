<?php

# Membuat class Animal
class Animal
{
    # Property animals
    public $animals;

    # Method constructor - mengisi data awal
    # Parameter: data hewan (array)
    public function __construct($data)
    {
        $this->animals = $data;
    }

    # Method index - menampilkan data animals
    public function index()
    {
        # Gunakan foreach untuk menampilkan data animals (array)
        foreach ($this->animals as $animal) {
            echo $animal . "<br>";
        }
    }

    # Method store - menambahkan hewan baru
    # Parameter: hewan baru
    public function store($data)
    {
        # Gunakan method array_push untuk menambahkan data baru
        array_push($this->animals, $data);
        echo "Dinosaurus '$data' berhasil ditambahkan.<br>";
    }

    # Method update - mengupdate hewan
    # Parameter: index dan hewan baru
    public function update($index, $data)
    {
        if (isset($this->animals[$index])) {
            $oldAnimal = $this->animals[$index];
            $this->animals[$index] = $data;
            echo "Dinosaurus '$oldAnimal' berhasil diubah menjadi '$data'.<br>";
        } else {
            echo "Index tidak valid.<br>";
        }
    }

    # Method destroy - menghapus hewan
    # Parameter: index
    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            $deletedAnimal = $this->animals[$index];
            array_splice($this->animals, $index, 1);  # Menghapus hewan dengan array_splice
            echo "Dinosaurus '$deletedAnimal' berhasil dihapus.<br>";
        } else {
            echo "Index tidak valid.<br>";
        }
    }
}

# Membuat object
# Kirimkan data dinosaurus (array) ke constructor
$animal = new Animal([
    "Tyrannosaurus",
    "Triceratops",
    "Velociraptor",
    "Stegosaurus"
]);

# Menampilkan seluruh dinosaurus
echo "Index - Menampilkan seluruh dinosaurus <br>";
$animal->index();
echo "<br>";

# Menambahkan dinosaurus baru
echo "Store - Menambahkan dinosaurus baru <br>";
$animal->store('Brachiosaurus');
$animal->index();
echo "<br>";

# Mengupdate dinosaurus
echo "Update - Mengupdate dinosaurus <br>";
$animal->update(0, 'Spinosaurus');
$animal->index();
echo "<br>";

# Menghapus dinosaurus
echo "Destroy - Menghapus dinosaurus <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";

?>
