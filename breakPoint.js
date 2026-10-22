function sumAges(str) {
    const parts = str.split("  ");
    let total = 0;
    for (let i = 0; i < parts.length; i++) {
        total += parseInt(parts[i])
    }
    return total;
}
console.log(sumAges("10  20   30 "));