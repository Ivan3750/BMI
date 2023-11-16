const count = document.querySelector('.count')
const form = document.querySelector('.form')
let BMI = 0
const InputBMI = document.querySelector('.BMI')
const MeansBMI = document.querySelector('.BMI-means')
const BMIbox = document.querySelector('.BMI__box')
const BMIStatus = document.querySelector('.BMI-status')


/* Створіть програму для обчислення індексу маси тіла (BMI) користувача на основі його ваги і зросту. Ваша програма повинна:  
  
Питати користувача про його вагу (у кілограмах) та зріст (у метрах).  
  
Обчислювати індекс маси тіла за наданими даними.  
  
Виводити результат, а саме, BMI користувача і його категорію згідно з таблицею BMI:  
  
BMI < 18.5: "Недостатня вага"  
18.5 <= BMI < 24.9: "Нормальна вага"  
25 <= BMI < 29.9: "Зайва вага"  
BMI >= 30: "Ожиріння"  
Виводити також булеве значення (true або false) в залежності від того, чи є BMI користувача в нормі (18.5 <= BMI < 24.9). */



form.addEventListener("submit", function (event) {
    event.preventDefault();   
    let weight = parseFloat(document.querySelector('.weight').value);
    let height = parseFloat(document.querySelector('.height').value);
    if ((0 > height) || (height > 272)|| (0 > weight) || (weight > 571)){
        alert("Вкажіть правильно дані!");
    }else{
        height = height / 100; 
        console.log(weight , height)
        const BMI = weight / (height**2)
        console.log(BMI)
        InputBMI.innerHTML = `BMI: ${BMI}`;
        const Status = Boolean( 18.5 < BMI && BMI < 24.9)


        if (0 < BMI && BMI < 18.5){
            MeansBMI.innerHTML = 'Недостатня вага'
            BMIbox.style.backgroundColor = "var(--blue)"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            
        }else if( 18.5 < BMI && BMI < 24.9){
            MeansBMI.innerHTML = 'Нормальна вага'
            BMIbox.style.backgroundColor = "#00ff88"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            
            
        }else if(25 < BMI && BMI < 29){
            MeansBMI.innerHTML = 'Зайва вага'
            BMIbox.style.backgroundColor = "orange"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            
            
        }else if(BMI >= 30){
            MeansBMI.innerHTML = 'Ожиріння'
            BMIbox.style.backgroundColor = "red"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            
        }else{
            MeansBMI.innerHTML = '-'
            BMIbox.style.backgroundColor = "red"
            MeansBMI.innerHTML = 'Помилка'
        }
    }

});

