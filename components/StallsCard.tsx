import Link from 'next/link'
import Image from 'next/image'

interface StallCardProps {
  id: number
  name: string
  image: string
}
// props => コンポーネントにおける引数
export function StallCard({ id, name, image }: StallCardProps) { 
  return ( 
    <Link href={`/ordermanagement/stallpage`} className="block"> 
      <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"> 
        <Image 
          src={image} 
          alt={name} 
          width={300} 
          height={200} 
          className="w-full h-48 object-contain rounded-t-lg"
        /> 
        <div className="p-4"> 
          <h2 className="text-xl font-semibold">{name}</h2> 
        </div> 
      </div> 
    </Link> 
  );
}

export default StallCard;