import { postImage, postStory } from "@/repositories/post.repositories";
import { useMutation } from "@tanstack/react-query";

export const usePostMutation = () => {
  const mutiton = useMutation(
    (originalImage: any, title: string, content: string) => {
      postImage(originalImage).then((resp) =>
        postStory(title, content, resp.data)
      );
    }
  );
  return mutiton;
};
