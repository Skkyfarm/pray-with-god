import React from 'react';

const FooterLinkArray = () => {
  const sections = [
    {
      title: "Spiritual",
      links: ["Daily Prayer", "Meditation", "Scripture", "Traditions"]
    },
    {
      title: "Community",
      links: ["Prayer Requests", "Testimonies", "Circles", "Events"]
    },
    {
      title: "Resources",
      links: ["Library", "Guides", "Podcasts", "Videos"]
    },
    {
      title: "About",
      links: ["Our Mission", "Grace", "Privacy", "Contact"]
    }
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-md py-12 px-6 mt-auto relative z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-spiritual-gold font-semibold mb-4 uppercase tracking-wider text-[10px]">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-[10px] uppercase tracking-widest">
        &copy; {new Date().getFullYear()} PrayWithGod.ai • Holding Space for All
      </div>
    </footer>
  );
};

export default FooterLinkArray;
