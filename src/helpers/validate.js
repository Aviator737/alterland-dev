export function validateInput(input, schema) {

    let error = '';

    if (Object.prototype.hasOwnProperty.call(schema, input.name)) {

        const { name,value } = input;

        for (let prop in schema[name]) {
            switch (prop) {
                case 'required':
                    if(value === '') error = 'Обязательно к заполнению';
                    break;
                case 'regex':
                    if(!schema[name].regex.test(value)) error = 'Содержит недопустимые символы';
                    break;
                case 'isEmail':
                    if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) error = 'Укажите Email в правильной форме';
                    break;
                case 'length':

                    if(value.length < schema[name].length[0]) {
                        error = 'Укажите более ' + schema[name].length[0] + ' символов';
                    }
                    if(schema[name].length.length > 0 && value.length > schema[name].length[1]) {
                        error = 'Укажите менее ' + schema[name].length[1] + ' символов';
                    }
                    break;
                default: break;
            }
        }

    }

    return error.length === 0 ? undefined : error;
}

export function validateForm(data, schema) {
    let errors = {};
    
    for (let item in data) {
        let error = validateInput({name: item, value: data[item]}, schema);
        if(error) errors[item] = error;
    }
    
    return Object.keys(errors).length === 0 ? undefined : errors;
}

export default {
    validateForm, validateInput
}
