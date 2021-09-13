const VisaCard = document.getElementById('visacard');
const MasterCard = document.getElementById('mastercard');
const MaestroCard = document.getElementById('maestro');
const removemastercard = document.getElementById('removemastercard');
const removevisacard = document.getElementById('removevisacard')
const removemaestrocard = document.getElementById('removemaestrocard')
const plus = document.querySelector('button');
const base = document.querySelector('.container');
const parent1 = document.querySelector('.parent1');
const parent2 = document.querySelector('.parent2');
const form = document.querySelector('.form');
const wallet = document.querySelector('.wallet')

VisaCard.addEventListener('click', function () {

    removemastercard.style.display = 'none';
    removevisacard.style.display = 'unset'
    removemaestrocard.style.display = 'none';
    VisaCard.style.border = '2px solid rgb(105, 92, 221)';
    MasterCard.style.border = '2px solid rgb(218, 218, 218)';
    MaestroCard.style.border = '2px solid rgb(218, 218, 218)';
})
MaestroCard.addEventListener('click', function () {

    removemastercard.style.display = 'none';
    removevisacard.style.display = 'none';
    removemaestrocard.style.display = 'unset';
    MaestroCard.style.border = '2px solid rgb(105, 92, 221)';
    VisaCard.style.border = '2px solid rgb(218, 218, 218)';
    MasterCard.style.border = '2px solid rgb(218, 218, 218)';
})
MasterCard.addEventListener('click', function () {

    removemastercard.style.display = 'unset';
    removevisacard.style.display = 'none';
    removemaestrocard.style.display = 'none';
    MaestroCard.style.border = '2px solid rgb(218, 218, 218)';
    VisaCard.style.border = '2px solid rgb(218, 218, 218)';
    MasterCard.style.border = '2px solid rgb(105, 92, 221)';
})
plus.addEventListener('click', function () {
    parent1.style.display = 'none';
    parent2.style.display = 'none';
    removemastercard.style.display = 'none';
    removevisacard.style.display = 'none';
    removemaestrocard.style.display = 'none';
    wallet.style.display = 'none'
    base.style.width = '500px';
    base.style.height = '550px';
    form.style.display = 'flex';
})

