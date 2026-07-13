import Banner from "@/components/Banner";
import ClientReview from "@/components/ClientReview";
import FeaturedBooks from "@/components/FeaturedBooks";
import Marque from "@/components/Marque";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Marque></Marque>
      <FeaturedBooks></FeaturedBooks>
      <ClientReview></ClientReview>
    </div>
  );
}
