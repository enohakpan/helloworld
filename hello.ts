const greeting: string = "Hello, World!";

function greet(name?: string): string {
  return name ? `Hello, ${name}!` : greeting;
}

console.log(greet());
