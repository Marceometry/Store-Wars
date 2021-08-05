import Link from "next/link"
import { ReactNode } from "react"
import style from './style.module.scss'

type LinkButtonProps = {
    href: string
    color?: string
    bgColor: string
    outlined?: boolean
    children: ReactNode
}

export function LinkButton({
    href,
    color,
    bgColor,
    outlined,
    children,
}: LinkButtonProps) {
    return (
        <Link href={href}>
        <a className={style.linkButton} style={{
            color: color,
            border: '1px solid ' + bgColor,
            background: !outlined ? bgColor : ''
        }}>
            {children}
        </a>
        </Link>
    )
}