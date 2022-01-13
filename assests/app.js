// let age = 23

// let brand = 'hello'
// console.log(typeof brand)
// console.log(brand)
// console.log(typeof [2,3,4])

//Assignment Operators

// let age = 20
// // age += 9
// console.log(age++)
// console.log(age)

// const age = 80
// console.log(age)

// let a = 10
// let b = 15 
// console.log(a > b)
// console.log(a < b)
// console.log(a == b)

// let a = 10
// let b = '10'

// console.log(a === b)

//arithmatic operators
//  let a = 10
// let b = "1.10"

// console.log(Number(b)+a)

// //logical opeators

// console.log("true && true ", true && true)
// console.log("true && false ", true && false)
// console.log("false && true ", false && true)
// console.log("false && false ", false && false)

// console.log("true && true ", true || true)
// console.log("true && false ", true || false)
// console.log("false && true ", false || true)
// console.log("false && false ", false || false)

// function greet1() {
    //     console.log("good morning")
    // }
    
// let greet2 = () => {
//     console.log("good morning")
//    }
// // greet1()
// greet2()

// const temp ={
//     age: 18,
//     brand: "mercerdes",
//     getBrand: function() { console.log(this.brand) }
// }

// console.log(temp.age)
// console.log(temp['brand'])

// temp.getBrand()
// console.log(window.innerWidth)

// window.alert("this is alert")
// console.warn("this is alert")
// console.error("this is alert")
// console.log("this is alert")

// let arr = [1,2.3,35,"strings","b"]

// // console.log(arr[0])

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

let arr = [1, 2, 3, 4, 5]

const callback = function(){
    console.log("you called me")
}

arr.forEach(callback)

