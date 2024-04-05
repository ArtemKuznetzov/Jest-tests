import {fireEvent, render, waitFor} from '@testing-library/react'
import {Form} from './Form'

const onSubmit = jest.fn()

describe('Form', () => {
    it('should render with children', () => {
        const {container, getByTestId} = render(
            <Form onSubmit={onSubmit}>
                <div data-testid={'my-child'} />
            </Form>
        )

        expect(getByTestId('my-child')).toBeInTheDocument()
        expect(container.querySelector('form')).toBeInTheDocument()
    })

    it('should render with onSubmit', () => {
        const {container} = render(
            <Form onSubmit={onSubmit} />
        )
        const form = container.querySelector('form')
        fireEvent.submit(form)

        expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    it('should invoke onSuccess callback', async () => {
        const onSuccess = jest.fn()
        const {container} = render(
            <Form onSubmit={onSubmit} onSuccess={onSuccess} />
        )
        const form = container.querySelector('form')
        fireEvent.submit(form)

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalledTimes(1)
        })
    })

    it('should invoke onError callback', async () => {
        const onError = jest.fn()
        const {container} = render(
            <Form onSubmit={() => Promise.reject()} onError={onError} />
        )
        const form = container.querySelector('form')
        fireEvent.submit(form)

        await waitFor(() => {
            expect(onError).toHaveBeenCalledTimes(1)
        })
    })
})