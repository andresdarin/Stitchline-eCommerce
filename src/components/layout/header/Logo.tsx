import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
    return (
        <Link href="/HomePage">
            <Image
                src='/favicon.ico'
                alt='Stitchline Logo'
                width={32}
                height={32}
                className="object-contain"

            />
        </Link>
    )
}
export default Logo

