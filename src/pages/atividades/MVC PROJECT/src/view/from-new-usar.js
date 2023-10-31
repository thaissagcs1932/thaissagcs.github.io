const formNewUser = {
    build:()=>{
        const root = document.getElementById('root');
        const formTemplate = document.createElement('form');
        formTemplate.className = "form-control";
        formTemplate.innerHTML = `
            <input class="form-control" type="text" id="nome">
            <input class="form-control" type="number" id="idade">
            <input class="form-control" type="text" id="login">
            <input class="form-control" type="password" id="senha">
        `
       root.append(formTemplate) 
    }
}

export {formNewUser}