//Importando o app (firebase)
import { subscribeToHellfireClub } from './firebase/hellfire-club.js';

/*** Acessando os elementos do form ***/
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

/*** Evento de click do botão ***/
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    };
    //salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub(subscription);
    alert(`Inscrito com sucesso! 
           Código Secreto: ${subscriptionId}`);
    
    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';
    txtName.focus();
});