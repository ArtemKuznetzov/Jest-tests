import {screen, render, fireEvent} from '@testing-library/react'
import {Input} from "components/Input";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

const placeholder = 'test placeholder'
const onChange = jest.fn()

describe('Input', () => {
    it('should render input', () => {
        render(<Input placeholder={placeholder} onChange={onChange} />)

        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    })

    it('should render input with correct type', () => {
        render(<Input placeholder={placeholder} onChange={onChange} type={'checkbox'} />)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('should render input with classNames', () => {
        const {container} = render(
            <Input
                placeholder={placeholder}
                onChange={onChange}
                type={'checkbox'}
                containerClassName={'containerTest'}
                inputClassName={'inputTest'}
            />
        )
        const containerEl = container.querySelector('.formControl.containerTest')
        expect(containerEl).toBeInTheDocument()

        const element = screen.getByPlaceholderText(placeholder)
        expect(element).toHaveClass('input')
        expect(element).toHaveClass('inputTest')
    })

    it('should render input without label', () => {
        render(<Input onChange={onChange} />)

        // getByTestId не работает, если этого элемента в разметке не окажется.
        // queryByTestId обработает этот кейс в синхронном коде
        expect(screen.queryByTestId('input-label')).not.toBeInTheDocument()
    })

    it('should render input with label', () => {
        const labelText = 'testLabel'
        render(
            <Input
                onChange={onChange}
                placeholder={placeholder}
                label={labelText}
            />
        )

        expect(screen.getByLabelText(labelText)).toBeInTheDocument()
    })

    it('should render input with value', () => {
        render(
            <Input onChange={onChange} placeholder={placeholder} value='123' />
        )

        expect(screen.getByDisplayValue('123')).toBeInTheDocument()
    })

    it('should invoke onChange callback', () => {
        render(
            <Input onChange={onChange} placeholder={placeholder} value='123' />
        )
        const element = screen.getByPlaceholderText(placeholder)
        // fireEvent позволяет запустить любой валидный элемент, однако это не совсем пользовательское событие
        fireEvent.change(element, { target: { value: '12345' } } )

        expect(onChange).toHaveBeenCalledTimes(1)
    })
})