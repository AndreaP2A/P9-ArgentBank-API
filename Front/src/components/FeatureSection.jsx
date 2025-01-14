import FeatureItem from "./FeatureItem";

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        imgSrc="./src/assets/img/icon-chat.webp"
        title="You are our #1 priority"
      >
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </FeatureItem>
      <FeatureItem
        imgSrc="./src/assets/img/icon-money.webp"
        title="More savings means higher rates"
      >
        The more you save with us, the higher your interest rate will be!
      </FeatureItem>
      <FeatureItem
        imgSrc="./src/assets/img/icon-security.webp"
        title="Security you can trust"
      >
        We use top of the line encryption to make sure your data and money is
        always safe.
      </FeatureItem>
    </section>
  );
};

export default FeaturesSection;
