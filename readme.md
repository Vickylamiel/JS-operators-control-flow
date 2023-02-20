<!-- Question 1 & 2 -->
Arithmetic operators
+, -, *, /
E.g: 
let a = 7;
let b = 10;

Addition: console.log(a + b); 
 <!-- 17 -->
Multiplication: console.log(b * a);
 <!-- 70 -->

Assignment operators
=, +=, -=, *=, /=,
E.g:
Assignment: let x = 3;
            <!-- 3 -->
            let y = 5;
             <!-- 5 -->
Compound addition: y += 3; 
<!-- 8 -->
Compound multiplication: x *= 2;
 <!-- 6 -->

Comparison operators
==, ===, >=, <=, !=
E.g:
Equality: let x = 5;
          let y = '5';
console.log(x == y); 
<!-- true -->
Strict equality: console.log(x === y);
                 <!-- false -->

Logical operators
&&, ||, !
E.g:
Logical AND: console.log(true && true);
             <!-- true -->
             console.log(true && false); 
             <!-- false -->
Logical OR: console.log(true || true);
            <!-- true -->
            console.log(true || false);
             <!-- true -->

Bitwise operators
&, |, ~, ^
E.g:
Bitwise AND: console.log(5 & 3); 
<!-- 1 -->
Bitwise OR: console.log(5 | 3);
 <!-- 7 -->

<!-- Question 4 -->
for (let i = 1; i < 20; i += 7) {
    console.log(i);
} 
The result of this program will be: 1, 8, 15.
