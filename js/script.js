

const generateButton = document.getElementById ('generate-ticket');
generateButton.addEventListener('click',
   function() {

    const userName = document.getElementById ('user-name').value;
    const userKm = parseInt (document.getElementById ('user-km')).value;
    const userAge = parseInt (document.getElementById ('user-age')).value;
    
    const price = userKm * 0.21;
    let discount = 0;

    if (userAge === 'minorenne')
    discount = price * 2 / 100;
    else if (userAge === 'over 65')
    discount = price * 4 / 100;

    const finalPrice = price - discount;
    console.log(finalPrice);

    }

);
