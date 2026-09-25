import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

const profile = {
  name: "박영민",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpg",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-12 px-7 py-20 sm:py-24">
      <Profile {...profile} />
      <LinkList />
    </main>
  );
}
