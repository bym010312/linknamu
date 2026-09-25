import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function Profile({ name, bio, imageSrc }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={144}
        height={144}
        priority
        className="h-36 w-36rounded-full border border-zinc-200 object-cover dark:border-zinc-800"
      />
      <h1 className="mt-2 text-xl font-semibold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}
