import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// TODO: 실제 프로필 정보와 링크로 교체
const profile = {
  name: "홍길동",
  bio: "여기에 한 줄 소개를 적어 주세요",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-6 py-16">
      <Profile {...profile} />
      <nav className="flex w-full flex-col gap-6">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </nav>
    </main>
  );
}
