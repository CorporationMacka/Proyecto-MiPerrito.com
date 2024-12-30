
document.getElementById('registroPaseador').addEventListener('submit', async function(event) { event.preventDefault(); });


const formDAta = new FormData(event.target);
const data = Object.fromEntries(formDAta.entries());

try{

const response = await fetch('/registroPaseador', {
    method: 'POST',
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify(data),
});


const result = await response.json();
const message =  document.getElementById('message');


if(response.ok){

    message.textContent = "Paseador registrado con exito";
    message.style.color = 'green';
    event.target.reset();

}else{
    message.textContent = result.message || "Ocurrio un error";
    message.style.color = 'red';
}

}  
catch(error){
    console.error('Error:', error);
    message.textContent = "Ocurrio un error";
    message.style.color = 'red';


}