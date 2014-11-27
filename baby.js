var result = 0;

Array.prototype.forEach.call(process.argv, function (elem, i) {
    if (i >= 2) {
        result += +elem;
    }
});

console.log(result);
