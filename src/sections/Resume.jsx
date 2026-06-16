import { resumeData } from "../constants";
import { assetUrl } from "../constants";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeData.resumePdfUrl;
    link.download = "Abhi_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative c-space section-spacing py-12">
      <div className="flex justify-center items-center">
        <button
          onClick={handleDownload}
          className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-bold text-white text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          <span className="text-2xl">📄</span>
          Download Resume
          <img
            src={assetUrl("assets/arrow-down.svg")}
            alt="Download"
            className="w-5 h-5 group-hover:translate-y-1 transition-transform"
            onError={(e) => (e.target.style.display = "none")}
          />
        </button>
      </div>
    </section>
  );
};

export default Resume;
