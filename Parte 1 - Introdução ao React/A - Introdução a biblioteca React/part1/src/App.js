// const App = () => (
//   <div>
//     <p>Olá, mundo!</p>
//   </div>
// )
//--------------------------------------------------------------

// const App = () => {
//   console.log('Olá do componente!')
//   return (
//     <div>
//       <p>Olá, mundo!</p>
//     </div>
//   )
// }
//--------------------------------------------------------------

// const App = () => {
//   const hoje = new Date()
//   const a = 10
//   const b = 20
//   console.log(hoje, a+b)

//   return (
//     <div>
//       <p>Olá, mundo! Hoje é {hoje.toString()}</p>
//       <p>
//         {a} mais {b} é {a + b}
//       </p>
//     </div>
//   )
// }
//--------------------------------------------------------------

// const Hello = (props) => {
//   return (
//     <div>
//       <p>Olá {props.nome}</p>
//     </div>
//   )
// }
// export default Hello
//--------------------------------------------------------------

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Olá {props.nome}, você tem {props.idade} anos
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const nome = 'Peter'
//   const idade = 10

//   return (
//     <div>
//       <h1>Olá a todos!</h1>
//       <Hello nome='Maya' idade={26 + 10} />
//       <Hello nome={nome} idade={idade} />
//     </div>
//   )
// }
//--------------------------------------------------------------

const App = () => {
  const amigos = [ 
      { nome: 'Peter', idade: 4 },
      { nome: 'Maya', idade: 10 },
    ]

  return (
    <div>
      <p>{amigos[0].nome} {amigos[0].idade}</p>
      <p>{amigos[1].nome} {amigos[1].idade}</p>
    </div>
  )
}
//--------------------------------------------------------------


export default App


