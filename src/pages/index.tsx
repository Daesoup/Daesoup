import DaeInput from "@/components/DaeInput";
import Post from "@/components/Post";
import SkeletonComponent from "@/components/SkeletonComponent";
import customAxios from "@/util/customAxios";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  const [post, setPost] = useState();

  const [currentHistoryPage, setCurrentHistoryPage] = useState(10);
  const [isFetching, setIsFetching] = useState(false);
  const ObserverRef = useRef<HTMLDivElement>(null);
  const fetchPost = () => {
    setIsFetching(true);
    const { data } = fetch(
      `http://43.201.183.136:3000/list?page=${currentHistoryPage}&size=10`,
      {
        next: { revalidate: 60 },
      }
    );
    setPost(data);
    setIsFetching(false);
  };
  useEffect(() => {
    observeScroll(ObserverRef);
    fetchPost();
  }, []);

  function observeScroll(observerRef: any) {
    const io = new IntersectionObserver((entries) => {
      if (!isFetching || post.hasMorePage) return;
      if (entries[0].isIntersecting) {
        fetchPost();
        setCurrentHistoryPage((prev) => (prev += 1));
      }
    });

    io.observe(observerRef.current);
  }

  return (
    <div className="w-screen h-[calc(100vh-64px)] overflow-scroll flex justify-center">
      {post?.list.map((item) => {
        return (
          <Post
            content={item.content}
            idx={item.idx}
            images={item.images}
            title={item.title}
          />
        );
      })}
      <div className="h-4" ref={ObserverRef}></div>
      {isFetching && <SkeletonComponent />}
    </div>
  );
}
