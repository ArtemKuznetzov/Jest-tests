import {fireEvent, render, waitFor} from '@testing-library/react'
import {Form} from './Form'
import {renderWithProviders} from "utils/renderWithProviders";
import {screen} from '@testing-library/react'

const onSubmit = jest.fn()

describe('Form', () => {
    // it('should render with children', () => {
    //     const {container, getByTestId} = render(
    //         <Form onSubmit={onSubmit}>
    //             <div data-testid={'my-child'} />
    //         </Form>
    //     )
    //
    //     expect(getByTestId('my-child')).toBeInTheDocument()
    //     expect(container.querySelector('form')).toBeInTheDocument()
    // })


    // it('should render with onSubmit', () => {
    //     const {container} = render(
    //         <Form onSubmit={onSubmit} />
    //     )
    //     const form = container.querySelector('form')
    //     fireEvent.submit(form)
    //
    //     expect(onSubmit).toHaveBeenCalledTimes(1)
    // })
    //
    // it('should invoke onSuccess callback', async () => {
    //     const onSuccess = jest.fn()
    //     const {container} = render(
    //         <Form onSubmit={onSubmit} onSuccess={onSuccess} />
    //     )
    //     const form = container.querySelector('form')
    //     fireEvent.submit(form)
    //
    //     await waitFor(() => {
    //         expect(onSuccess).toHaveBeenCalledTimes(1)
    //     })
    // })
    //
    // it('should invoke onError callback', async () => {
    //     const onError = jest.fn()
    //     const {container} = render(
    //         <Form onSubmit={() => Promise.reject()} onError={onError} />
    //     )
    //     const form = container.querySelector('form')
    //     fireEvent.submit(form)
    //
    //     await waitFor(() => {
    //         expect(onError).toHaveBeenCalledTimes(1)
    //     })
    // })

    it('should render Form with children', () => {
            renderWithProviders(
                <Form onSubmit={onSubmit}>
                    <div data-testid="my-child" />
                </Form>,
            );

            expect(screen.getByTestId('my-child')).toBeInTheDocument();
            expect(screen.getByRole('form')).toBeInTheDocument();
        });

    it('should invoke the onSubmit callback', () => {
        renderWithProviders(<Form onSubmit={onSubmit} />);
        const myForm = screen.getByRole('form');
        fireEvent.submit(myForm);

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it('should invoke the onSuccess callback', async () => {
        const onSuccess = jest.fn();
        renderWithProviders(<Form onSubmit={jest.fn()} onSuccess={onSuccess} />);
        const myForm = screen.getByRole('form');
        fireEvent.submit(myForm);

        await waitFor(() => {
            expect(onSuccess).toHaveBeenCalledTimes(1);
        });
    });

    it('invoke the onError callback', async () => {
        const onError = jest.fn();
        renderWithProviders(
            <Form onSubmit={() => Promise.reject()} onError={onError} />,
        );
        const myForm = screen.getByRole('form');
        fireEvent.submit(myForm);

        await waitFor(() => {
            expect(onError).toHaveBeenCalledTimes(1);
        });
})
})
