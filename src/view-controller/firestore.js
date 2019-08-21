export const changeHash = (hash) => { window.location.hash = hash };

/* export { getUserData } from '../controller/controller-firebase.js'

let dataDni = null;

const autocomplete = () => {

    getUserData()
    .then((result) => {
        if (dataDni === null) {
            dataDni = result
        }
       
    })

    
}

const PrintInputDni = () => {
    const tmpl = `
    <div class="row">
        <div class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" id="autocomplete-input" class="autocomplete">
                    <label for="autocomplete-input"></label>
                </div>
            </div>
        </div>    
    </div>
    `
    const divInput = document.createElement('div');
    divInput.innerHTML = tmpl;

    return divInput
} */