<template>
  <div>
    <h1>
      aaa
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    // const person: {
    //   name: string
    // } = {
    //   name: 'hacj'
    // }
    // const person = {
    //   name: {
    //     last: 'j',
    //     first: 'h'
    //   }
    // }
    // type CloseSize = 'sm' | 'md' | 'xr'
    // const cs: CloseSize = 'md'
    // console.log(person.name)
    // const fruits: string[] = ['aaa']
    // const str: string = 'hoge'
    // const book = 'g'
    // const book: [string, number, boolean] = ['s', 1, true]
    // const book: string | number = 'g'
    // const book: 'book' = 'book1'
    // console.log(book)

    // let tmp: undefined
    // tmp = 1
    // function add(num1: number, num2: number): number {
    //   return num1 + num2
    // }
    // function func(num1: number): number {
    //   if (num1 > 5) {
    //     return num1
    //   }
    //   return 10
    // }
    // console.log(func(1))
    // console.log(add(2, 5))
    // const anotherAdd: (n1: number, n2: number) => number = add
    // console.log(anotherAdd(1, 2))
    // const doubleNUmber: (num: number) => number = num => num * 2
    // console.log(doubleNUmber(5))
    // function doubleAndHandle(num: number, cb: (num: number) => number): void {
    //   const doubleNum = cb(num * 2)
    //   console.log(doubleNum)
    //   console.log(num * num, 'doubleAndHandle')
    // }
    // doubleAndHandle(9, doubleNum => {
    //   return doubleNum
    // })
    // doubleAndHandle(9, doubleNum => doubleNum)
    // function error(message: string) {
    //   throw new Error(message)
    // }
    // console.log(error('hoge'))
    // const hoge = 'f'

    // class Person {
    //   name: string
    //   constructor(initName: string) {
    //     this.name = initName
    //   }

    //   greeting(age: number) {
    //     console.log(`俺は${this.name} ${age}さい`)
    //   }
    // }
    // const Quill = new Person('Quill')
    // Quill.greeting(5)
    // class Person {
    //   constructor(public name: string, private age: number) {}
    //   // name: string
    //   // private age: number
    //   // constructor(initName: string, initAge: number) {
    //   //   this.name = initName
    //   //   this.age = initAge
    //   // }
    //   incAge() {
    //     this.age += 1
    //   }

    //   greeting(this: Person) {
    //     console.log(`俺は${this.name} ${this.age}さい`)
    //   }
    // }
    // const Quill = new Person('Quill', 45)
    // Quill.greeting()
    // Quill.name
    // // const anotuher = {
    // //   name: 'name',
    // //   greeting: Quill.greeting()
    // // }
    // // anotuher.greeting

    // class Teacher extends Person {
    //   static gender = 'male'
    //   // constructor(name: string, age: number, private subject: string) {
    //   constructor(name: string, age: number, private _subject: string) {
    //     super(name, age)
    //   }
    //   sub(this: Teacher) {
    //     console.log(`sub: ${this._subject}`)
    //   }
    //   get subject() {
    //     console.log(this._subject)
    //     return this._subject
    //   }
    //   set subject(value) {
    //     this._subject = value
    //   }
    // }
    // const teacher = new Teacher('jack', 1, 'unko')
    // teacher.greeting()
    // teacher.subject
    // teacher.subject = 'tintin'
    // teacher.sub()
    // console.log(Teacher.gender)

    // abstract class Hoge {
    //   abstract naku(): void
    // }
    // class Fuga extends Hoge {
    //   naku(): void {
    //     console.log('waa')
    //   }
    // }
    // const fuga = new Fuga()
    // fuga.naku()

    // interface Test {
    //   greeting(message: string): void
    // }
    // const human = {
    //   greeting(message: number): void {
    //     console.log(message)
    //   }
    // }
    // human.greeting(1)
    // class Dev implements Test {
    //   greeting(message: string): void {
    //     console.log(message)
    //   }
    // }
    // type Namebable = {
    //   name: string
    //   nickName?: string
    // }
    // const nameable: Namebable = {
    //   name: 'name',
    //   nickName: 'nick'
    // }
    // console.log(nameable)

    // type Human = {
    //   age: number
    //   greeting(message: string): void
    // } & Namebable
    // class Dev implements Human {
    //   constructor(public name: string, public age: number) {}
    //   greeting(message: string): void {
    //     console.log(message)
    //   }
    // }
    // const dev = new Dev('name', 1)
    // dev.greeting('m')
    // class AAA {
    //   constructor(public name: string) {}
    // }
    // class BBB {
    //   constructor(private title: string, public aaa: AAA) {}
    // }
    // const aaa = new AAA('aaa')
    // const bbb = new BBB('bbb', aaa)
    // console.log(bbb.aaa.name)
    type A = {
      name: string
      role: string
    }
    class B {
      // name: string
      // follower: number
      constructor(public name: string, public follower: number) {}
    }
    type C = A | B
    function desc(c: C): void {
      console.log(c.name)
      if ('role' in c) {
        console.log(c.role)
      }
      if (c instanceof B) {
        console.log(c.follower)
      }
    }
    const input = document.getElementById('input') as HTMLInputElement
    input.value
    return {
      a: ''
    }
  }
})
</script>
