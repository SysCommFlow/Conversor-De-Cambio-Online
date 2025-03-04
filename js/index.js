document.addEventListener('DOMContentLoaded', () => {
    const converter = document.getElementById('converter');
    converter.addEventListener('click', () => {
        const valorEmKwanza = document.getElementById('valorEmKwanza');
        if (valorEmKwanza.value == null || valorEmKwanza.value == '') {
            const convertionModal = new bootstrap.Modal(document.getElementById('convertionModal'));
            document.getElementById('aviso').textContent = 'Prencha com valor em kwanza para converter';
            convertionModal.show();
        }else{
            //const sifrao = "$";
            document.getElementById('valorEmDolar').value = valorEmKwanza.value;
            document.querySelector('#mostrarResultado').textContent = "Resultado: "+valorEmKwanza.value + " Dolares";
        }
    });
});
