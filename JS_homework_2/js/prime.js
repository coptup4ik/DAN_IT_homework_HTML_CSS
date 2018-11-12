/*
* Реализация скрипта с помощью решета Эратосфена.
* Отбрасываем числа меньше 2, проверяем на четность,не учитываем квадраты чисел и переходим на .
* Это позволяет сократить итерации проверки во много раз.
*/


const
    FIRST_PRIME = document.querySelector('#prime'),
    SECOND_PRIME = document.querySelector('#prime2'),
    CHECK_BTN = document.querySelector('#primeBtn'),
    MAIN_ELEMENT = document.querySelector('.prime'),
    NUMBERS = document.querySelector('.numbers');


function checkNumberForPrime(number) {

    if (number === 2) {
        return true
    }

    if (!Number.isInteger(number) || number < 2 || number % 2 === 0) {
        return false
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}



function checkInputs(first,second) {
    if (!Number.isInteger(+first) || isNaN(+first) || +first === 0) {
        MAIN_ELEMENT.classList.add('error');
        return false
    }else if (!Number.isInteger(+second) || isNaN(+second) || +second === 0){
        MAIN_ELEMENT.classList.add('error');
        return false;
    }else if (+second <= +first) {
        MAIN_ELEMENT.classList.add('wrong');
        return false
    }else {
        MAIN_ELEMENT.classList.remove('error');
        MAIN_ELEMENT.classList.remove('wrong');
        NUMBERS.textContent = "";
        return true
    }
}

function generatePrimes(first, last) {

    if (checkInputs(first,last)) {

        for (; +first <= +last ; +first++) {
            if (checkNumberForPrime(+first)){
                NUMBERS.textContent += +first+",";
            }
        }
    }
}

CHECK_BTN.addEventListener('click', ()=>{
    generatePrimes(FIRST_PRIME.value,SECOND_PRIME.value);
});