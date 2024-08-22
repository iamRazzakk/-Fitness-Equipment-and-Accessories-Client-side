import aboutUs from "../../assets/aboutUs/aboutus.jpg";
const AboutUs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">About Us</h1>
      <img src={aboutUs} alt="" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold lg:mt-8">Who is QQMAX Fitness?</h1>
        <p>
          At our core, we want to inspire you to get fit and make it as
          enjoyable as possible. We’re a small company with a passion for
          fitness, quality products and healthy living.
        </p>
        <p>We’re different than other fitness companies. </p>
        <p>
          The big problem we found in the fitness industry is that the customer
          experience was often ignored. Buyers are often intimidated when they
          face large product offerings with minimal guidance, and this usually
          leads to a poor overall experience. We decided to tackle this problem
          by centering our business model around the customer experience and
          their needs. As we expand our curated product offering, we partner
          with brands that meet our high standards and customer’s expectations.
        </p>
        <p>Motivated by your success.</p>
        <p>
          Curating products, marketing, and shipping fitness equipment around
          Canada is both invigorating and logistically challenging at the same
          time. We work hard day by day, and the stories and reviews you share
          from all over Canada is what keeps us motivated. Knowing that you’re
          out there trusting our products in your fitness routine, is what fuels
          our focus and motivation to continuously improve.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
