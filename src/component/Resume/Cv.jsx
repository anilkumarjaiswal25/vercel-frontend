import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { AiOutlineFileText, AiOutlineCloudDownload } from 'react-icons/ai';
import { VscLoading } from 'react-icons/vsc';

// Local Worker Setup (No CORS error)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Cv = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // const pdfPath = "../assets/My-resume/ANIL JAISWAL- RESUME.pdf";
  // Naya path (Public folder ke liye):
  const pdfPath = "/My-resume/ANIL JAISWAL- RESUME.pdf";

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col items-center bg-section min-h-screen p-4 md:p-10'>

      {/* Header Section */}
      <div className="text-center mb-10 mt-4">
        <h1 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">
          PROFESSIONAL <span className="text-purple-600">PROFILE</span>
        </h1>
      </div>

      {/* PDF Viewport */}
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden border-none flex justify-center group transition-all duration-500 hover:shadow-purple-500/20">
        <Document
          file={pdfPath}
          loading={
            <div className="flex flex-col items-center py-24 text-purple-400">
              <VscLoading className="animate-spin text-5xl mb-3" />
              <p className="font-medium tracking-widest uppercase text-sm">Loading PDF...</p>
            </div>
          }
          className="flex justify-center"
        >
          <Page
            pageNumber={1}
            width={width > 768 ? 850 : width - 40}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            canvasBackground="transparent"
            devicePixelRatio={window.devicePixelRatio > 1 ? 2 : 1}
            className="m-0 p-0"
          />
        </Document>
      </div>
      <div className="mt-12 mb-10">
        <a
          href={pdfPath}
          download="Anil_Jaiswal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center gap-3 px-8 py-3 bg-purple-600 text-white rounded-md font-bold text-[15px] shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 active:scale-95 border-b-4 border-purple-900'
        >
          <AiOutlineCloudDownload className="text-2xl" />
          <span>DOWNLOAD CV</span>
        </a>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .react-pdf__Page__canvas {
          margin: 0 auto !important;
          width: 100% !important;
          height: auto !important;
          display: block !important;
        }
        .react-pdf__Document {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      `}} />
    </div>
  );
}

export default Cv;