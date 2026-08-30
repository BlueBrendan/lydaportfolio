import { portfolioVideos } from "./portfolioVideos";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-12 w-full relative select-none lex flex-col flex-1 items-center justify-center font-sans" >
      {portfolioVideos.map((portfolioVideo, i) => (
          <video autoPlay muted loop playsInline className="w-full py-4 lg:py-8" key={i}>
            <source src={portfolioVideo.src} type="video/mp4" />
          </video>
      ))}
    </div>
  );
}
