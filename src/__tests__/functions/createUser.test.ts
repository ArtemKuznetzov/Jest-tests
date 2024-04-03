import {createUser} from "../../functions/someFunctions";

describe('create user', () => {
    it('user with first name and last name only', () => {
        const user = createUser({
            firstName: 'Jhon',
            lastName: 'Stone'
        })
        // при первом запуске теста создастся папка __snapshots__ с снепшотом. При последующем
        // запуске теста jest будет сверяться с уже существующим. чтобы обновить данные в снепшоте
        // нужно поменять их вручную и запустить команду npm unit -- -u
        expect(user).toMatchSnapshot()
    })

    it('user with first, last name and email', () => {
        const user = createUser({
            firstName: 'Jhon',
            lastName: 'Stone',
            email: 'jhon.stone@mail.ru'
        })

        expect(user).toMatchSnapshot()
    })

    it('user with first, last name and phone', () => {
        const user = createUser({
            firstName: 'Jhon',
            lastName: 'Stone',
            phone: '+1-234-567-89-01'
        })

        expect(user).toMatchSnapshot()
    })
})