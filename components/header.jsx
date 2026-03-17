import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <nav className='fixed top-0 right-0 left-0 bg-background/80 backdrop-blur-xl z-20 border-b'>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          <Image src="/spott.png" alt="Logo" width={500} height={500} className='w-full h-11' priority />
          
          {/* Pro Badge */}
          </Link>

          {/* Search and Location - Desktop only */}

          {/* Right side Actions */}
        </div>

        {/* Mobile Search and Location - Below Header */}
      </nav>

      {/* Models */}
    </>
  )
}

export default Header