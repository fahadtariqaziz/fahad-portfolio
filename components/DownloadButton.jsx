import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const DownloadButton = () => {
  const handleDownloadCV = () => {
    const anchor = document.createElement("a");
    anchor.href = "/cv.pdf"; // Adjust the path if necessary
    anchor.download = "Fahad_Tariq_Aziz_CV.pdf";
    anchor.click();
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownloadCV} // Ensure onClick is handled directly in the component
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;
