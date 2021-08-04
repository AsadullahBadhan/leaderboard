const navSlide = () => {
    const nav = document.querySelector('.nav-items');
    const burger = document.querySelector('.burger');
    const navItems = document.querySelectorAll('.nav-items>li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                console.log(item);
                item.style.animation = '';
            } else {
                item.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //buger toggle
        burger.classList.toggle('toggle');
    })

}

navSlide();