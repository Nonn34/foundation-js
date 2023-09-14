/*function callMe() {
  console.log("hello from callback function");
}

function greeting(callback) {
  console.log("hello world");
  callback();
}

greeting(callMe);*/

// - Annonymous Function -

/* function callMe() {
  console.log("Nonn ");
}

function callStranger() {
  console.log("and who is that?");
} 
const someoneCall = (callback) => {
 console.log("Oh hey!");
  callback();
}; */

// - translate to down below -

const someoneCall = (callback) => {
  console.log("Oh hey!");
  callback();
};

someoneCall(() => {
  console.log("Nonn");
});

// - when using callback with parameter -

const someoneCall2 = (callback) => {
  console.log("Oh hey!");
  callback("Nonn");
};

someoneCall2((name) => {
  console.log(`long time no see ${name}`);
});
