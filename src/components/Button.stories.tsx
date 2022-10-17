import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title:'Components/Button',
    component: Button,
    args:{
        children: 'Button',
    }
} as Meta<ButtonProps>

export const Default: StoryObj = {}

export const Custom: StoryObj = {
    args:{
        asChild: true,
        children: (
            <div>Custom Button</div>
        )
    },
    argTypes:{
        asChild:{
            table:{
                disable: true,
            }
        },
    }
}

