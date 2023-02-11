import { addFavorite, removeFavorite } from "@/utils/bookmark";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useBookmark(room) {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const remove = (room) => {
    removeFavorite(room);
    setBookmarked(false);
  };

  const add = (room) => {
    addFavorite(room);
    setBookmarked(true);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((favorite) => favorite.id === room.id)) {
      setBookmarked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, add, remove]);

  return [bookmarked, add, remove] as const;
}
