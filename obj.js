// let obj1={
//     name:"meenu",
//     age:23,
//     place:"kym",
//     np:function  () {
//         return this.name+" "+this.place
        
//     }

// }
// console.log(obj1);
// console.log(obj1.np());

// console.log(obj1.name.toUpperCase());

// -------------------------------------------------

// var user={
//     firstname:"meenu",
//     lastname:"ns",
//     role:"admin",
//     logincount:32
// }
// console.log(user.firstname);
// console.log(user.logincount);
// user.logincount=40
// console.log(user.logincount);

//-------------------------------------------------


var user={
    firstname:"meenu",
    lastname:"ns",
    role:"admin",
    logincount:32,
    fbsignedin:true,
    courselist:[],
    buycoures:function(coursename){
        this.courselist.push(coursename)

    },
    getcoursecount:function () {
        return `${this.firstname} is enrolled in a total of ${this.courselist.length} course ` 
        
    }
    

}

console.log(user.getcoursecount());
user.buycoures("react js")
console.log(user.getcoursecount());