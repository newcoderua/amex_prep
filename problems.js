//hashmap, tinyurl
//how does internet work?
// OOP questions
// do sql
// TSP travelling salesperson problem solve with naive and dynamic progr
// for onsite do -> hackerrank, linked lists and trees
// Things about queues, stacks, and other basic data structures
// Projects, Spring Framework, Database Normal Forms, Core Java, Tomcat Connection Pooling, how to able design a website to handle large incoming traffic, Choosing a database, Networking commands in Linux, JavaScript callbacks, Stacks and Queues and working of SSL/TLS protocol.

//Ken Chenault _ CEO

//questions to ask
// "What do my first 90 days look like?"
// "What are the key things you'd like to help me to achieve?"
//very important thank-you notes

//TSP problem
//Naive solution is n!, find all permutations 1 start, 1 end.
//find all permutations of [2,3,4], which is 6 total.
//then find a price for each, return smallest number.

// // Write a recursive method that returns the first "num" factorial numbers.
// // Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
// // is 1!, the 3rd factorial is 2!, etc.
// // 0! = 1
// // 1! = 1
// // 2! = 2 * 1 = 2
// // 3! = 1 * 2 * 3 = 6
// // 4! = 1 * 2 * 3 * 4 = 24
//
// //recursive method
// function recFact(num) {
//   if (num === 1) return [1];
//
//   const facs = recFact(num - 1);
//   facs.push(facs[facs.length - 1] * (num - 1));
//   return facs;
// }
//
// //iterative method
// function factorial(num) {
//   var result = 1;
//   for (var i = 1; i < num ; i++) {
//     result += result * i;
//   }
//   return result;
// }
//
//
// function arrayFact(nums) {
//   var result = [1];   //[1, 1, 2, 6]
//   var i = 1;
//   while (result.length < nums) {
//     result.push(factorial(i));
//     i++;
//   }
//   return result;
// }
//
//
// // this is kinda ceasar cipher
// const replacement = (str) => {
//   var alphabet ='abcdefghijklmnopqrstuvwxyz';
//   var result = '';
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//      if (((alphabet.indexOf(char) + 1) % alphabet.length) === 0) {
//        result += "A";
//      } else {
//        result += isVowel(alphabet[alphabet.indexOf(char) + 1]);
//      }
//   }
//   return result;
// }
//
// const isVowel = (char) => {
//   var vowels = 'aieou';
//   if (vowels.indexOf(char) > 0) {
//     return char.toUpperCase();
//   }
//   return char;
// }
//
// // how much does it cost to clean all the windows in la
// const solution = () => {
//   Like the golf ball question, this problem can only be solved by
//   making an educated guess at several variables. If Seattle
//   consists of 10,000 city blocks with 600 windows per block, and
//   the window washer spends five minutes per window while being paid
//    a rate of $20 per hour, the answer would be approximately
//     $10 million. On the other hand, the ability to keep things
//     simple can sometimes be just as valuable as on-the-fly math
//     skills. In that case, an answer like "$10 per window"
//     (and you’d get paid 6 times as much!) would also suffice.
// }
//
// // HOW MANY TIMES DO A CLOCK’S HANDS OVERLAP IN A DAY?
// const solution = () => {
//   The only time the minute and the hour hand come
//   together perfectly on the hour is at 12 o’ clock.
//    After that the overlap occurs slightly after 1:05,
//     then slightly after 2:10, etc. By the time the
//     minute hand catches up to the hour hand the
//     eleventh time, the hour hand has had enough of a
//     head start that they don’t cross paths until 12
//     o’ clock, thus beginning the second twelve-hour
//     cycle of the day. This means that there are
//     only 11 times the two hands overlap every 12
//     hours, so they come together a total of 22
//     times during one day.
// }
//
// // The four principles of OOP.
// const solution = () => {
//   return(
//   1. Encapsulation means that the internal representation of
//    an object is generally hidden from view outside of
//    the object’s definition. Typically, only the object’s
//    own methods can directly inspect or manipulate its
//    fields.
//   Encapsulation is the hiding of data implementation by
//   restricting access to accessors and mutators.
//
//   2. Abstraction
//     In short, data abstraction is nothing more than the
//     implementation of an object that contains the same
//     essential properties and actions we can find in the
//     original object we are representing.
//
//    3. Inheritance
//     In heritance is a way to reuse code of existing objects,
//      or to establish a subtype from an existing object,
//      or both
//
//    4. Polymorphism
//     Polymorphism means one name, many forms. Polymorphism
//      manifests itself by having multiple methods all with the same name, but slightly different functionality.)
// }

