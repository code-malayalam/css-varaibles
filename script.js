console.log('HELLO');

function init() {
    const select = document.getElementById('theme');
    select.onchange = (evt) => {
        console.log(evt.target.value);
        switch (evt.target.value) {
            case 'dark':
                document.documentElement.dataset.theme = 'dark';
                break;
            case 'light':
                document.documentElement.dataset.theme = 'light';
                break;
            default:
                delete document.documentElement.dataset.theme;
                break;
        }
    }
}

init();