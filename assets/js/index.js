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
            "poster":"https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/showcase/Gif_01@2x.mp4",
        },
        {
            "img":"",
            "headline":"Облачное храние",
            "content":"Да, да теперь ваше расписание не пропадет даже если у вас сломается смартфон или компьютер",
            "poster":"assets/media/hero-ru.mp4"
        },
        {
            "img":"",
            "headline":"Умные push - уведомления",
            "content":"Личный помощник по мониторингу вашего времени, во сколько начинается предмет, перемена или на оборот",
            "poster":"assets/media/more_than_words-ru.mp4"
        },
        {
            "img":"",
            "headline":"Личный аккаунт",
            "content":"Частичка вашего удобства в корректировке рабочего интерфейса Timedesk с сохранением или что-то другое …",
            "poster":"assets/media/hero-ru.mp4"
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
            '                        <video src="' + infoAboutArray[i].poster + '" autoplay loop></video>\n' +
            '                    </div>\n' +
            '                </div>');
        console.log(infoAboutArray[i].headline + ' -- published');
    }

    console.log("index.js - read");
});