// javascript Implement a method for the nth Fibonacci number both recursively and not recursively.
//iterative solution 0(n)
// function fibonacci(num){
//   var a = 1, b = 0, temp;
//
//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }
//
//   return b;
// }
//
// //recursive
// function fibNaive(n) {
//   if (n < 2) {
//     return 1;
//   } else {
//     return fibNaive(n - 2) + fibNaive(n - 1);
//   }
// }

// greatest challenge and how you overcame it
// Series 56 proprietary trader examination provided by FINRA.
// It took me 7 months to pass it. I took 3 attemts. I failed first
// time. I got 68%. To pass I need 70%. So I bought another books,
// I bought online course on coursera. next try I got 69%, still not enough.
// I made it.

//service oriented architectures, map-reduce, asynchronous processing, load balancing,

// Code and solution should be
// 1. scalable, robust, and well-tested code
// 2. goal is to write real "production ready" code.
// 3. check for edge cases and validate that bad input cant slip through

// Blue Box Values
// 1. Customer Commitment
// We put our customers at the center of everything we do, and treat them the way we would want to be
// treated.
// 2. Quality
// We strive to deliver best-in-class products and services that our customers love.
// 3. Teamwork
// We work together, across business and geographic boundaries, to help the company win.
// 4. Respect for People
// We value diverse backgrounds and perspectives, celebrate differences and treat each other like adult
// 5. A Will to Win
// We demonstrate a strong competitive spirit and passion for succeeding in the right way
// 6. Personal Accountability
// We take responsibility for delivering results and learn from our mistakes.


// What is responsive web design?
// Responsive Web Design makes your web page look good on all devices (desktops, tablets, and phones).
// Responsive Web Design is about using HTML and CSS to resize, hide, shrink, enlarge, or move the content to make it look good on any screen:
//

//Singleton
// Definition
// Ensure a class has only one instance and provide a global point of access to it.
// Summary
// The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.
// var Singleton = (function () {
//     var instance;
//
//     function createInstance() {
//         var object = new Object("I am the instance");
//         return object;
//     }
//
//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();
//
// function run() {
//
//     var instance1 = Singleton.getInstance();
//     var instance2 = Singleton.getInstance();
//
//     alert("Same instance? " + (instance1 === instance2));
// }


// What is the angle between the minute and hour hand at 12:00pm
// 0 or 360

// Why American Express?
// 1. I have bachelor degree in economics, I used to work as stock trader
// 2. Than I narrowed down to 4-5 big financial institutions. Amex was one of those
// 3. Then I continue my research to customer reviews, rates on glassdoor, geekforgeeks, etc.
// 4. Manhattan is our headquarters. Phoenix, Salt Lake City, and Fort Lauderdale. So I do not mind to relocate if I have to.
// 6. Your are very social active, I am talking about your youtube.

//find duplicate
const findDup = (array) => {
  var obj = {};
  // console.log(array);
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (obj[num]) {
      return num;
    } else {
      obj[num] = true;
    }
  }
}

const array = () => {
  var result = [3];
  var i = 0;
  while (result.length <= 10) {
    result.push(i);
    i++;
  }
  return result;
}

//
// What Is Agile?
// Agile software development is based on an incremental, iterative approach. Instead of in-depth planning at the beginning of the project, Agile methodologies are open to changing requirements over time and encourages constant feedback from the end users.
// What Is Scrum?
// Scrum is a subset of Agile and one of the most popular process frameworks for implementing Agile. It is an iterative software development model used to manage complex software and product development. Fixed-length iterations, called sprints lasting one to two weeks long, allow the team to ship software on a regular cadence. At the end of each sprint, stakeholders and team members meet to plan next steps.
// How Waterfall Deals with Software Requirements
// Waterfall projects define all software requirements upfront. The project cannot proceed unless these requirements have been identified and documented.
// What Is Kanban?
// Kanban is Japanese for “visual sign” or “card.” It is a visual framework used to implement Agile that shows what to produce, when to produce it, and how much to produce. It encourages small, incremental changes to your current system and does not require a certain set up or procedure


// List primitive data types : -> size 32bits
// string.
// integer.
// boolean.
// undefined.
// null.
// symbol.
//
// bitwise operations
// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


