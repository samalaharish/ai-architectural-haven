
import RevealAnimation from '../ui/RevealAnimation';

const CompanyIntro = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="content-container">
        <RevealAnimation>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-indigo">Transforming Spaces, Enhancing Lives</h2>
            <p className="text-lg text-indigo/80 leading-relaxed">
              Vaarahi Design Studio is a premium interior design firm crafting beautiful, functional spaces for modern Indian living — from cozy 2BHKs to luxe villas and efficient commercial spaces.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CompanyIntro;
