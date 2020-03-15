let elements = document.getElementsByTagName('input');
for (const iterator of elements) {
console.log(iterator)
}
const listener = this.addEventListener('input', (event)=>{
    if(event.target && event.type == 'input'){
        console.log('сработал инпут');
        
    }
});
