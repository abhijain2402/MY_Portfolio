import { resumeData } from "../constants";

const ResumeDownloadBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeData.resumePdfUrl;
    link.download = "Abhi_Jain_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-5 py-3 border border-neutral-400 rounded-lg text-neutral-300 font-medium text-sm hover:border-neutral-300 hover:text-white transition-colors"
    >
      📄 Download Resume
    </button>
  );
};

export default ResumeDownloadBtn;
