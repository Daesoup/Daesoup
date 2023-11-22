import { Card, CardHeader, CardBody, Image, Avatar } from "@nextui-org/react";
export default function Post({
  idx,
  title,
  content,
  images,
}: {
  idx: number;
  title: string;
  content: string;
  images: any[];
}) {
  <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <Avatar name={idx + ""} />
      <p className="text-tiny uppercase font-bold">{title}</p>
      <h4 className="font-bold text-large">{content}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt={images[0].name}
        className="object-cover rounded-xl"
        src={images[0].url}
        width={270}
      />
    </CardBody>
  </Card>;
}
