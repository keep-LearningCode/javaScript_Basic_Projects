const form = document.querySelector('form');


form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    const category = document.querySelector('.category');

    if(height === '' || isNaN(height) || height < 0){
        result.innerHTML = `Enter valid height ${height}`;
    }
    else if(weight === '' || isNaN(weight) || weight < 0){
        result.innerHTML = `Enter valid height ${weight}`;
    }
    else{
        const bmi = (weight/((height * height)/ 10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;

        // wrong code because such conditions can't be written in switch case in javascript
        // switch(bmi){
        //     case bmi <= 18.5:
        //         category.innerHTML = `<span>You are under weight</span>`;
        //         break;
        //         case (bmi > 18.5 && bmi < 24.9):
        //         category.innerHTML = `<span>You are normal weight</span>`;
        //         break;
        //         case (bmi > 25 && bmi <= 29.9):
        //         category.innerHTML = `<span>You are over weight</span>`;
        //         break;
        //         case bmi > 30:
        //         category.innerHTML = '<span>Obesity detected</span>';
        //         break;
        //         default:
        //             category.innerHTML =''
        // }
        if (bmi <= 18.5) {
            category.innerHTML = `<span>You are underweight</span>`;
        } else if (bmi > 18.5 && bmi < 24.9) {
            category.innerHTML = `<span>You are normal weight</span>`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            category.innerHTML = `<span>You are overweight</span>`;
        } else if (bmi > 30) {
            category.innerHTML = `<span>Obesity detected</span>`;
        } else {
            category.innerHTML = '';
        }
    }

})