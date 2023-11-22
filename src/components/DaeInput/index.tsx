import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import customAxios from "@/util/customAxios";
import Router from "next/router";
export default function DaeInput() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [originalImage, setOriginalImage] = useState();

  const encodeFileToBase64 = (fileBlob: any) => {
    setOriginalImage(fileBlob);
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const postStory = async (imageNum) => {
    await customAxios.post("/post", { title, content, image: imageNum });
  };

  const postImage = async () => {
    const formData = new FormData();
    formData.append("file", originalImage);
    return await customAxios.post(`/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const post = (e) => {
    e.preventDefault();
    console.log("s");
    postImage().then((resp) => {
      postStory(resp.data);
      Router.push("/");
    });
  };

  return (
    <>
      <form
        method="post"
        onSubmit={post}
        className=" w-3/4 flex flex-col items-center "
        autoComplete="off"
      >
        <Card className="mt-4  sm:w-3/4">
          <CardHeader>
            <div className="w-800 p-2">
              <Input
                size="sm"
                type="text"
                label="제목"
                onValueChange={setTitle}
                isRequired
              />
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Textarea onValueChange={setContent} size="lg" isRequired />
          </CardBody>
          <Divider />
          <CardFooter className="p-6 flex justify-between">
            <div>
              <label
                className="input-file-button cursor-pointer text-sm"
                htmlFor="input-file"
              >
                사진 업로드
              </label>
              <Input
                className="hidden"
                id="input-file"
                size="sm"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
              />
            </div>
            <div>
              <Button type="submit" size="md">
                게시
              </Button>
            </div>
          </CardFooter>
        </Card>
        <div className="mt-5">
          {imageSrc && (
            <Image width={350} height={350} src={imageSrc} alt="preview-img" />
          )}
        </div>
      </form>
    </>
  );
}
