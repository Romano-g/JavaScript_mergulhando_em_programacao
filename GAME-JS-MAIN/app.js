alert('Boas vindas ao jogo do número secreto');
let maxNumber = 100
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let userNumber;
let userAttempts = 1;


while (userNumber != secretNumber) {
    userNumber = prompt(`Adivinhe o número entre 1 e ${maxNumber}: `);
    
    if (secretNumber == userNumber) {
        break;
    } else {
        if (secretNumber > userNumber) {
            alert(`O número secreto é maior que ${userNumber}`);
        } else {
            alert(`O número secreto é menor que ${userNumber}`);
        }
        userAttempts++;
    };
}


let wordAttempts = userAttempts > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${secretNumber}, com ${userAttempts} ${wordAttempts}`);