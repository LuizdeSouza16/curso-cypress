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
        INP_NOME :'[data-test=nome]',
        XP_BTN_ALTERAR: "//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-edit']",
        BTN_SALVAR: '.btn',
        XP_BTN_EXCLUIR: "//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-trash-alt']",
    }
}


export default locators