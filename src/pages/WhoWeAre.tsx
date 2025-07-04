import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import { Shield, Heart, Award, Eye, Lightbulb, CheckCircle } from "lucide-react";
import team1Image from "../image/team/team-1.jpg";
import team2Image from "../image/team/team-2.jpg";
import team3Image from "../image/team/team-3.jpg";
import team4Image from "../image/team/team-4.jpg";
import team5Image from "../image/team/team-5.jpg";
import team6Image from "../image/team/team-6.jpg";

// Fallback image URL in case imports fail
const fallbackImage = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=200&h=200&fit=crop&face=center";

// TeamMember component with Tailwind-only animations
const TeamMember = ({ name, title, imageUrl, bio, phone, index }) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade animate-ease-out`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative w-32 h-32 mb-4">
      <img
        src={imageUrl || fallbackImage}
        alt={name}
        className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2 animate-fade animate-delay-100 animate-ease-out">
      {name}
    </h3>
    <p className="text-gray-600 font-medium mb-2 relative animate-fade animate-delay-200 animate-ease-out">
      {title}
      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-16 h-1 bg-blue-500 rounded-full"></span>
    </p>
    <p className="text-gray-500 text-sm mb-2 animate-fade animate-delay-300 animate-ease-out">{bio}</p>
    <p className="text-gray-500 text-sm animate-fade animate-delay-400 animate-ease-out">{phone}</p>
  </div>
);

const WhoWeAre = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethics in every transaction and client interaction.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Client-Centricity",
      description: "Our clients are at the heart of everything we do — their goals, needs, and trust shape our every move.",
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Transparency",
      description: "We believe in open communication and full disclosure, ensuring clients always know where they stand.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for the highest quality in our services, solutions, and customer experience.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We embrace technology and fresh thinking to offer smarter, faster, and more effective financial solutions.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Accountability",
      description: "We take ownership of our actions and deliver on our promises with professionalism and discipline.",
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "50K+", label: "Accounts Managed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const teamMembers = [
    {
      name: "Mr. Kaushik Roy Chowdhury",
      title: "Director",
      imageUrl: team1Image,
      bio: "Experienced leader with a passion for ethical debt collection practices.",
      phone: "+91 98765 43210",
    },
    {
      name: "Mr. Saikat Ganguly",
      title: "Director",
      imageUrl: team2Image,
      bio: "Strategic leader committed to driving ethical and effective financial solutions.",
      phone: "+91 98765 43210",
    },
    {
      name: "Mr. Gopal Jhunjhunwala",
      title: "Senior Manager",
      imageUrl: team3Image,
      bio: "Expert in financial operations and client relationship management.",
      phone: "+91 98765 43210",
    },
    {
      name: "Mr. Dinesh Munshi",
      title: "Senior Manager",
      imageUrl: team4Image,
      bio: "Dedicated to streamlining processes and ensuring client satisfaction.",
      phone: "+91 98765 43210",
    },
    {
      name: "Ms. Vidhi Churiwala",
      title: "Senior Manager",
      imageUrl: team5Image,
      bio: "Passionate about empowering clients with financial knowledge and support.",
      phone: "+91 98765 43210",
    },
    {
      name: "Mr. Shivam Sourav",
      title: "Senior Manager",
      imageUrl: team6Image,
      bio: "Focused on innovative approaches to debt recovery and consumer education.",
      phone: "+91 98765 43210",
    },
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="About Finathle"
        title="Building Financial Bridges with Integrity"
        description="For over 25 years, we've been committed to ethical debt collection practices while helping consumers understand their financial rights and responsibilities."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop"
        className="mt-16"
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-teal-50/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              To provide ethical and effective debt collection services while empowering consumers with the knowledge and resources they need to achieve financial stability.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop)`,
            }}
          />
          <div className="absolute inset-0 bg-gray-50/90"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide our actions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg pinnacles: 1
lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our impact and achievements at a glance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div> 
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop)`,
            }}
          />
          <div className="absolute inset-0 bg-gray-50/95"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade animate-ease-out">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade animate-delay-200 animate-ease-out">
              Dedicated professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                imageUrl={member.imageUrl}
                bio={member.bio}
                phone={member.phone}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;