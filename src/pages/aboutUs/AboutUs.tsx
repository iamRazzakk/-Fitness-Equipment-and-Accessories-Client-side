import { Input } from "@/components/ui/input";
import img1 from "../../assets/about/1.jpg";
import img2 from "../../assets/about/2.jpg";
import img3 from "../../assets/about/3.jpg";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  AOS.init({
    offset: 120,
    duration: 1200,
    easing: "ease",
    delay: 50,
  });
  return (
    <div>
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold ">
        Company Overview
      </h1>
      <div className="space-y-4 border px-6 py-4 rounded-md lg:mt-8 md:mt-4 mt-2 shadow-md shadow-white">
        <h1 className="text-xl ">
          WAt the forefront of the fitness industry for over a decade, we pride
          ourselves on delivering top-quality equipment and accessories that
          meet the diverse needs of fitness enthusiasts around the globe. Our
          commitment to promoting health and wellness through innovative
          products and exceptional customer service is unwavering. Here's a
          deeper look at our mission, vision, and core values:
        </h1>
        <ul>
          <li>
            <span className="font-bold">Mission:</span> To promote health and
            wellness through innovative products and excellent customer service.
          </li>
          <li>
            <span className="font-bold">Vision:</span> To become the leading
            provider of fitness solutions worldwide.
          </li>
          <li>
            <span className="font-bold">Core Values:</span>
            <ul>
              <li>
                Integrity: We uphold the highest standards of integrity in all
                our actions.
              </li>
              <li>
                Innovation: We continuously seek innovative solutions to improve
                our products and services.
              </li>
              <li>
                Customer Focus: We prioritize our customers' needs and strive to
                exceed their expectations.
              </li>
              <li>
                Quality: We provide top-quality products that are reliable and
                durable.
              </li>
              <li>
                Community: We are committed to supporting and giving back to our
                community.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Our journey began with a simple goal: to make fitness accessible and
          enjoyable for everyone. Over the years, we have expanded our product
          line to include a wide range of fitness equipment and accessories, all
          designed with the user in mind. From home gyms to commercial fitness
          centers, our products are trusted by fitness enthusiasts and
          professionals alike.
        </p>
        <p>
          We believe in the power of innovation and are constantly exploring new
          ways to enhance the fitness experience. Our dedicated team of experts
          works tirelessly to develop cutting-edge products that meet the
          evolving needs of our customers. With a focus on quality and
          performance, we ensure that every product we offer is built to last.
        </p>
        <p>
          Join us on our mission to promote health and wellness. Whether you're
          a beginner or a seasoned athlete, we have the right tools to help you
          achieve your fitness goals. Together, we can make the world a
          healthier, fitter place.
        </p>
      </div>
      <div>
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mt-8 md:mt-6 mt-4">
          Meet our Team
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-8 md:mt-6 mt-4">
          <div
            className="lg:p-4 md:p-3 p-2 border rounded-md shadow-md shadow-white"
            data-aos="flip-right"
          >
            <img className="rounded-md" src={img1} alt="" />
            <div className="text-center mt-3">
              <h1 className="text-xl font-bold text-center">Discover.</h1>
              <p>
                We love a good chat at Northern Fitness. Discuss your vision for
                free with one of our team members to allow us to understand your
                unique requirements.
              </p>
            </div>
          </div>
          <div
            className="lg:p-4 md:p-3 p-2 border rounded-md shadow-md shadow-white"
            data-aos="flip-right"
          >
            <img className="rounded-md" src={img2} alt="" />
            <div className="text-center mt-3">
              <h1 className="text-xl font-bold text-center">Design.</h1>
              <p>
                Our gym design experts will take your requirements from the
                initial discussion and create 3D visual designs to allow you to
                see exactly what your gym will look like.
              </p>
            </div>
          </div>
          <div
            className="lg:p-4 md:p-3 p-2 border rounded-md shadow-md shadow-white"
            data-aos="flip-right"
          >
            <img className="rounded-md" src={img3} alt="" />
            <div className="text-center mt-3">
              <h1 className="text-xl font-bold text-center">Deliver.</h1>
              <p>
                After your bespoke gym design and equipment layout has been
                signed-off, we can deliver and install your new gym equipment at
                a time that suits you best.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="lg:space-y-8 md:space-y-4 space-y-2">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold lg:mt-8 md:mt-6 mt-4 text-center">
          Contact with us
        </h1>
        <div className="lg:flex items-center gap-4">
          <Input placeholder="name" />
          <Input placeholder="Email" />
        </div>
        <Input placeholder="Phoen" />
        <Textarea placeholder="Type your message here." />
        <Button variant="secondary" className="w-full">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default AboutUs;
