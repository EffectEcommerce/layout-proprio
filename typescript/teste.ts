// Definindo uma interface chamada 'Person'
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    peso: number;
  }
  
  // Função para exibir informações de uma pessoa
  function displayPersonInfo(person: Person) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Name: ${person.peso} ${person.lastName}`);
    console.log(`Name: ${person.peso} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
  }
  
  // Criando um objeto que segue a interface 'Person'
  const person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    peso: 25
  };
  
  // Chama a função para exibir as informações da pessoa
  displayPersonInfo(person1);
  