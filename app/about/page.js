import Image from "next/image";

export const metadata = {
  title: "About Traverse- Your Tech-Savvy Travel Companion",
  description: "Discover the story behind Traverse, the app that's revolutionizing travel experiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">About Traverse</h1>
            <p className="py-6">Empowering you to enjoy the vacations you deserve.</p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            At Traverse, we believe in bridging the gap between technology and travel. Our mission is to create
            unforgettable journeys for everyone, connecting them with innovation hubs around the globe.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Alice", "Bob", "Charlie"].map((name) => (
              <div key={name} className="card bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image src={`/api/placeholder/150/150`} alt={name} width={150} height={150} />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{name}</h3>
                  <p>Tech Travel Enthusiast</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Travel Adventure?</h2>
          <p className="mb-8">Join Traverse today and explore the world's most innovative destinations!</p>
          <button className="btn btn-secondary btn-lg">Get Started</button>
        </div>
      </section>
    </div>
  );
}
