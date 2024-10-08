import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md lg:max-w-lg">
          <h1 className="mb-5 text-7xl font-bold">Welcome to Traverse</h1>
          <p className="mb-5">
            Your AI-powered travel companion! Uncover hidden gems and local favorites in any city with our intelligent
            recommendations. Traverse uses cutting-edge AI to tailor travel tips and information to your unique
            interests. Just tell us where you are headed, and let our app guide you to unforgettable experiences. Start
            your journey of discovery today!
          </p>
          <div className="space-x-4">
            <Link href={"/chat"} className="btn btn-primary">
              Get Started
            </Link>
            <Link href={"/chat"} className="btn btn-primary btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
