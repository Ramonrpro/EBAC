class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}
const alunos = [
  new Aluno("Ramon", 10),
  new Aluno("Isabela", 9),
  new Aluno("Isac", 5),
  new Aluno("Nina", 2),
  new Aluno("Francisca", 6),
  new Aluno("João", 0),
  new Aluno("Gustavo", 10),
];

const passaram = alunos.filter((aluno) => {
  return aluno.nota >= 6;
});
const reprovados = alunos.filter((aluno) => {
  return aluno.nota < 6;
});

console.log(alunos);

console.log('Aprovados:',passaram);
console.log('')
console.log('Reprovados:', reprovados)
