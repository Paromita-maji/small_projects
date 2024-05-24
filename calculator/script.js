let display = document.getElementById('caltext');
        let calculator = '';

        function appendToDisplay(value) {
            calculator += value;
            display.value = calculator;
        }

        function clearDisplay() {
            calculator = '';
            display.value = calculator;
        }

        function calculateResult() {
            try {
                calculator = eval(calculator).toString();
                display.value = calculator;
            } catch (e) {
                display.value = 'Error';
            }
        }

        function backspace() {
            calculator = calculator.slice(0, -1);
            display.value = calculator;
        }