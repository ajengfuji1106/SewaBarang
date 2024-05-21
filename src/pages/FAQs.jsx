import FrameComponent from "../components/FrameComponent";
import FaqHeaders from "../components/FaqHeaders";
import FooterColor from "../components/FooterColor";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="faqs">
      <main className="frame-parent">
        <FrameComponent />
        <section className="faq-headers-wrapper">
          <FaqHeaders />
        </section>
      </main>
      <FooterColor />
    </div>
  );
};

export default FAQs;
