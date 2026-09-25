"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import { links, type ClickCounts, type LinkId } from "@/lib/links";

const initialCounts = Object.fromEntries(
  links.map((link) => [link.id, 0]),
) as ClickCounts;

export default function LinkList() {
  const [counts, setCounts] = useState<ClickCounts>(initialCounts);

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => {
        if (!res.ok) throw new Error(`클릭 수 조회 실패: ${res.status}`);
        return res.json() as Promise<ClickCounts>;
      })
      .then(setCounts)
      .catch((error) => console.error(error));
  }, []);

  function handleClick(id: LinkId) {
    // 응답을 기다리지 않고 먼저 화면에 반영
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`클릭 수 저장 실패: ${res.status}`);
        return res.json() as Promise<{ id: LinkId; count: number }>;
      })
      .then(({ count }) => setCounts((prev) => ({ ...prev, [id]: count })))
      .catch((error) => console.error(error));
  }

  return (
    <nav className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          count={counts[link.id]}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
