import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Lottie from "lottie-react";
import helloAnimation from "../../../lotties/hello-office-waves.json";

const Main = () => {
  const fetcherQuote = async () => {
    return await Axios.get("https://api.quotable.io/quotes/random");
  };

  const { isLoading, data } = useQuery({
    queryKey: ["fetchQuote"],
    queryFn: fetcherQuote,
  });

  return (
    <div className=" bg-base-200 max-w-5xl mx-auto">
      <div className="flex items-center mx-auto w-full">
        <div>
          <Lottie animationData={helloAnimation} className="w-80" />
        </div>
        <div>
          <h1 className="text-4xl font-bold py-6"> Akory Michel Tsilavo</h1>
          <div className="card w-full bg-base-100 shadow-xl mx-auto  ">
            <div className="card-body">
              {isLoading ? (
                <progress className="progress w-56 mx-auto"></progress>
              ) : (
                <blockquote className="sm:col-span-2">
                  <p className="text-lg font-medium sm:text-2xl italic">
                    {data?.data[0].content}
                  </p>
                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                    <p className="text-sm uppercase text-gray-500 sm:ms-3 mr-2">
                      <strong>{data?.data[0].author}</strong>
                    </p>
                  </cite>
                  {data?.data[0].tags.map((tag) => (
                    <div key={tag} className="badge badge-secondary">
                      {tag}
                    </div>
                  ))}
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="stats shadow  mt-16  w-full">
        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-8 h-8 stroke-current"
            >
              <rect fill="none" height="256" width="256" />
              <polygon opacity="0.2" points="152 32 152 88 208 88 152 32" />
              <path
                d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polyline
                fill="none"
                points="152 32 152 88 208 88"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M48,200H64a16,16,0,0,0,0-32H48v48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polyline
                fill="none"
                points="216 168 188 168 188 216"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                x1="212"
                x2="188"
                y1="196"
                y2="196"
              />
              <path
                d="M128,216a24,24,0,0,0,0-48H114v48Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div className="stat-title">My PDF</div>
          <div className="stat-value">0 </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <rect fill="none" height="256" width="256" />
              <path
                d="M144,164v49.2L112,196v12a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8h56a8,8,0,0,1,8,8v12Z"
                opacity="0.2"
              />
              <polygon opacity="0.2" points="152 32 152 88 208 88 152 32" />
              <polyline
                fill="none"
                points="152 32 152 88 208 88"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <rect
                fill="none"
                height="56"
                rx="8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                width="72"
                x="40"
                y="160"
              />
              <polyline
                fill="none"
                points="112 180 144 164 144 213.2 112 196"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div className="stat-title">My Video</div>
          <div className="stat-value">4 </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <rect fill="none" height="256" width="256" />
              <path
                d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
                opacity="0.2"
              />
              <polygon opacity="0.2" points="152 32 152 88 208 88 152 32" />
              <path
                d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polyline
                fill="none"
                points="152 32 152 88 208 88"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div className="stat-title">My Photo</div>
          <div className="stat-value">5</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <rect fill="none" height="256" width="256" />
              <polygon opacity="0.2" points="152 32 152 88 208 88 152 32" />
              <polyline
                fill="none"
                points="152 32 152 88 208 88"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <polygon
                opacity="0.2"
                points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
              />
              <polygon
                fill="none"
                points="48 204 48 172 72 172 96 152 96 224 72 204 48 204"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M128,163a32,32,0,0,1,0,50"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div className="stat-title">My Audio</div>
          <div className="stat-value">3</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
            >
              <rect fill="none" height="256" width="256" />
              <circle cx="128" cy="140" opacity="0.2" r="40" />
              <circle cx="60" cy="84" opacity="0.2" r="32" />
              <circle cx="196" cy="84" opacity="0.2" r="32" />
              <circle
                cx="128"
                cy="140"
                fill="none"
                r="40"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M196,116a59.8,59.8,0,0,1,48,24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M12,140a59.8,59.8,0,0,1,48-24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M70.4,216a64.1,64.1,0,0,1,115.2,0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M60,116A32,32,0,1,1,91.4,78"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M164.6,78A32,32,0,1,1,196,116"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div className="stat-title">My Groupe</div>
          <div className="stat-value">3</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
