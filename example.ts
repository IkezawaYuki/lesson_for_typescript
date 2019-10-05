function expo2(amount: number){
  return amount **2
}

console.log(expo2(200))
//console.log(expo2("100"))

function taxed(amount: number): number{
  return amount * 1.1
}

function fee(amount: number): number{
  return amount * 1.4
}

function price(amount: number): string{
  return `${fee(amount)}`
}

let flag: boolean = true
let n: number = 300
let color: string = "moji"

let words: string[] = ["dog", "cat", "human"]
//let err_w: string[] = ["aa", 3, true]

let num: Array<number> = [2,3,4,5]

let x: [string, number]
// x = ["hello", 3]
// //x = [3, "hh"]

// console.log(x[0].substr(1))
//console.log(x[1].substr(2))
