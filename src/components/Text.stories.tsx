import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title:'Components/Text',
    component: Text,
    args:{
        children: 'Lorem ipsum dolor',
        size: 'md',
    },
    argTypes:{
        size:{
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj = {
    args:{
        size: 'sm',
    },
}

export const Large: StoryObj = {
    args:{
        size: 'lg',
    },
}

export const Custom: StoryObj = {
    args:{
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
        asChild:{
            table:{
                disable: true,
            }
        },
    },
}

