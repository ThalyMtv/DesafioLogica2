
let saldoVitorias = calculaRankeadas(108, 5)
let nivelHeroi = ranking(saldoVitorias)



function calculaRankeadas(vitorias, derrotas){
    return vitorias - derrotas
}


function ranking(vitorias){
    nivelH = ""
    if (vitorias < 10){
        nivelH = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20){
        nivelH = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50){
        nivelH = "Prata"    
    } else if (vitorias >= 51 && vitorias <= 80){
        nivelH = "Ouro"  
    } else if (vitorias >= 81 && vitorias <= 90){
        nivelH = "Diamante"  
    } else if (vitorias >= 91 && vitorias <= 100){
        nivelH = "Lendário"  
    } else if (vitorias >= 101){
        nivelH = "Imortal"} 
    return nivelH
    }

console.log("O Herói tem de saldo " + saldoVitorias + " vitórias e está no nível de " + nivelHeroi)