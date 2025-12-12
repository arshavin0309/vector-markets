document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href="#contact"]');
    const mainContacts = document.querySelector('.main-contacts');
    const mainContactsClose = document.querySelector('.main-contacts__close');

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

    mainContactsClose.addEventListener('click', closeForm);

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
