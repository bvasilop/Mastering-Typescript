function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return ` Hi ${person}! `;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};
square(3);
greet("Bill");
doSomething("Bill", 47, true);

function greet(person: string = "stranger"): string {
  // returns string
  // default variables
  return ` Hi ${person}! `;
}
greet(); // should default to stranger
function rando(num: number) {
  if(Math.random() < 0.5){
    return num.toString();
  }
  return num:
}

const add = (x: number, y: number) : number => {
  return x + y;
};

const colors =["red", "orange", "yellow"];
colors.map(color => {
  return color.toUpperCase();
})

function printTwice(msg: string): void { //annotating to return nothing
  console.log(msg);
  console.log(msg);
}