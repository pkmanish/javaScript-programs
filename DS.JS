const sumUpTo = n => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};

const sumUpTpv2 = n => {
    return (n * (n + 1)) / 2;
};

let t1, t2;

t1 = Date.now();
sumUpTo(2500000000);
t2 = Date.now();
console.log(`${(t2 - t1) / 1000} seconds`);

t1 = Date.now();
sumUpTpv2(2500000000);
t2 = Date.now();
console.log(`${(t2 - t1) / 1000} seconds`);
