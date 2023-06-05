var flag=0
var xx=''
var newWord=''


function ingresaPalabra(){
    do{
        var word = prompt('enter a word:') 
        }while(word.length<8)
    return word
}

function ingresaLetra(){
    do{
        var letter = prompt('jugador 2 inserte 1 sola letra para adivinar la palabra:')
    }while(letter.length>1)
    return letter
}



function orcado(){

if(flag===0){
var word = ingresaPalabra()
for(var i=0;i<word.length;i++)
newWord+='*'
}

var letter = ingresaLetra()




console.log('adivina la palabra: ' +newWord)

for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      xx += letter;
    } else {
      xx += newWord[i];
    }
    
  }
    console.log(xx)
    flag++
    if (flag >= 10) {
        console.log('El juego ha terminado.');
        return false;
      }
    
      return true;
    }
    
    do {
      var continuar = orcado();
    } while (continuar);
