import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Mega from "@/components/Mega";

export default function Home() {
  return (
    <div className="poppins">
      <Header/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
    </div>
  );
}
