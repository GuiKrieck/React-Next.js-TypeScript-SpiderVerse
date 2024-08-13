import Carousel from "@/components/Carousel/Carousel";
import { getHeroesData } from "@/services/getData";

interface IProps {
  params: {
    id: string;
  }
}

export default async function Hero({ params: { id } }: IProps) {
  const heroes = await getHeroesData()
  return (
    <Carousel heroes={heroes.data} activeID={id} />
  )
}