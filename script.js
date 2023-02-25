// task 1

// let arr1 = [1, 2, 3];
//
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);

// task 2

// let arr2 = [1, 2, 3];
//
// function sumArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i];
//     }
//     return sum;
// }
//
// console.log(sumArr(arr2));

// task 3

// let arr = ['a', 'b', 'c', 'd'];
//
// function toStrWithPlus (arr) {
//     return arr.join('+');
// }
//
// console.log(toStrWithPlus(arr));

// task 4
//
// let anyArr = ['rb', 'nl', 5, 9, 'hos', true, null];
//
// function findArrLength (arr) {
//     return arr.length;
// }
//
// console.log(findArrLength(anyArr));

//task 5

// let someArr = [false, 8, 'naff', true, null, 3, 'doc'];
//
// function findLastElem(arr) {
//     console.log(arr[arr.length - 1]);
// }
//
// findLastElem(someArr);

//task 6

// let arr = [ 'a', 'b', 'c'];
//
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
//
// console.log(arr);

// task 7

// let arrNum = [3, 5, 8, 14, 56, 34, 93];
//
// const addThree = (arr) => {
//     let newArr = arr.map((elem) => elem + 3);
//     return newArr;
// }
//
// console.log(addThree(arrNum));

// task 8

// let array = [1, 2, 3];
//
// const increaseArr = (arr) => {
//     let newArr = arr.map((elem) => (++elem));
//     return newArr;
// }
//
// console.log(increaseArr(array));

// task 9
//
// let arr = [1, 2, 3];
//
// arr[3] = 4;
// arr[4] = 5;
//
// console.log(arr);

// task 10

// let arr = [];
//
// arr[3] = 'a';
// arr[8] = 'b';
//
// console.log(arr.length);

// task 11

// let arr = [];
//
// const fillArr = (arr) => {
//     for (let i = 1; i <= 3; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
//
// console.log(fillArr(arr));

// task 12

// let arr = [1, 2, 3];
//
// const fillArr = (arr) => {
//     for (let i = 4; i <= 5; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
//
// console.log(fillArr(arr));

// task 13

// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key]);

// task 14

// let arr = [1, 2, 3, 4, 5];
//
// let key1 = 1;
// let key2 = 2;
//
// console.log(arr[key1] + arr[key2]);

// task 15

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// delete arr[2];
// delete arr[3];
//
// console.log(arr);
// console.log(arr.length);

// task 16

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);

// task 17

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

//task 18

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// task 19

// let arr = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
// ];
//
// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);

// task 20

// let arr = [[1, 2], [3, 4], [5, 6]];
//
// console.log(arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1]);

// task 21

// let arr = [
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [5, 6],
//         [7, 8],
//     ],
// ];
//
// console.log(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]);

// task 22

// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
//
// console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1]
//     + arr[1][0] + arr[1][1][0] + arr[1][1][1]);

// task 23

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
//
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         sum += elem;
//     }
// }
//
// console.log(sum);

// task 24

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
//
// for (let subArr of arr) {
//     for (let subSubArr of subArr) {
//         for (let elem of subSubArr) {
//             sum += elem;
//         }
//     }
// }
//
// console.log(sum);

// task 25

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
//
// console.log(sum);

// task 26

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[i][j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
//
// console.log(sum);

// task 27

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 5; j++) {
//         arr[i].push(j + 1);
//     }
// }
//
// console.log(arr);

// task 28

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 4; j++) {
//         arr[i].push('x');
//     }
// }
//
// console.log(arr);

// task 29

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//
//         for (let k = 0; k < 5; k++){
//             arr[i][j].push(k + 1);
//         }
//     }
// }
//
// console.log(arr);

// task 30

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// task 31

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// task 32

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// task 33

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// task 34

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// task 35

// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);

// task 36

// let arr = [];
//
// for (let i = 0, k = 1; i < 4; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 2; j++) {
//         arr[i].push(k++);
//     }
// }
//
// console.log(arr);

// task 37

// let arr = [];
//
// for (let i = 0, k = 0; i < 4; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i].push(k += 2);
//     }
// }
//
// console.log(arr);

// task 38

// let arr = [];
//
// for (let i = 0, c = 1; i < 2; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//
//         for (let k = 0; k < 2; k++) {
//             arr[i][j].push(c++);
//         }
//     }
// }
//
// console.log(arr);

// task 39

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);

// task 40

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

// task 41

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);

// task 42

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);

// task 43

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

// task 44

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

// task 45

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

// task 46

// let arr = [];
//
// for (let i = 0, k = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = ++k;
//     }
// }
//
// console.log(arr);

// task 47

// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);

// task 48

// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);
