import DaeInput from "@/components/DaeInput";
import customAxios from "@/util/customAxios";
import { useEffect, useState } from "react";
export default function Home() {
  const [post, setPost] = useState();
  useEffect(() => {
    const resp = customAxios.get("list?page=1&size=10");
    setPost(resp);
    console.log(setPost);
  }, []);
  return (
    <div className="w-screen h-[calc(100vh-64px)] overflow-scroll flex justify-center">
      <h1>123</h1>
    </div>
  );
}
