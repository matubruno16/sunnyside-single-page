import { Gallery } from "./Components/Gallery";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Services } from "./Components/Services";
import { TestimonialContaniner } from "./Components/TestimonialContaniner";
import { Footer } from "./Components/Footer";

export function App() {
 

  return (
    <main className="max-w-[1440px] mx-auto relative">
      <Header />
      <Main />
      <Services />
      <TestimonialContaniner />
      <Gallery />
      <Footer />

    </main>
  )
}