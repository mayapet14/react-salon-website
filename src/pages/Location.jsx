import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import Directions from "../components/Directions";
import Footer from "../components/Footer";

export default function Location() {
  return (
    <>
      <NavBar />
      <main>
        <PageTitle title="Maya's Salon | Location" />
        <Directions />
      </main>
      <Footer />
    </>
  );
}
