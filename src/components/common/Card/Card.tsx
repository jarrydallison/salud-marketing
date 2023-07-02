import { Heading } from "../Heading";
import { Text } from "../Text";

export interface CardProps {
  title: string;
  content: string;
  imageSide?: "left" | "right";
  img: string;
  imgAlt: string;
}

const CardImage = ({ img, imgAlt }: { img: string; imgAlt: string }) => (
  <img className="h-72 self-center rounded-lg" src={img} alt={imgAlt} />
);

export const Card = ({
  title,
  content,
  imageSide = "right",
  img,
  imgAlt,
}: {
  title: string;
  content: string;
  imageSide?: "left" | "right";
  img: string;
  imgAlt: string;
}) => (
  <div className="flex justify-between gap-x-4 rounded-2xl bg-homecard p-8">
    {imageSide === "left" && <CardImage img={img} imgAlt={imgAlt} />}
    <div className="flex flex-col gap-y-4">
      <Heading as="h2" className="text-homeText">
        {title}
      </Heading>
      <Text className="text-xl">{content}</Text>
    </div>
    {imageSide === "right" && <CardImage img={img} imgAlt={imgAlt} />}
  </div>
);
