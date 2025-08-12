import { useEffect } from "react";

export const useTitleChange = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
