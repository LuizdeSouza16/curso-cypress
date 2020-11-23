const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },

    MESSAGE: '.toast-message',

    MENU: {
        SETTINGS: '[data-test=menu-settings]',
        RESET: '[href="/reset"]',
        CONTAS: '[href="/contas"]',
    }, 

    CONTAS: {
        INP_NOME :'[data-test=nome]'
    }
}


export default locators