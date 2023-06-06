const CalculateCuadradoArea = (altura,base)=>{
    const total =base*altura
    const resultado = document.getElementById('resultado')
    resultado.textContent = `the result of the area ${altura} x ${base} = ${total}`
}

export default CalculateCuadradoArea