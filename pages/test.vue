<template>
  <div>
    <h1>
      aaa
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, useAsync } from '@nuxtjs/composition-api'
// import { DefaultApiClient, ApiClientInterface } from '../plugins/apiClient'

export default defineComponent({
  setup() {
    // injectの戻り値が T | void のUnion型のため
    // const client = inject<ApiClientInterface>(
    //   DefaultApiClient
    // ) as ApiClientInterface
    // const tasks = ref<any[]>([])

    // useAsync(async () => {
    //   try {
    //     tasks.value = await client.fetchTasks()
    //     console.log(tasks.value)
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })
    return {}
  }
})

// import { Post } from '../clean_archtecture_sample/post'
// import { PostRepository } from '../clean_archtecture_sample/post_repository'
// import { PostUsecase } from '../clean_archtecture_sample/post_usecase'
// import { PostController } from '../clean_archtecture_sample/post_controller'
// import axios from 'axios'
// const axiosClient = axios.create()
// const postRepository = new PostRepository(axiosClient)
// const postUsecase = new PostUsecase(postRepository)
// const postController = new PostController(postUsecase)
// const response = postController.getPostList()
// console.log(response)

// import Vue from 'vue'
// export default Vue.extend({
//   data() {
//     // const person: {
//     //   name: string
//     // } = {
//     //   name: 'hacj'
//     // }
//     // const person = {
//     //   name: {
//     //     last: 'j',
//     //     first: 'h'
//     //   }
//     // }
//     // type CloseSize = 'sm' | 'md' | 'xr'
//     // const cs: CloseSize = 'md'
//     // console.log(person.name)
//     // const fruits: string[] = ['aaa']
//     // const str: string = 'hoge'
//     // const book = 'g'
//     // const book: [string, number, boolean] = ['s', 1, true]
//     // const book: string | number = 'g'
//     // const book: 'book' = 'book1'
//     // console.log(book)

//     // let tmp: undefined
//     // tmp = 1
//     // function add(num1: number, num2: number): number {
//     //   return num1 + num2
//     // }
//     // function func(num1: number): number {
//     //   if (num1 > 5) {
//     //     return num1
//     //   }
//     //   return 10
//     // }
//     // console.log(func(1))
//     // console.log(add(2, 5))
//     // const anotherAdd: (n1: number, n2: number) => number = add
//     // console.log(anotherAdd(1, 2))
//     // const doubleNUmber: (num: number) => number = num => num * 2
//     // console.log(doubleNUmber(5))
//     // function doubleAndHandle(num: number, cb: (num: number) => number): void {
//     //   const doubleNum = cb(num * 2)
//     //   console.log(doubleNum)
//     //   console.log(num * num, 'doubleAndHandle')
//     // }
//     // doubleAndHandle(9, doubleNum => {
//     //   return doubleNum
//     // })
//     // doubleAndHandle(9, doubleNum => doubleNum)
//     // function error(message: string) {
//     //   throw new Error(message)
//     // }
//     // console.log(error('hoge'))
//     // const hoge = 'f'

//     // class Person {
//     //   name: string
//     //   constructor(initName: string) {
//     //     this.name = initName
//     //   }

//     //   greeting(age: number) {
//     //     console.log(`俺は${this.name} ${age}さい`)
//     //   }
//     // }
//     // const Quill = new Person('Quill')
//     // Quill.greeting(5)
//     // class Person {
//     //   constructor(public name: string, private age: number) {}
//     //   // name: string
//     //   // private age: number
//     //   // constructor(initName: string, initAge: number) {
//     //   //   this.name = initName
//     //   //   this.age = initAge
//     //   // }
//     //   incAge() {
//     //     this.age += 1
//     //   }

//     //   greeting(this: Person) {
//     //     console.log(`俺は${this.name} ${this.age}さい`)
//     //   }
//     // }
//     // const Quill = new Person('Quill', 45)
//     // Quill.greeting()
//     // Quill.name
//     // // const anotuher = {
//     // //   name: 'name',
//     // //   greeting: Quill.greeting()
//     // // }
//     // // anotuher.greeting

