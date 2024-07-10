(function () {

    document.addEventListener("DOMContentLoaded", () => {
        // подгружаем нужные стили
        let styleBox = document.createElement('link');
        styleBox.setAttribute('rel', 'stylesheet');

        if (window.matchMedia('(max-width: 420px)').matches) {
            styleBox.setAttribute('href', 'css/style-mobile.css');
        }
        else {
            styleBox.setAttribute('href', 'css/style-desctop.css');
        }
        document.head.append(styleBox);
    });

    // свойства ScrollIntoView
    const propertyScrollIntoView = { behavior: "smooth", block: "start", inline: "center" };
    // ссылки в nav bar
    const navItemsLink = document.querySelectorAll('.main__list-item');
    // основные секции сайта
    const sections = [
        document.querySelector('.blok-eat'),
        document.querySelector('.advantage'),
        document.querySelector('.dish'),
        document.querySelector('.download'),
    ];
    // добавление навигации на сайт
    navItemsLink.forEach((item, index) => {
        item.addEventListener('click', () => {
            sections[index].scrollIntoView(propertyScrollIntoView);
        });
    })
    // скролл с главного фрейма
    const scrollButton = document.querySelector('.main__scroll-button');
    scrollButton.addEventListener('click', () => {
        document.querySelector('.main').nextElementSibling.scrollIntoView(propertyScrollIntoView);
    });
    // Форма
    document.querySelector('.footer__form-submit').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Thank you! Your letter has been sent.');
    });

}())