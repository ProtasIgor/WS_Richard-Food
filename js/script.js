(function () {

    document.addEventListener("DOMContentLoaded", () => {

        let styleBox = document.createElement('link');
        styleBox.setAttribute('rel', 'stylesheet');

        if (window.matchMedia('(max-width: 420px)').matches) {
            setTimeout(()=> {
                styleBox.setAttribute('href', 'css/style-mobile.css');
                document.head.append(styleBox);
            }, 0)
        }
        else {
            setTimeout(()=> {
                styleBox.setAttribute('href', 'css/style-desctop.css');
                document.head.append(styleBox);
            }, 0)

        }
    });

    const scrollButton = document.querySelector('.main__scroll-button');
    scrollButton.addEventListener('click', () => {
        document.querySelector('.main').nextElementSibling.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
    });
}())