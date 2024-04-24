//constante
SALARIO_ATE_20 = 1000

alert(SALARIO_ATE_20)

SALARIO_ACIMA_20 = 700

 alert(SALARIO_ATE_20)

//input
anoNascimento = parseInt(prompt("informe o seu ano de nascimento"))
nome = prompt("infome o seu nome")
salarioBase = parseFloat(prompt("informe o seu salario"))
gratificaçao = parseFloat(prompt("informe sua gratificaçao"))
bonus = parseFloat(prompt("informe o seu bonus"))
desconto = parseFloat(prompt("informe o desconto"))
salarioLiquido = 0
anoAtual = 2024
adicional = 0 

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
adicional = 1000 //ou 2000
 salarioLiquido = salarioBase + gratificaçao + bonus - desconto + adicional
 SALARIO_ATE_20 = 700

 //output
mensagem = "sou " + nome + ", tenho " + idade +" anos e ganho R$" + salarioLiquido
alert(mensagem)



