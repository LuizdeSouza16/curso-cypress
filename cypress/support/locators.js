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
        FN_XP_CONTA_ALTERAR: (nome) => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`,
        BTN_SALVAR: '.btn',
        FN_XP_BTN_EXCLUIR: (nome) => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-trash-alt']`,
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
    EXTRATO : {
        FN_XP_REMOVER_TRANSACAO: (conta) => `//span[contains(.,'${conta}')]/../../..//i[@class='far fa-trash-alt']`
    }
}


export default locators