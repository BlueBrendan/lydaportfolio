import { pictureBook } from "./pictureBook";
import Image from 'next/image'

export default function OilPainting() {
  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-12 w-full relative select-none lex flex-col flex-1 items-center justify-center font-sans" >
      {pictureBook.map((image, i) => (
            <Image src={image.src} alt='' width={800} height={600} className="w-full py-4 lg:py-8" key={i} />
      ))}
    </div>
  );
}
