
//Não preciso importar o react pois aqui não tem código JSX (tags)
export default function (props) {
  if(props.test) {
    return props.children
  } else {
    return false
  }
}