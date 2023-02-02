import { addFavorite, removeFavorite } from "@/utils/bookmark";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useBookmark(book) {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  const remove = (book) => {
    removeFavorite(book);
    setBookmarked(false);
  };

  const add = (book) => {
    addFavorite(book);
    setBookmarked(true);
  };

  useEffect(() => {
    if (!router.isReady) return;
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((favorite) => favorite.id === book.id)) {
      setBookmarked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, add, remove]);

  return [bookmarked, add, remove] as const;
}
