import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function Profile({ name, bio, imageSrc }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-12px_rgba(168,92,52,0.45),0_2px_6px_rgba(168,92,52,0.12)] ring-1 ring-white/80">
        <Image
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={144}
          height={144}
          priority
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-[#7a655a]">{bio}</p>
    </section>
  );
}
