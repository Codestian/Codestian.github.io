function toggleHamburger() {
    const navigationMenu = document.querySelector('.right')

    if(navigationMenu.classList.contains('showNavigation') === false) {
        navigationMenu.classList += ' showNavigation'
    }
    else {
        navigationMenu.classList = 'right'
    }

}