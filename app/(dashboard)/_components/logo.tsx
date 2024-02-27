import Image from 'next/image'

function Logo() {
  return (
    <Image
        height={60}
        width={60}
        alt="logo"
        src="/ensiNet.PNG" 
        />
          )
}

export default Logo