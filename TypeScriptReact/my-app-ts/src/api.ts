const conta = {
    id: "1",
    email: 'andre@dio.bank',
    password: '123',
    name: 'André Cabral',
    balance: '2000.00',
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
});