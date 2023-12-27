"use client"
import { ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function BackButton() {
    const { push } = useRouter()

    const goBack = (e: React.MouseEvent) => {
        e.preventDefault()
        push('/')
    }

    return (
        <a onClick={goBack} className='flex items-center no-underline' href='/' type='button' ><ChevronLeftIcon />กลับ</a>
    )
}
