import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Input,Textarea, Button} from "@nextui-org/react";
import { useState,useRef } from "react";
import Image from 'next/image'

export default function DaeInput(){
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");

  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob:any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  }

  return(
    <div className=" w-3/4 flex flex-col items-center ">
    <Card className="mt-4 w-1/2">
      <CardHeader >
        <div className="w-800 p-2">
        <Input size="sm" type="text" label="제목" onValueChange={setTitle}/>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <Textarea
      onValueChange={setContent}
      size="lg"
      />
      </CardBody>
      <Divider/>
      <CardFooter className="p-6 flex justify-between">
        <div>
      <label className="input-file-button cursor-pointer "  htmlFor="input-file">
        사진 업로드
      </label>
      <Input className="hidden" id="input-file" size="sm" type="file" accept="image/*" onChange={(e) => {
        encodeFileToBase64(e.target.files[0]);
      }}/>
      </div>
      <div >
      <Button size="md">
        게시
      </Button>
      </div>
      </CardFooter>
    </Card>
    <div className="mt-5">
      {imageSrc && <Image width={400} height={400}   src={imageSrc} alt="preview-img" />}
      </div>
      </div>
  )
}