$(document).ready(function () {
    // Header
    let options = {
        offset: 250
    };
    let header = new Headhesive('.header', options);


    // sectionAbout functions
    let infoAboutArray = [
        {
            "img":"https://static.grammarly.com/assets/files/3e801733cdff17557fe4510e55523114/icon1.svg",
            "headline":"Say Goodbye to Textfails",
            "content":"Grammarly helps you write mistake-free in Gmail, Facebook, Twitter, LinkedIn, and any other app you use. Even in text messages!",
            "poster":"https://static.grammarly.com/assets/files/2e8a918f1d91224f68e5c62bee3852c9/online-grammar-check.png"
        },
        {
            "img":"https://static.grammarly.com/assets/files/92e2dfdb0cda2baab98bb97a7c03161f/icon2.svg",
            "headline":"Get Your Fix",
            "content":"Grammarly scans your text for common grammatical mistakes (like misused commas) and complex ones (like misplaced modifiers). Write with confidence, even on your phone.",
            "poster":"https://static.grammarly.com/assets/files/f487bfb40d1cb6619ed3cf7fc8a95c42/grammar-check-rules.png"
        },
        {
            "img":"https://static.grammarly.com/assets/files/991461eddaab19c90c9aa0769565e4eb/icon3.svg",
            "headline":"Improve Your Skills",
            "content":"Grammarly isn’t just a safety net. You’ll get detailed explanations for all your mistakes and weekly progress reports to keep you on the ball.",
            "poster":"https://static.grammarly.com/assets/files/3d022282cacf700413d93b2b4fa0768c/grammar-check-explanation.png"
        },
        {
            "img":"https://static.grammarly.com/assets/files/e49fbea3c4f8f14eb818bc2f3f007ca6/icon4.svg",
            "headline":"Do Great Things",
            "content":"No matter what drives you — acing that big paper, being an all-star at work, or simply improving your everyday writing — Grammarly will be there to help you put your best foot forward.",
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
});

console.log("index.js - read");