import { portfolioPhotos } from "./portfolioPhotos";
import Image from 'next/image'

export default function Photos() {
  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-12 w-full relative select-none lex flex-col flex-1 items-center justify-center font-sans" >
      {portfolioPhotos.map((portfolioPhoto, i) => (
            <Image src={portfolioPhoto.src} alt='' width={800} height={600} className="w-full py-4 lg:py-8" key={i} />
      ))}
    </div>
  );
}
