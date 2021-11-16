const age=Number(prompt(`How old are you ?`));

const destination=Number(prompt(`Your destination in km ?`));

const priceForKm=destination*0.21;

const discount1=priceForKm*0.20;

const discount2=priceForKm*0.40;

const discountJunior=priceForKm-discount1;

const discountSenior=priceForKm-discount2;

if (age < 18) {
    confirm(`Your price for the ticket is ${discountJunior}£`);
}else if (age > 65) {
    confirm(`Your price for the ticket is ${discountSenior}£`);
}else{
    confirm(`Your price for the ticket is ${priceForKm}£`);
}