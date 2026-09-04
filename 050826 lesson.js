export function greet(name) {
  return `Hello, ${name}!`;
}
 
export const VERSION = "1.0";
 
// Default export: ONE per file, the "main thing" this file provides
export default function farewell(name) {
  return `Goodbye, ${name}!`;
}