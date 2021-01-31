(function () {
    const popupMenu = document.querySelector('.modal__window_container')
    const openModalBtn = document.querySelector('.btn')
    const closePopup = document.querySelector('.close__form_icon')
    openModalBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (popupMenu.style.display == 'none') {
            popupMenu.style.display = 'block'
        }
    })
    closePopup.addEventListener('click', (e) => {
        e.preventDefault()
        if (popupMenu.style.display !== 'none') {
            popupMenu.style.display = 'none'
        }
    })

})()