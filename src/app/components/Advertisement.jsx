import Image from 'next/image'
import Link from 'next/link'

// hello

const Advertisement = () => {
  return (
    <>
      <Link href={"/mentorship"} className="container w-11/12 mx-auto border">
        <div className="flex justify-center border py-14">
          <Image src="/ad.png" width={700} height={500} className='rounded-3xl w-auto h-auto shadow-lg' alt='advertisement' />
        </div>
      </Link>
    </>
  )
}

export default Advertisement