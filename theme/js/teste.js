"use strict";
// Função para exibir informações de uma pessoa
function displayPersonInfo(person) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
}
// Criando um objeto que segue a interface 'Person'
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    createAt: "12"
};
// Chama a função para exibir as informações da pessoa
displayPersonInfo(person1);
