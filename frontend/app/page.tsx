"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Globe, Award, Users, TrendingUp, Clock, CheckCircle, Star, ArrowRight, Menu, X, Play } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [stats, setStats] = useState({ students: 0, rate: 0, companies: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        students: prev.students < 500 ? prev.students + 10 : 500,
        rate: prev.rate < 85 ? prev.rate + 1 : 85,
        companies: prev.companies < 20 ? prev.companies + 1 : 20
      }));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const submitForm = async () => {
    if (!name || !email || !phone) {
      alert("Please fill in all fields");
      return;
    }

    const res = await fetch("http://localhost:5001/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone }),
    });

    if (res.ok) {
      alert("Your application has been submitted!");
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      const data = await res.json();
      alert(data.error);
    }
  };

  const features = [
    { icon: Globe, title: "International Exposure", desc: "Work on US projects from day one", color: "text-blue-500" },
    { icon: Award, title: "Real Projects Portfolio", desc: "Build a standout resume with live projects", color: "text-purple-500" },
    { icon: Users, title: "Expert Mentorship", desc: "Learn from industry veterans", color: "text-green-500" },
    { icon: TrendingUp, title: "Career Growth", desc: "Fast-track to global tech roles", color: "text-orange-500" },
    { icon: CheckCircle, title: "85%+ Success Rate", desc: "Proven placement track record", color: "text-red-500" },
    { icon: Clock, title: "6-Month Program", desc: "Structured outcome-based training", color: "text-indigo-500" },
  ];

  const timeline = [
    { phase: "Months 1-2", title: "Intensive Training", desc: "Master cutting-edge tech skills through hands-on projects with expert guidance", icon: "🎯" },
    { phase: "Months 3-6", title: "US Internship", desc: "Real-world experience with US-based companies and global networking", icon: "🚀" },
    { phase: "Month 6+", title: "Career Launch", desc: "Seamless transition to high-paying roles (₹4-6 LPA+)", icon: "💼" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* NAVIGATION */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <GraduationCap className="text-blue-600" size={32} />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DatacodeUp</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className="hover:text-blue-600 transition">Program</a>
            <a href="#success" className="hover:text-blue-600 transition">Success Stories</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <button onClick={() => setOpen(true)} className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition">
              Apply Now
            </button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-6 py-4 space-y-4">
            <a href="#program" className="block hover:text-blue-600">Program</a>
            <a href="#success" className="block hover:text-blue-600">Success Stories</a>
            <a href="#about" className="block hover:text-blue-600">About</a>
            <button onClick={() => setOpen(true)} className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
              Apply Now
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="inline-block mb-6 px-6 py-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-300 font-semibold">
            🎉 Day 1 Launch Offer - Limited Seats Available
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Launch Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              US Tech Career
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            From training to placement in 6 months. Join hundreds who transformed their careers with our proven program.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => setOpen(true)} className="group px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/20 transition flex items-center gap-2">
              <Play size={20} />
              Watch Success Stories
            </button>
          </div>

          {/* FLOATING STATS */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { value: `${stats.students}+`, label: "Students Placed" },
              { value: `${stats.rate}%`, label: "Success Rate" },
              { value: `${stats.companies}+`, label: "Partner Companies" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="text-4xl font-bold text-yellow-300">{stat.value}</div>
                <div className="text-sm text-gray-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Everything you need to succeed in one program</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <feature.icon className={`${feature.color} mb-4`} size={40} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="program" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Journey to Success</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">A proven 6-month pathway to your dream career</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.phase}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="success" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Real people, real transformations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Priya Sharma", role: "Software Engineer, San Francisco", text: "DatacodeUp opened doors to my dream US internship. The mentorship was invaluable!", rating: 5 },
              { name: "Rahul Singh", role: "Data Scientist, New York", text: "From training to placement in 6 months. The program truly delivers on its promises.", rating: 5 },
              { name: "Anita Patel", role: "Full Stack Developer, Seattle", text: "Best investment in my career. The real-world projects made all the difference.", rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD APPLY */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Who Should Apply?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">This program is perfect for ambitious individuals ready to level up</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Final-Year Students", desc: "Build a competitive edge before graduation and stand out in the job market", icon: "🎓" },
              { title: "Recent Graduates", desc: "Bridge the gap between education and industry with hands-on experience", icon: "👨‍💻" },
              { title: "Career Switchers", desc: "Transition into tech with structured guidance and industry connections", icon: "🔄" },
              { title: "Early Professionals", desc: "Accelerate your career growth with international exposure and mentorship", icon: "🚀" }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-blue-100 dark:border-gray-700 hover:shadow-xl transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Application Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get started in just 4 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Apply Online", desc: "Fill out our quick application form" },
              { step: "02", title: "Assessment", desc: "Complete a brief skills evaluation" },
              { step: "03", title: "Interview", desc: "Chat with our team about your goals" },
              { step: "04", title: "Start Learning", desc: "Begin your transformation journey" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
                  <div className="text-5xl font-black text-blue-600/20 dark:text-blue-400/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-600" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">Join the next cohort and start your journey to a US tech career</p>
          <button onClick={() => setOpen(true)} className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
            Apply Now - Limited Seats
          </button>
          <p className="mt-6 text-sm opacity-75">✨ Day 1 Launch Offer - Special pricing for early applicants</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={32} className="text-blue-500" />
                <span className="text-2xl font-bold text-white">DatacodeUp Academy</span>
              </div>
              <p className="text-gray-400">Transforming careers through world-class tech education and global opportunities.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#program" className="block hover:text-blue-400 transition">Program Details</a>
                <a href="#success" className="block hover:text-blue-400 transition">Success Stories</a>
                <a href="#about" className="block hover:text-blue-400 transition">About Us</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@datacodeup.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            © 2025 DatacodeUp Academy. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ENROLLMENT MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl w-full max-w-md relative shadow-2xl">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
              <X size={28} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">Start Your Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Fill in your details to apply</p>
            </div>

            <div className="space-y-4">
              <input
                className="w-full p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:bg-gray-800 transition outline-none"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                className="w-full p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:bg-gray-800 transition outline-none"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="tel"
                className="w-full p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:bg-gray-800 transition outline-none"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button 
                onClick={submitForm}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                Submit Application
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-4">
              By applying, you agree to our terms and privacy policy
            </p>
          </div>
        </div>
      )}
    </div>
  );
}