
//Dopo aver compilato il form che chiede all'utente il suo nome, il numero di chilometri che vuole percorrere e l'età del passeggero
//Al click sul pulsante "genera" dovrà essere calcolato il prezzo del suo biglietto

const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
   function() {

    const userName = document.getElementById ('user-name').value;
    const userKm = parseInt (document.getElementById ('user-km').value);
    const userAge = document.getElementById ('user-age').value;
    
    //Prezzo standard del biglietto nkm*0.21
    const price = userKm * 0.21;
    let discount = 0;

    //Applicazione sconti in base all'età: minorenni 20%, over 65 40%
    if (userAge === 'minorenne') {
        discount = price * 2 / 100;

    }else if (userAge === 'over') {
        discount = price * 4 / 100;
    }
    

    //Prezzo finale (prezzo - sconto) e stampa in pagina approssimata a due decimali dopo la virgola
    const finalPrice = price - discount;

    //Tipi di offerta a seconda dell'età
    let userOffer;

    if (userAge === 'maggiorenne'){
        userOffer = 'Biglietto Standard';

    }else if (userAge === 'minorenne'){
        userOffer = 'Biglietto minorenni';

    }else if (userAge === 'over'){
        userOffer = 'Biglietto Over 65';
    }

    //Dichiarazione variabili numero carrozza e codice CP
    const userCarriage = Math.floor(Math.random() * 10) + 1;
    const userCode = Math.floor(Math.random() * 99999) + 1;
    
    //Generazione dei ticket per: nome, tipo offerta, numero carrozza, codice CP, prezzo biglietto.
    document.getElementById('ticket-name').innerHTML = userName;
    document.getElementById('ticket-offer').innerHTML = userOffer;
    document.getElementById('ticket-carriage').innerHTML = userCarriage;
    document.getElementById('ticket-code').innerHTML = userCode;
    document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2);
    document.getElementById('ticket').classList.add('active');

    }
);

//Il bottone "annulla" riporta la pagina allo stato iniziale : form vuoti e ticket assenti
const cancelTicket = document.getElementById('cancel-ticket');
cancelTicket.addEventListener('click',
function() {

    document.getElementById('user-name').value = '';
    document.getElementById('user-km').value = '';
    document.getElementById('user-age').value = 'maggiorenne';
    document.getElementById('ticket').classList.remove('active');
} 
)
