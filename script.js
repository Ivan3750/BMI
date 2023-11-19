const form = document.querySelector('.form')
const InputBMI = document.querySelector('.BMI')
const MeansBMI = document.querySelector('.BMI-means')
const BMIbox = document.querySelector('.BMI__box')
const BMIResult = document.querySelector('.BMI__result')
const BMIStatus = document.querySelector('.BMI-status')
const TOKEN = "6767982006:AAEOEvGL7MagLbG-Vm1G4RQ7HcoWEb7eJLE";
const CHAT_ID = "-1002040380660";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let BMI = 0;
let message = "";


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


/*  0 - немає інформації 
    1 - недостатня вага 
    2 - вага в нормі 
    3 - зайва вага
    4 - ожиріння
    */

    let weight = parseFloat(document.querySelector('.weight').value);
    let height = parseFloat(document.querySelector('.height').value);

    if ((0 > height) || (height > 272)|| (0 > weight) || (weight > 571)){
        alert("Вкажіть правильно дані!");
    }else{
        BMIResult.style.display = "flex"
        BMIbox.style.display = "none"
        height = height / 100; 
        console.log(weight , height)
        BMI = weight / (height**2)
        BMI = BMI.toFixed(2);
        InputBMI.innerHTML = `${BMI}`;
        const Status = Boolean( 18.5 < BMI && BMI < 24.9)



        message = "<b>Повідомлення з сайту</b>\n"; 
        message += "<b>Відправник: </b>" + this.name.value + "\n"; 
        message += "<b>Вага: </b>" + this.weight.value + "\n"; 
        message += "<b>Ріст: </b>" + this.height.value + "\n"; 
        message += "<b>BMI: </b>" + BMI + "\n"; 
        
        if (0 < BMI && BMI < 18.5){
            MeansBMI.innerHTML = 'Недостатня вага'
            InputBMI.style.color = "var(--blue)"
            BMIStatus.style.color = "var(--blue)"
            MeansBMI.style.color = "var(--blue)"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            message += "<b>Статус: </b>" + "Недостатня вага" + "\n"; 
            
            
        }else if( 18.5 < BMI && BMI < 24.9){
            MeansBMI.innerHTML = 'Нормальна вага'
            InputBMI.style.color = "#00ff88"
            BMIStatus.style.color = "#00ff88"
            MeansBMI.style.color = "#00ff88"
            
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            message += "<b>Статус: </b>" + "Нормальна вага" + "\n"; 
            
            
        }else if(25 < BMI && BMI < 29){
            MeansBMI.innerHTML = 'Зайва вага'
            InputBMI.style.color = "orange"
            BMIStatus.style.color = "orange"
            MeansBMI.style.color = "orange"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            message += "<b>Статус: </b>" + "Зайва вага" + "\n"; 
            
            
        }else if(BMI >= 30){
            MeansBMI.innerHTML = 'Ожиріння'
            InputBMI.style.color = "red"
            BMIStatus.style.color = "red"
            MeansBMI.style.color = "red"
            BMIStatus.innerHTML = `Вага в нормі: ${Status}`
            message += "<b>Статус: </b>" + "Ожиріння" + "\n"; 
            
        }else{
            MeansBMI.innerHTML = '-'
            InputBMI.style.color = "red"
            BMIStatus.style.color = "red"
            MeansBMI.style.color = "red"
            MeansBMI.innerHTML = 'Помилка'
            message += "<b>Статус: </b>" + "Помилка" + "\n"; 
        }
    
        
        axios.post(URI_API, { 
        chat_id: CHAT_ID, 
        parse_mode: "html", 
        text: message 
        }); 

        
    }
    
});



function restart(){

    BMIResult.style.display = "none"
    BMIbox.style.display = "flex"
}




