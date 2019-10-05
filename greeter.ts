class Student{
  fullname: string
  constructor(public firstname:string, public middleInitial:string, public lastname:string){
    this.fullname = firstname + " " + middleInitial + " " + lastname
  }
}

interface Person{
  firstname: string
  lastname: string
}

function greeter(person: Person){
  return "Hello, " + person.firstname + " " + person.lastname + "!!";
}

let user = {firstname:"yuki", middleInitial:"KID", lastname:"ikezawa"}

document.body.textContent = greeter(user)