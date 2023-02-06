//Exercício parte I
const op1 = 5 > 20 && 5 < 2
console.log('operaçao 1',op1)

const op2 = 5 === 5 || 5 === '5'
console.log('operação 2',op2)

const op3 = !(20 > 50)
console.log('operação 3',op3)

const op4 = !(20 > 50 || 50 > 60)
console.log('operação 4',op4)


//Exercicio parte II
const salFixo = 2000
const auxCreche = 45.50 * 2

const salBenef = salFixo + auxCreche
console.log(`Salário Benefício é: ${salBenef}`)

const comissaoJan = 5784.50 * 0.1
console.log(`Comissão de Janeiro: ${comissaoJan}`)


//Exercicio parte III
const descontoInssJan = (salFixo + comissaoJan) * 0.05
console.log(`Desconto de Janeiro será de: ${descontoInssJan}`)
const salFinalJan = (salBenef + comissaoJan - descontoInssJan)
console.log(`Salário Final de Janeiro: ${salFinalJan}`)


//Exercicio parte IV (calculo da comissaõ de cada mês)
const comissaoFev = 3418.41 * 0.1
console.log(`Comissão de Fevereiro: ${comissaoFev}`)
const descontoInssFev = (salFixo + comissaoFev) * 0.05
console.log(`Desconto de Fevereiro será de: ${descontoInssFev}`)
const salFinalFev = (salBenef + comissaoFev - descontoInssFev)
console.log(`Salário Final de Fevereiro: ${salFinalFev}`)

const comissaoMar = 4124.10 * 0.1
console.log(`Comissão de Março: ${comissaoMar}`)
const descontoInssMar = (salFixo + comissaoMar) * 0.05
console.log(`Desconto de Março será de: ${descontoInssMar}`)
const salFinalMar = (salBenef + comissaoMar - descontoInssMar)
console.log(`Salário Final de Março: ${salFinalMar}`)

const comissaoAbr = 1874.00 * 0.1
console.log(`Comissão de Abril: ${comissaoAbr}`)
const descontoInssAbr = (salFixo + comissaoAbr) * 0.05
console.log(`Desconto de Abril será de: ${descontoInssAbr}`)
const salFinalAbr = (salBenef + comissaoAbr - descontoInssAbr)
console.log(`Salário Final de Abril: ${salFinalAbr}`)

const comissaoMai = 7000.00 * 0.1
console.log(`Comissão de Maio: ${comissaoMai}`)
const descontoInssMai = (salFixo + comissaoMai) * 0.05
console.log(`Desconto de Maio será de: ${descontoInssMai}`)
const salFinalMai = (salBenef + comissaoAbr - descontoInssAbr)
console.log(`Salário Final de Maio: ${salFinalMai}`)

const comissaoJun = 9450.00 * 0.1
console.log(`Comissão de Junho: ${comissaoJun}`)
const descontoInssJun = (salFixo + comissaoJun) * 0.05
console.log(`Desconto de Junho será de: ${descontoInssJun}`)
const salFinalJun = (salBenef + comissaoJun - descontoInssJun)
console.log(`Salário Final de Junho: ${salFinalJun}`)


//Exercício parte V
const mediaSal = (salFinalJan + salFinalFev + salFinalMar +
salFinalAbr + salFinalMai + salFinalJun) /6
console.log(`Média Salarial dos Últimos 6 Meses: ${mediaSal}`)