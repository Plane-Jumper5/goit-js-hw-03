function filterArray(numbers, value) {
    // Створення порожнього масиву для зберігання підходящих чисел
    let filteredArray = [];
    
    // Цикл для ітерації кожного елемента масиву numbers
    for (let i = 0; i < numbers.length; i++) {
        // Перевірка, чи поточний елемент більший за значення value
        if (numbers[i] > value) {
            // Якщо так, додавання елемента до нового масиву
            filteredArray.push(numbers[i]);
        }
    }
    
    // Повернення нового масиву з підходящими числами
    return filteredArray;
}



console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
