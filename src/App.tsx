/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Dog, 
  Cat, 
  ShoppingBag, 
  Scissors, 
  Stethoscope, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  Menu,
  X,
  Heart
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-brand-primary p-2 rounded-xl">
            <Dog className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold font-serif tracking-tight text-brand-dark">AclimaVet</h1>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-600">
          {["Sobre", "Serviços", "Produtos", "Contato"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-brand-primary transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4"
        >
          {["Sobre", "Serviços", "Produtos", "Contato"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-600"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-brand-light text-brand-primary rounded-full text-sm font-semibold mb-4">
            No coração da Aclimação
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-brand-dark leading-tight mb-6">
            Cuidado e carinho para o seu melhor amigo
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
            Na AclimaVet, transformamos carinho em cuidado. Atendimento especializado 
            com profissionais apaixonados por animais.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/5511949085500" 
              target="_blank" 
              className="bg-brand-primary text-white py-4 px-8 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Agendar Banho
            </a>
            <a 
              href="#servicos" 
              className="bg-white border-2 border-slate-200 text-slate-700 py-4 px-8 rounded-full font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand-primary/10 rounded-[3rem] blur-2xl -z-10" />
          <img 
            src="https://loremflickr.com/800/800/dog,pet" 
            referrerPolicy="no-referrer"
            alt="Happy pet" 
            className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Heart className="text-rose-500 fill-rose-500" />
              </div>
              <div>
                <p className="font-bold text-slate-800">+1000</p>
                <p className="text-xs text-slate-500">Pets felizes atendidos</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const ServiceCard = ({ icon: Icon, title, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
  >
    <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6">
      <Icon className="text-brand-primary w-7 h-7" />
    </div>
    <h4 className="text-2xl font-bold font-serif text-brand-dark mb-3">{title}</h4>
    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{description}</p>
    <img 
      src={image} 
      referrerPolicy="no-referrer"
      className="rounded-2xl w-full h-48 object-cover mt-auto" 
      alt={title}
    />
  </motion.div>
);

const Services = () => (
  <section id="serviços" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold font-serif text-brand-dark mb-4">Nossos Serviços</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Oferecemos uma experiência completa de cuidado e bem-estar para que seu pet 
          se sinta em casa enquanto cuidamos dele.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Scissors}
          title="Banho & Tosa"
          description="Higiene impecável com produtos premium, secagem cuidadosa e tosa especializada por profissionais experientes."
          image="https://loremflickr.com/400/300/dog,grooming"
        />
        <ServiceCard 
          icon={ShoppingBag}
          title="Rações & Acessórios"
          description="As melhores marcas de ração, brinquedos educativos e acessórios exclusivos para o conforto do seu animal."
          image="https://images.unsplash.com/photo-1548175591-628f80456fb4?auto=format&fit=crop&q=80&w=400&h=300"
        />
        <ServiceCard 
          icon={Stethoscope}
          title="Consultoria"
          description="Orientações sobre nutrição, comportamento e bem-estar para garantir uma vida longa e saudável para seu pet."
          image="https://loremflickr.com/400/300/cat,veterinary"
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://loremflickr.com/400/500/dog,puppy" 
            referrerPolicy="no-referrer"
            className="rounded-3xl shadow-lg mt-12" 
            alt="Dog" 
          />
          <img 
            src="https://loremflickr.com/400/500/cat,kitten" 
            referrerPolicy="no-referrer"
            className="rounded-3xl shadow-lg" 
            alt="Cat" 
          />
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <h3 className="text-4xl font-bold font-serif text-brand-dark mb-6">Tradição e Amor na Aclimação</h3>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          Fundada com o propósito de oferecer um atendimento humanizado e próximo, 
          a AclimaVet nasceu da paixão pelos animais e do respeito aos seus tutores.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          Localizados em um dos bairros mais charmosos de São Paulo, somos referência 
          em estética pet e consultoria nutricional, sempre buscando as novidades 
          mais saudáveis para o mercado.
        </p>
        <ul className="space-y-4 mb-8">
          {[
            "Profissionais certificados e carinhosos",
            "Produtos biodegradáveis e hipoalergênicos",
            "Ambiente monitorado e climatizado",
            "Agendamento prático via WhatsApp"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-2 h-2 bg-brand-primary rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="py-24 px-6 bg-brand-dark text-white rounded-[4rem] mx-4 mb-12">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl md:text-5xl font-bold font-serif mb-6 italic">Venha nos visitar</h3>
        <p className="text-emerald-100 text-xl mb-12 max-w-2xl">
          Estamos prontos para receber você e seu pet com toda a atenção que vocês merecem.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
          <div className="flex gap-4">
            <MapPin className="text-brand-primary w-10 h-10 shrink-0" />
            <div>
              <p className="font-bold text-lg mb-1">Nosso Endereço</p>
              <p className="text-emerald-100">Rua José Getúlio, 347</p>
              <p className="text-emerald-100">Aclimação, São Paulo - SP</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="text-brand-primary w-10 h-10 shrink-0" />
            <div>
              <p className="font-bold text-lg mb-1">WhatsApp</p>
              <p className="text-2xl font-serif text-white">(11) 94908-5500</p>
              <p className="text-emerald-100 mt-1">Horário: Seg a Sáb, 9h às 18h</p>
            </div>
          </div>
        </div>

        <a 
          href="https://wa.me/5511949085500" 
          target="_blank"
          className="bg-white text-brand-dark py-5 px-12 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all inline-flex items-center gap-3"
        >
          Conversar pelo WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Dog className="text-brand-primary w-5 h-5" />
        <span className="text-xl font-bold font-serif text-brand-dark">AclimaVet</span>
      </div>
      
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} AclimaVet. Todos os direitos reservados.
      </p>

      <div className="flex gap-6">
        <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">
          <Instagram />
        </a>
        <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors">
          <Facebook />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

