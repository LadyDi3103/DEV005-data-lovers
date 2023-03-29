export const sortData = (ordenar) => {
  const copia = [...ordenar]
  return copia.sort((datapokemonA, datapokemonB) =>{
    if (datapokemonA.name > datapokemonB.name){
      return 1;
    } else if (datapokemonA.name < datapokemonB.name) {
      return -1;
    } else {
      return 0;
    } 
  });
};

function filtrar (data, tipo){
  const copia1 = [...data]
  const type = copia1.filter((elemento)=>{
    if (elemento.type.includes(tipo))
    {
      return true;
    } else {
      return false
    }
  })
  return type
}

function filtrar1 (data, searchPokemones){
  const copia2 = [...data]
  const name = copia2.filter((elemento)=>{
    if (elemento.name.includes(searchPokemones))
    {
      return true;
    } else {
      return false
    }
  })
  return name
}

export const calcular = (data) =>{
  const copia3 = [...data]
  let porcentaje = copia3.length;
  porcentaje = Math.round((porcentaje * 100 )/251);
  const spanValor = document.getElementById("ponerValor")
  spanValor.textContent = porcentaje + "%";
}

export {
  filtrar, filtrar1}
