export function readyPersona(bull){
    return{
        type:'READY_PERSONA',
        payload:bull
    }
}