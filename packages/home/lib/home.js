const test = (name) => {
  return name?.name
}
test('222')
console.log(1)
class Person {
  age=1
  play(){
    console.log(this.age)
  }
}
const a=new Person()
a.play()
new Promise(() => {})
new Map()
Object.fromEntries([[1,2],[2,3]])