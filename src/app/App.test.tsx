import {
    render,
    screen,
    fireEvent,
    act,
    waitFor,
    within
} from "@testing-library/react";

import {App} from "app/App";
import * as waitMock from '../functions/someFunctions'

const waitSpy = jest.spyOn(waitMock, 'wait')

describe('App', () => {
    it('should render without form elements and title', () => {
        const {container} = render(<App />)
        expect(screen.getByTestId('app')).toBeInTheDocument()

        // const form = screen.getByRole('form')
        // within - альтернатива контейнеру. позволяет запускать тесты в рамках какого-то компонента/элемента
        // const userNameInput = within(form).getByLabelText(/User name/)

        const userNameInput = screen.getByLabelText(/User name/)
        const passwordInput = screen.getByLabelText(/Password/)
        const submitButton = screen.getByRole('button', { name: /Create user/})
        const title = container.querySelector('h2')

        expect(userNameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
        expect(title).toBeInTheDocument()
    })

    it('should render error when form was submitted with error', async () => {
        render(<App />)
        const userNameInput = screen.getByLabelText(/User name/)
        const passwordInput = screen.getByLabelText(/Password/)
        const submitButton = screen.getByRole('button', { name: /Create user/})
        // query не выбрасывает ошибку в отличии от get
        const successMessage = screen.queryByText(/created with password/)
        const errorMessage = screen.queryByText(/Password must contain/)

        expect(successMessage).not.toBeInTheDocument()
        expect(errorMessage).not.toBeInTheDocument()

        act(() => {
            fireEvent.change(userNameInput, {target: {value: 'John'}})
            fireEvent.change(passwordInput, {target: {value: 'Weak'}})
            fireEvent.click(submitButton)
        })

        // Если что-то отсуствует в документе и появляется позднее, можно воспользоваться screen.find
        const errorMessageAfterSubmit = await screen.findByText(/Password must contain/)
        expect(errorMessageAfterSubmit).toBeInTheDocument()
    })

    it('should render success message after successful submit', async () => {
        render(<App />)
        const userNameInput = screen.getByLabelText(/User name/)
        const passwordInput = screen.getByLabelText(/Password/)
        const submitButton = screen.getByRole('button', { name: /Create user/})

        const successMessage = screen.queryByText(/created with password/)
        const errorMessage = screen.queryByText(/Password must contain/)

        expect(successMessage).not.toBeInTheDocument()
        expect(errorMessage).not.toBeInTheDocument()

        const promise = Promise.resolve()
        waitSpy.mockImplementationOnce(() => promise)

        act(() => {
            fireEvent.change(userNameInput, {target: {value: 'John'}})
            fireEvent.change(passwordInput, {target: {value: 'TheStrongest!123'}})
            fireEvent.click(submitButton)
        })

        const successMessageAfterSubmit = await screen.findByText(/created with password/)
        expect(successMessageAfterSubmit).toBeInTheDocument()
    })
})