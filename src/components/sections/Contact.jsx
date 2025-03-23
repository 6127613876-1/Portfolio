import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import useAlert from './useAlert.js';
import Alert from './Alert.jsx';

export const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_edkx9t7",
        "template_q2yrjx3",
        form,
        "UyT-yBMssYCis3nDe"
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({ name: '', email: '', message: '' });
          }, 3000);  // Fixed incorrect timeout array brackets
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      {alert.show && <Alert {...alert} />}
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="Name..."
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                placeholder="Your Message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
