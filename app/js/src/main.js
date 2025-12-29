document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href="#contact"]');
    const mainContacts = document.querySelector('.main-contacts');
    const mainContactsCloseDesktop = document.querySelector('.main-contacts__close--desktop');
    const mainContactsCloseMobile = document.querySelector('.main-contacts__close--mobile');

    if (mainContacts) {
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                mainContacts.classList.toggle('show');
            });
        });
    }

    function closeForm() {
        mainContacts.classList.remove('show');
    }

    mainContactsCloseDesktop.addEventListener('click', closeForm);
    mainContactsCloseMobile.addEventListener('click', closeForm);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeForm();
        }
    });

    // Клик снаружи контейнера закрывает форму
    mainContacts.addEventListener('click', function (e) {
        // если клик **не внутри** .main-contacts__container 
        if (!e.target.closest('.main-contacts__container')) {
            closeForm();
        }
    });

});
