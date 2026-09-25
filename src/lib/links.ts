export const links = [
  { id: "github", title: "😎 깃허브", url: "https://github.com/bym010312" },
  { id: "blog", title: "✒️ 블로그", url: "https://bym010312.tistory.com/" },
  { id: "email", title: "📪 이메일", url: "mailto:bym010312@gmail.com" },
] as const;

export type LinkId = (typeof links)[number]["id"];

export type ClickCounts = Record<LinkId, number>;

export function isLinkId(value: unknown): value is LinkId {
  return links.some((link) => link.id === value);
}
