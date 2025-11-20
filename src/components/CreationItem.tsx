import type Creation from "../types/Creation";
import molecule from "../assets/images/molecule.jpeg";

type CreationItemProps = {
    creation: Creation;
}

export default function CreationItem({ creation }: CreationItemProps) {
  return (
    <div
      className="flex flex-col bg-center bg-cover text-white gap-4 sm:gap-6 rounded-lg overflow-hidden shadow-md shrink-0 w-[90vw] sm:w-110"
      style={{ backgroundImage: `url(${molecule})` }}
    >
      <div className="bg-blue-600/70 space-y-2 px-4 sm:px-6 py-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold">{creation.title}</h2>
        <div className="mx-4 sm:mx-8 border-y h-1 border-white"></div>
        <p className="text-lg sm:text-xl font-semibold">{creation.subtitle}</p>
      </div>

      <div className="flex flex-col h-full">
        <p className="text-base sm:text-lg md:text-xl font-semibold bg-blue-600/70 px-4 sm:px-6 py-2 text-center">
          {creation.description}
        </p>
        <p className="bg-white/80 text-blue-600 text-lg sm:text-xl md:text-2xl font-bold px-4 sm:px-6 py-2 h-full text-center">
          {creation.text}
        </p>
      </div>
    </div>
  );
}
