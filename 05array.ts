type Names = string[];
let names: Names = ["hello", "world"]
console.log(names[1])

//只读数组，const 断言
const arr = [0, 1]
arr[0] = 0

// const arr1: readonly number[] = [0, 1]
// arr1.push(3)

// const arr2 = [0, 1] as const;
// arr2[0] = 8;

// 多维数组
let multi: number[][] = [[1, 2], [3, 4]]
console.log(multi)