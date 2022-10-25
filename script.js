const mailList = ['luigi@gmail.com', 'henri@gmail.com', 'domenico@gmail.com', 'francesco@gmail.com']
const accedi = document.getElementById("accedi")
const diceGame = document.getElementById("dice-game")
accedi.addEventListener('click', 
    function() {
        const mail = document.getElementById("mail").value;
        if(mailList.includes(mail)) {
                console.log("Email valida. Benvenuto!")
                diceGame.classList.remove('hidden')
        }
        else{
                console.log("Email non valida. Riprovare.")
                alert("Non puoi giocare se non sei iscritto!")
                diceGame.classList.add('hidden')
        }
    }
);

let blueDice = document.getElementById("blue-dice");
let redDice = document.getElementById("red-dice");
const roll = document.getElementById("roll");

roll.addEventListener('click',
    function() {
        const myDice = Math.floor(Math.random() * 6 ) + 1;
        console.log('Ti è uscito ' + myDice)

        blueDice.classList.remove('bi-dice-1', 'bi-dice-2', 'bi-dice-3', 'bi-dice-4', 'bi-dice-5', 'bi-dice-6')

        if(myDice == 1){blueDice.classList.add('bi-dice-1');}
        else if(myDice == 2){blueDice.classList.add('bi-dice-2');}
        else if(myDice == 3){blueDice.classList.add('bi-dice-3');}
        else if(myDice == 4){blueDice.classList.add('bi-dice-4');}
        else if(myDice == 5){blueDice.classList.add('bi-dice-5');}
        else if(myDice == 6){blueDice.classList.add('bi-dice-6');}


        const cpuDice = Math.floor(Math.random() * 6 ) + 1;
        console.log('All\'avversario è uscito ' + cpuDice)

        redDice.classList.remove('bi-dice-1', 'bi-dice-2', 'bi-dice-3', 'bi-dice-4', 'bi-dice-5', 'bi-dice-6')
        
        if(cpuDice == 1){redDice.classList.add('bi-dice-1');}
        else if(cpuDice == 2){redDice.classList.add('bi-dice-2');}
        else if(cpuDice == 3){redDice.classList.add('bi-dice-3');}
        else if(cpuDice == 4){redDice.classList.add('bi-dice-4');}
        else if(cpuDice == 5){redDice.classList.add('bi-dice-5');}
        else if(cpuDice == 6){redDice.classList.add('bi-dice-6');}

        const message = document.getElementById("message")
        if(myDice > cpuDice){
            console.log('Hai vinto!')
            message.innerHTML = "Hai Vinto!"

        }
        else if(myDice < cpuDice){
            console.log('Hai perso!')
            message.innerHTML = "Hai Perso!"
        }
        else{
            console.log('Pareggio!')
            message.innerHTML = "Pareggio!"
        }
        });


