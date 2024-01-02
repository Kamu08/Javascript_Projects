let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === '=') {
            try {
                const result = new Function('return ' + expression)();
                input.value = result;
                expression = String(result);
            } catch (error) {
                input.value = 'Error';
                expression = '';
            }
        } else if (buttonText === 'AC') {
            expression = '';
            input.value = expression;
        } else if (buttonText === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += buttonText;
            input.value = expression;
        }
    });
});
