// const tinderUser = new Object() //singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "shanu";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "shanu",
      lastName: "tiwari",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
// const obj3 = Object.assign(obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const course = {
  courseName: "JS",
  price: "999",
  student: "shanu",
};

const { student : st} = course;
console.log(st);
