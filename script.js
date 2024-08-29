const filterList = document.querySelector('.filter');
const filterBtns = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');

        // change the active btn
        // updateActiveBtn(e.target);

        // filter the list
        // filterConferences(filter);

        // to have view transitions
        document.startViewTransition(() => {
            updateActiveBtn(e.target);
            filterConferences(filter);
        });
    });
});

function updateActiveBtn(newActiveBtn) {
    // find previously active btn
    // & remove the active class from it
    filterList.querySelector('.active').classList.remove('active');

    // add active class to new active btn
    newActiveBtn.classList.add('active');
}

function filterConferences(conferencesFilter) {
    // get each conference
    conferences.forEach(conf => {
        const confCategory = conf.getAttribute('data-category');
        
        // check if that conference matches the filterConference
        if (conferencesFilter === 'all' || conferencesFilter === confCategory) {
            conf.removeAttribute('hidden');
        } else {
            conf.setAttribute('hidden', '');
        }
    });

}