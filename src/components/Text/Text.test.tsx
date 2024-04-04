import {render, screen} from '@testing-library/react'
import {Text} from "components/Text/Text";

const text = 'Glory To Mankind! (c) Yorha 2B'

describe('Text', () => {
    it('render text only', () => {
        render(<Text>{text}</Text>)

        expect(screen.getByText(text)).toBeInTheDocument()
    })

    it ('render text with classNames', () => {
        render(<Text className={'test1'}>{text}</Text>)
        const element = screen.getByText(text)

        expect(element).toHaveClass('test1')
        expect(element).toHaveClass('text')
    })

    it('render with success condition', () => {
        render(<Text className={'success'} isSuccess>{text}</Text>)
        const element = screen.getByText(text)

        expect(element).toHaveClass('success')
    })

    it('render with error condition', () => {
        render(<Text className={'error'} isSuccess>{text}</Text>)
        const element = screen.getByText(text)

        expect(element).toHaveClass('error')
    })
})