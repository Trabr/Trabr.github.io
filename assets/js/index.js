$(document).ready(function () {
    // Header
    let options = {
        offset: 250
    };
    let header = new Headhesive('.header', options);


    // sectionAbout functions
    let infoAboutArray = [
        {
            "img":"",
            "headline":"Попрощайтесь с неудобным расписанием на всегда",
            "content":"Главной задачей Timedesk является создание общедоступного расписания для групп и удобное чтение любой информации",
            "poster":"https://static.grammarly.com/assets/files/2e8a918f1d91224f68e5c62bee3852c9/online-grammar-check.png"
        },
        {
            "img":"",
            "headline":"Облачное храние",
            "content":"Да, да теперь ваше расписание не пропадет даже если у вас сломается смартфон или компьютер",
            "poster":"https://static.grammarly.com/assets/files/f487bfb40d1cb6619ed3cf7fc8a95c42/grammar-check-rules.png"
        },
        {
            "img":"",
            "headline":"Умные push - уведомления",
            "content":"Личный помощник по мониторингу вашего времени, во сколько начинается предмет, перемена или на оборот",
            "poster":"https://static.grammarly.com/assets/files/3d022282cacf700413d93b2b4fa0768c/grammar-check-explanation.png"
        },
        {
            "img":"",
            "headline":"Личный аккаунт",
            "content":"Частичка вашего удобства в корректировке рабочего интерфейса Timedesk с сохранением или что-то другое …",
            "poster":"https://static.grammarly.com/assets/files/3a077775630a404f119dabd50f32ea94/do-great-things.svg"
        }
    ];
    JSON.stringify(infoAboutArray);

    for (let i = 0; i < infoAboutArray.length; i++) {
        $('.js-flex-about').append('<div class="block-about" data-string>\n' +
            '                    <div class="block-about__head">\n' +
            '                        <img src="' + infoAboutArray[i].img + '">\n' +
            '                        <h2>' + infoAboutArray[i].headline + '</h2>\n' +
            '                        <p>' + infoAboutArray[i].content + '</p>\n' +
            '                    </div>\n' +
            '                    <div class="block-about__content">\n' +
            '                        <img src="' + infoAboutArray[i].poster + '">\n' +
            '                    </div>\n' +
            '                </div>');
        console.log(infoAboutArray[i].headline + ' -- published');
    }

    console.log("index.js - read");
});