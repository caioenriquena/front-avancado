# front-avancado
Repositório de exercícios da disciplina de front end avançado


<h1>EXERCÍCIO 1 - FRONT END AVANÇADO</h1>
  <p>Criamos 4 componentes no React para realizar operações matemáticas (soma, subtração, multiplicação e divisão), e cada um exibe o resultado na tela.</p>
  <p>Também criamos um componente que exibe qual tecnologia precisamos estudar, com base em uma propriedade chamada <code>nomeDaTecnologia</code>.</p>

![screen](https://github.com/user-attachments/assets/c9d3c845-a343-4840-8d45-7adf525aa8a5)



<h1>Exercício da Aula 03</h1>

<p>Este repositório contém a atividade proposta na terceira aula de React:</p>

<ul>
  <li>Crie um componente funcional chamado <strong>Aluno</strong>, responsável por exibir informações de um aluno: <em>nome</em>, <em>email</em>, <em>curso</em>, <em>média</em> e <em>status</em>.</li>
  <li>Utilize <strong>desestruturação</strong> diretamente nos parâmetros da função para acessar as propriedades <code>nome</code>, <code>email</code>, <code>curso</code> e <code>media</code>.</li>
  <li>Crie um <strong>array com 3 objetos</strong>, representando três alunos com suas informações.</li>
  <li>Use o método <code>.map()</code> para percorrer esse array e renderizar o componente <strong>Aluno</strong> para cada aluno.</li>
  <li>O campo <strong>status</strong> deve exibir:
    <ul>
      <li><strong>“APROVADO(A)”</strong> se a média for maior ou igual a 7.00</li>
      <li><strong>“REPROVADO(A)”</strong> se for menor que 7.00</li>
    </ul>
  </li>
</ul>

<h2>Solução proposta</h2>
<p>
  O componente <strong>Aluno</strong> foi implementado como uma função que utiliza desestruturação nos parâmetros para acessar as propriedades. O status é calculado dinamicamente de acordo com a média fornecida.
</p>