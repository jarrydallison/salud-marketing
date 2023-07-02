import mr from "../../../assets/mr.jpg";
import ja from "../../../assets/ja.jpg";
import { Card, CardProps } from "../../common";

export const TeamView = () => {
  const members: CardProps[] = [
    {
      title: "Mike Ritter",
      content: `Mike has always been interested in food. At a young age, he ate a lot, most of it stolen from his weaker brother, Teddy. Now, he eats for pleasure and because he has to. But he eats almost as smart as he is. Currently studying to receive his PhD in all things smart, Mike knows how important food is to his mental and physical performance. That's why he's involved, because while he likes to count things, he doesn't like to count calories. But he knows that when he takes the time to understand his food, everything gets better.`,
      img: mr,
      imgAlt: "Mike Ritter headshot",
      imageSide: "right",
    },
    {
      title: "Teddy Ritter",
      content: `Also known as Sweaty Teddy, Teddy is a recovering Marine who has eaten across the world for free. But all that service wreaked havoc on his stomach, and eating became less of a thrill and more of a life or death situation. Being careful about what he eats makes Teddy look like a demigod, but it takes up way too much time, time he'd rather spend building his house in Tahoe. So, he developed this app to get time back, and to give time back to our users.`,
      img: mr,
      imgAlt: "Teddy Ritter headshot",
      imageSide: "left",
    },
    {
      title: "Jarryd Allison",
      content: `Jarryd has literally never stopped eating, except to sleep because, well, that's dangerous. He currently is a recovering Dad bod, which shouldn't really be as hard as it is. He takes a lot of time to count his kids, and never had time to count calories. Now, with our incredible algorithm, he doesn't have to. He can spend his time developing our apps, or even better, with his kids, cooking delicious meals for his ravenous offspring while looking less like a dad bod and more like the Adonis he is.`,
      img: ja,
      imgAlt: "Mike Ritter headshot",
      imageSide: "right",
    },
  ];
  return (
    <div className="m-auto grid grid-cols-1 gap-4">
      {members.map((m) => (
        <Card
          key={m.title}
          title={m.title}
          content={m.content}
          img={m.img}
          imgAlt={m.imgAlt}
          imageSide={m.imageSide}
        />
      ))}
    </div>
  );
};
