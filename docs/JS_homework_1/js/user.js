let name = prompt('Введите имя','Имя');


function greeting() {
    alert('Welcome,' + name)
}

while (name === "") {
    name = prompt('Введите имя');
}

if (name !== "" && name !== null) {
    let age = prompt('Введите возраст',"Возраст");

    while ( isNaN(+age) ) {
        age = prompt('Введите возраст',"Возраст");
    }

    if (age !== null && age !== "") {

        if (age > 22) {
            greeting()
        }

        if (age <= 22 && age >= 18) {
            const CONFIRM = confirm('Are you sure you want to continue?');

            CONFIRM ? greeting() : alert('You are not allowed to visit this website');
        }

        if (age < 18) {
            alert('You are not allowed to visit this website')
        }
    }
}