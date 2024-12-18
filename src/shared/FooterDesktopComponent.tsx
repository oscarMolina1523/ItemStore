import React from "react";


const FooterDesktopComponent: React.FC = () => {
  return (
    <div className="hidden md:flex w-full bg-blue text-surface-neutral flex-col md:flex-row items-center justify-around mt-auto py-6 gap-4">
      <div className="flex flex-col items-start w-full md:w-3/4 text-justify gap-2 px-2">
        <span className="text-surface-neutral opacity-95">About</span>
        <p>This website was created and developed by Web Developer <strong>Oscar Danilo Molina.</strong> With a focus on functionality and design, I have worked to deliver an exceptional user experience and attractive design that reflects the brand identity.
          If you have any questions or need more information, do not hesitate to contact me.</p>
        <div className="flex flex-row gap-1">
          <span className="text-surface-neutral opacity-95">Email:</span>
          <span className="text-surface-neutral opacity-75">oscarmolina20032021@gmail.com</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="text-surface-neutral opacity-95">Phone:</span>
          <span className="text-surface-neutral opacity-75">+505 5720 7708</span>
        </div>
      </div>
    </div>
  );
}

export default FooterDesktopComponent;