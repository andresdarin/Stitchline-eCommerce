import Image from "next/image"
import Link from "next/link"


export const Logo = () => {
    return (
        <Link href="/">
            <Image
                src='/favicon.ico'
                alt='Stitchline Logo'
                width={50}
                height={50}
                className="object-contain"
            />
        </Link>
    )
}
export default Logo

