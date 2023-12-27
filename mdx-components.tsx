import { Button } from '@nextui-org/react'
import { ChevronLeftIcon, MoveLeftIcon } from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import { useRouter } from 'next/navigation'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        wrapper(props) {
            return (
                <div>
                    <div className="prose prose-sm md:prose-base prose-invert p-5">
                        <Button size='sm' ><ChevronLeftIcon />กลับ</Button>
                        {props.children}
                    </div>
                </div>
            )
        },
    }
}