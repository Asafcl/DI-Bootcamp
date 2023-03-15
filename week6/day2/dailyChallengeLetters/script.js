const inputText = document.getElementById('input-text');

inputText.addEventListener('input', () =>{
    inputText.value = inputText.value.replace(/[^a-zA-Z]/g,"");
});