//     // class Teacher extends Person {
//     //   static gender = 'male'
//     //   // constructor(name: string, age: number, private subject: string) {
//     //   constructor(name: string, age: number, private _subject: string) {
//     //     super(name, age)
//     //   }
//     //   sub(this: Teacher) {
//     //     console.log(`sub: ${this._subject}`)
//     //   }
//     //   get subject() {
//     //     console.log(this._subject)
//     //     return this._subject
//     //   }
//     //   set subject(value) {
//     //     this._subject = value
//     //   }
//     // }
//     // const teacher = new Teacher('jack', 1, 'unko')
//     // teacher.greeting()
//     // teacher.subject
//     // teacher.subject = 'tintin'
//     // teacher.sub()
//     // console.log(Teacher.gender)

//     // abstract class Hoge {
//     //   abstract naku(): void
//     // }
//     // class Fuga extends Hoge {
//     //   naku(): void {
//     //     console.log('waa')
//     //   }
//     // }
//     // const fuga = new Fuga()
//     // fuga.naku()

//     // interface Test {
//     //   greeting(message: string): void
//     // }
//     // const human = {
//     //   greeting(message: number): void {
//     //     console.log(message)
//     //   }
//     // }
//     // human.greeting(1)
//     // class Dev implements Test {
//     //   greeting(message: string): void {
//     //     console.log(message)
//     //   }
//     // }
//     // type Namebable = {
//     //   name: string
//     //   nickName?: string
//     // }
//     // const nameable: Namebable = {
//     //   name: 'name',
//     //   nickName: 'nick'
//     // }
//     // console.log(nameable)

//     // type Human = {
//     //   age: number
//     //   greeting(message: string): void
//     // } & Namebable
//     // class Dev implements Human {
//     //   constructor(public name: string, public age: number) {}
//     //   greeting(message: string): void {
//     //     console.log(message)
//     //   }
//     // }
//     // const dev = new Dev('name', 1)
//     // dev.greeting('m')
//     // class AAA {
//     //   constructor(public name: string) {}
//     // }
//     // class BBB {
//     //   constructor(private title: string, public aaa: AAA) {}
//     // }
//     // const aaa = new AAA('aaa')
//     // const bbb = new BBB('bbb', aaa)
//     // console.log(bbb.aaa.name)
//     // type K = { name: string; obj: { hoge: string } }
//     // type A = {
//     //   name: string
//     //   role: string
//     // }
//     // class B {
//     //   // name: string
//     //   // follower: number
//     //   constructor(public name: string, public follower: number) {}
//     // }
//     // type C = A | B
//     // function desc(c: C): void {
//     //   console.log(c.name)
//     //   if ('role' in c) {
//     //     console.log(c.role)
//     //   }
//     //   if (c instanceof B) {
//     //     console.log(c.follower)
//     //   }
//     // }
//     // const input = document.getElementById('input')!
//     // function copy<T extends { name: string }, U extends keyof T>(
//     //   value: T,
//     //   key: U,
//     // ) {
//     //   value[key]
//     //   console.log(value[key])
//     // }
//     // copy({ name: 'hoge' }, 'name')
//     // interface hoge<T> {
//     //   data: T[]
//     // }
//     // const fuga: hoge<number> = {
//     //   data: [1, 2, 3],
//     // }
//     // const vegs: Array<string> = ['a', 'b', 'c']
//     // const vegs2 = ['a', 'b', 'c']
//     // function Logging(message: string) {
//     //   return function Logging(constructor: Function) {
//     //     console.log(message)
//     //     console.log('logging...')
//     //     console.log(constructor)
//     //   }
//     // }

//     // @Logging('hoge')
//     // class User {
//     //   name = 'Quill'
//     //   constructor() {
//     //     console.log('user created')
//     //   }
//     // }
//     // const u1 = new User()
//     // const u2 = new User()
//     // const u3 = new User()

//     // interface IStartable {
//     //   start: () => void
//     // }

//     // class Car {
//     //   constructor(private engine: IStartable) {}

//     //   move() {
//     //     this.engine.start()
//     //     // ..処理
//     //   }
//     // }

//     // class Engine implements IStartable {
//     //   constructor(public type: string) {}

//     //   start() {
//     //     console.log(111)
//     //   }
//     // }

//     // const engine = new Engine('Honda')
//     // const car = new Car(engine)
//     // car.move()

//     return {
//       a: ''
//     }
//   }
// })
</script>
