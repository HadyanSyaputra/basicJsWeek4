const algoritma = () => {
    const jumlah = 100;
    const arrayNumbers = [];

    for (let i = 0; i < jumlah; i++) {
      const number = Math.floor(Math.random() * 50);
    arrayNumbers.push(number);
    }

    const indexGenap = arrayNumbers.filter((_, index) => index % 2 === 0);
    const indexGanjil = arrayNumbers.filter((_, index) => index % 2 !== 0);

    console.log("Numbers:", arrayNumbers);
    console.log("Index genap Numbers:", indexGenap);
    console.log("Index ganjil Numbers:", indexGanjil);

    // Function to calculate the minimum value in an array
    const cariMinimal = (array) => {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
        min = array[i];
        }
    }
    return min;
    };

    // Function to calculate the maximum value in an array
    const cariMaksimal = (array) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
        max = array[i];
        }
    }
    return max;
    };

    // Function to calculate the sum of all values in an array
    const cariTotal = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
    };

    // Function to calculate the mean (average) of values in an array
    const cariRataRata = (array) => {
    const total = cariTotal(array);
    return total / array.length;
    };

    // Calculate and display the statistics for evenIndexedNumbers
    console.log('index genap:')
    console.log("Minimum:", cariMinimal(indexGenap));
    console.log("Maximum:", cariMaksimal(indexGenap));
    console.log("Total:", cariTotal(indexGenap));
    console.log("Mean:", cariRataRata(indexGenap));

    // Calculate and display the statistics for oddIndexedNumbers
    console.log('index ganjil:')
    console.log("Minimum:", cariMinimal(indexGanjil));
    console.log("Maximum:", cariMaksimal(indexGanjil));
    console.log("Total:", cariTotal(indexGanjil));
    console.log("Mean:", cariRataRata(indexGanjil));


};

algoritma()