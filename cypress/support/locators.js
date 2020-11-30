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
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        STATUS: '[data-test=menu-extrato]',
        HOME: '[data-test=menu-home]',
    }, 

    CONTAS: {
        INP_NOME :'[data-test=nome]',
        XP_BTN_ALTERAR: "//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-edit']",
        BTN_SALVAR: '.btn',
        XP_BTN_EXCLUIR: "//table//td[contains(., 'Conta mesmo nome')]/..//i[@class='far fa-trash-alt']",
    },
    MOVIMENTACAO: {
        BTN_RECEITA: '[data-test=tipo-receita]',
        BTN_DESPESA: '[data-test=tipo-despesa]',
        DATA_TRANSACAO: '[data-test=data-transacao]',
        DATA_PAGAMENTO: '[data-test=data-pagamento]',
        INP_DESCRICAO: '#descricao',
        INP_VALOR: '[data-test=valor]',
        INP_ENVOLVIDO: '[data-test=envolvido]',
        COMBO_CONTA: '[data-test=conta]',
        BTN_STATUS: 'data-test=status',
        BTN_SALVAR: '.btn-primary'
    },
    SALDO: {
        FN_XP_SALDO_CONTA: (nome) => `//td[contains(., '${nome}')]/../td[2]`
    },
}


export default locators