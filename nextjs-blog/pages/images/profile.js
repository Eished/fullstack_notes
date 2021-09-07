import Image from 'next/image'

export default function Images() {
  return (
    <Image
      src="/Camera.png" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  )
}