// overloading vs overriding
// 1)
// Method overloading is used to increase the readability of the program.
// Method overriding is used to provide the specific implementation of the method that is already provided by its super class.
//
// 2)
// Method overloading is performed within class.
// Method overriding occurs in two classes that have IS-A (inheritance) relationship.
//
// 3)
// In case of method overloading, parameter must be different.
// In case of method overriding, parameter must be same.
//
// 4)
// Method overloading is the example of compile time polymorphism.
// Method overriding is the example of run time polymorphism.
//
// 5)
// In java, method overloading can't be performed by changing return type of the method only. Return type can be same or different in method overloading. But you must have to change the parameter.
// Return type must be same or covariant in method overriding.
//
// Java Method Overloading example
//
// class OverloadingExample{
// static int add(int a,int b){return a+b;}
// static int add(int a,int b,int c){return a+b+c;}
// }
// Java Method Overriding example
//
//
//
// class Animal{
// void eat(){System.out.println("eating...");}
// }
// class Dog extends Animal{
// void eat(){System.out.println("eating bread...");}
// }

// What's a time you had think outside the box to solve a problem.
// fuel station and refactor backend

// -- Why should we hire you? -- “I think that my experience
// in the (widget) industry and my ability to work
// autonomously make me a good match for this position.”

// Hashmap is basically mapping through the key value pairs, let's say we have "hello" => "world",
// "hello" and "world" would be stored in one node.
// So, to clarify Hashmap is upgraded Linked list, where instead of storing values we gonna store key/pair values.

// ✅DATA MODELING
//
// ✅Set --- not ordered, unique elements.
// you can have:
// include? -> O(n)
// insert -> O(n)
// delete -> 0(n) , all this operation work if we use [2, 1, "hi"],
// but it is very slow.
// That is why I need another way:
// so, we can {2, 1, 4...} -> let's assume that all elements are same type.
// To start we create an array with length biggest element minus lowest element. that assign true or false whether element exists or not.
// { 2, 1, 4, 0 } -> [true, true, true, false, true]
//                     0     1      2     3      4
// But initially I set everything to false.
// RAM - random access memory.
//
// Set is ADT - abstract data type.
// BLA-BLA-bla. At the end we gonna use buckets and %, and hashing each element...
//
// ✅Linked List
// ✅Hashmap
// ✅Caches
// In computing, a cache /ˈkæʃ/ KASH,[1] is a hardware or software component that stores data so future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation, or the duplicate of data stored elsewhere.
// Caching is example with mario, where we want to store previuos objects, their position etc. That is why we use cache.
//
// Least recently used
// Let's say we can store only 4 things in CACHE. CACHE_SIZE = 4. it is very small, usually it is like 40.000, but let's say 4.
// Heuristic - it is kind of rule of thumb. It means if we want to add 5th element to 4-size cache we implement heuristic rule(which is LRU), so we will delete the least recently used.
// So to build LRU cache we use hashmap, we are saying that keys are objects(mario) and values are unique timestamps.
// So, to eject it is O(1), because we can use linked list in this case. [] -> [] -> [] we just need to say that @head would be not first , but second one. And append to the @end new element. Insertion/update is also 0(1), let's say we want to update timestamp of some element, we just need to update links of @next and @prev of close elements.
// So to sum up now for caching, if we use:
// Hash map:
// - EJECTION -> O(n)
// - INSERT -> O(n)
// - READ -> 0(1)
// LL :
// - EJECTION -> O(1)
// - INSERT -> O(1)
// - READ -> 0(n)
// ✅LRU Cache
// So if we want to speed up. everything is O(1) we need to concatanate those data structures.
// {
//   mario => [ marioObject],
//                 🔽
//   bowser => [bowserObject],
//                 🔽
//   cloud => [cloudObject]
// }

// Agile is a time boxed, iterative approach to software
// delivery that builds software incrementally from the
// start of the project, instead of trying to deliver it
// all at once near the end.

// How to approach a problem about design database:
//
//  1. Ask a lot questions for details
//  2. Define core objects, how model should look like. Name of class, attributes, methods.
//  3. Analyze relationships. Add asssociations - one-to-one, many-to-one, many-to-many.
//     Build actual tables, with columns etc.
// 4. Investigate actions, test your design out.
// 5. Another step is make database scalable. JOINS are generally very slow. Thus, you must denormalize your data. Think carefully, how data will be used - you ll probably need to duplicate the data in multiple tables.
