let i = 1;

function f2( i ) {
    console.log(`F2 ${i}`);
}

function f1( i, j ) {
    f2(i);
    console.log(`F1 ${i} - ${j}`);
}

for ( ; i < 4; i++) {
    f1(i, 10);
}


console.log("linha 1");
console.log("linha 2");