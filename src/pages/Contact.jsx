import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      from_message: form.from_message.value,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
      })
      .catch((err) => {
        console.error("Email error:", err);
        toast.error("Failed to send message.");
      });
  };

  return (
    <section className="bg-none py-20 px-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-zinc-900 mb-12">Contact Me</h2>

      <form
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-zinc-200"
      >
        <div>
          <label className="block text-zinc-700 font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-blue"
          />
        </div>

        <div>
          <label className="block text-zinc-700 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-blue"
          />
        </div>

        <div>
          <label className="block text-zinc-700 font-semibold mb-1">Message</label>
          <textarea
            name="from_message"
            rows="5"
            required
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-blue"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-main-blue text-white px-6 py-3 rounded-full transition font-semibold cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
