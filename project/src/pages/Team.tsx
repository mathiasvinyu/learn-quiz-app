import React from 'react';
import { Linkedin, Twitter, Github, Mail, Award, Coffee, Heart } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director & Co-Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "10+ years of experience in digital design and brand strategy. Sarah leads our creative vision and ensures every project exceeds client expectations.",
      skills: ["Brand Strategy", "Creative Direction", "Team Leadership"],
      achievements: ["Design Award Winner 2023", "Featured in Design Magazine", "Speaker at UX Conference"]
    },
    {
      name: "Mike Chen",
      role: "Lead Developer & Co-Founder",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Full-stack developer passionate about creating seamless user experiences. Mike ensures our technical solutions are robust and scalable.",
      skills: ["React", "Node.js", "System Architecture"],
      achievements: ["Open Source Contributor", "Tech Conference Speaker", "Certified AWS Architect"]
    },
    {
      name: "Emily Rodriguez",
      role: "Senior UX/UI Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Specializes in user research and interface design that converts. Emily's designs are both beautiful and highly functional.",
      skills: ["User Research", "Prototyping", "Interaction Design"],
      achievements: ["UX Design Certification", "Published Design Articles", "Mentors Junior Designers"]
    },
    {
      name: "David Park",
      role: "Digital Marketing Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Data-driven marketer with expertise in SEO and content strategy. David helps our clients achieve measurable growth online.",
      skills: ["SEO", "Content Strategy", "Analytics"],
      achievements: ["Google Ads Certified", "Marketing Campaign Awards", "Growth Hacking Expert"]
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Ensures projects are delivered on time and within budget. Lisa's organizational skills keep our team and clients happy.",
      skills: ["Project Management", "Client Relations", "Process Optimization"],
      achievements: ["PMP Certified", "Client Satisfaction 98%", "Process Improvement Leader"]
    },
    {
      name: "Alex Kumar",
      role: "Mobile App Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Specializes in React Native and Flutter development. Alex creates mobile experiences that users love.",
      skills: ["React Native", "Flutter", "Mobile UX"],
      achievements: ["App Store Featured Apps", "Mobile Dev Meetup Organizer", "Cross-platform Expert"]
    }
  ];

  const companyValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion-Driven",
      description: "We love what we do and it shows in every project we deliver."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "We believe the best ideas come from working together as a team."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence First",
      description: "We set high standards and consistently deliver exceptional results."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of creatives, developers, and strategists work together to bring your vision to life. 
            Get to know the people behind the magic.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built a workplace where creativity thrives, collaboration is key, and everyone can do their best work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="text-blue-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating exceptional digital experiences. 
              If you think you'd be a great fit, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold">
                Send Us Your CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600">Years Average Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Team Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;