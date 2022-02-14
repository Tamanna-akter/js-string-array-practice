// const task = "Practice Makes a person perfect";
// const index = task.toLowerCase().indexOf("M");
// console.log(index);

// const str1 = 'Bangladesh is a beautiful country.'; console.log(str1.endsWith("country"));

// const str = 'I love coding more than eating.';
// const result = str.slice(2, 6);
// console.log(result)

// for (let i== 0; i < 10; i++) {

// }

// const str1 = 'first';
// const str2 = 'second';
// const result = str2.concat(str1);
// console.log(result);

// const array = ["121", "12", "1", "112", "111"];

// console.log(array.sort());


//১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো। 

// const foods = ['Mango', 'apple', 'meat', 'chicken', 'burger', 'jam'];
// const searching = 'm';

// const output = [];
// for (const foodName of foods) {
//     if (foodName.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(foodName);
//     }
// }
//console.log(output);

// 2...একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 

// এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়।  

// const friendsName = ['md rakib', 'sharif', 'saif', 'MD shafi', 'Md anis'];
// const searching = 'md';
// const output = [];
// for (const friends of friendsName) {
//     if (friends.startsWith(searching)) {
//         output.push(friends);
//     }
// }
// console.log(output);
// function friends(friend) {
//     if (Array.isArray(friend) == false) {
//         return 'Please provide an array';
//     }
//     const searching = 'md';
//     const output = [];
//     for (const friendsName of friend) {
//         if (friendsName.toLowerCase().startsWith(searching.toLowerCase())) {
//             output.push(friendsName);
//         }
//     }
//     return output;
// }
// console.log(friends(['md rakib', 'sharif', 'saif', 'MD shafi', 'Md anis']));

//3.... fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে।

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const fruitsSliced = fruits.slice(1, 3);
console.log(fruitsSliced);