import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "박영민",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpg",
};

const links = [
  { title: "😎 깃허브", url: "https://github.com/bym010312" },
  { title: "✒️ 블로그", url: "https://bym010312.tistory.com/" },
  { title: "📪 이메일", url: "mailto:bym010312@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-12 px-7 py-20 sm:py-24">
      <Profile {...profile} />
      <nav className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </nav>
    </main>
  );
}
