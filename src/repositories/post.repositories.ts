import customAxios from "@/util/customAxios";

export const postStory = async (title, content, imageNum) => {
  await customAxios.post("/post", { title, content, image: imageNum });
};

export const postImage = async (originalImage) => {
  const formData = new FormData();
  formData.append("file", originalImage);
  const { data } = await customAxios.post(`/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return { data };
};
