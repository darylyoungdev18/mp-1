num1 = document.getElementById('num1');
        num2 = document.getElementById('num2');
        add = document.getElementById('addition');
        subtract = document.getElementById('subtraction');
        multiply = document.getElementById('multiplication');
        divide = document.getElementById('division');
        exponent = document.getElementById('exponential');
        clear = document.getElementById('clear');
        result = document.getElementById('result');
        
        function checkInput(){
            if (num1.value === '' || num2.value === '') {
            alert('Please enter a number');
        };
        };

        function colorChange(){
            if (result.innerHTML < 0){
                result.style.color = 'red';
            };
        }
        function clearInput(){
            num1.value = '';
            num2.value = '';
            result.innerHTML = '';
        };

        add.addEventListener('click', function(e){
            e.preventDefault();
            checkInput();
            result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
            colorChange();
        });
        subtract.addEventListener('click', function(e){
            checkInput();
            e.preventDefault();
            result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
            colorChange();
        });
        multiply.addEventListener('click', function(e){
            e.preventDefault();
            checkInput();
            result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
            colorChange();
        });
        divide.addEventListener('click', function(e){
            e.preventDefault();
            checkInput();
            result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
            colorChange();
        }); 
        clear.addEventListener('click', function(e){
            e.preventDefault();
            clearInput();
            result.style.color = "unset";
        });
        exponent.addEventListener('click', function(e) {
            e.preventDefault();
            checkInput();
            let resultNumber = parseInt(num1.value);
            for(let i = 0; i < parseInt(num2.value); i++ ){
                resultNumber = resultNumber * parseInt(num1.value);
                console.log(resultNumber);
                result.innerHTML ="";
                result.innerHTML = resultNumber;

            }
            colorChange();
        });
        

        