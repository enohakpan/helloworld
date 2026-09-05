import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hello world");
console.log("What is your name?");

rl.on("line", (name: string) => {
  console.log(`Hello ${name.trim()}`);
  rl.close();
});
