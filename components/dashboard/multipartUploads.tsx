import React from "react";
import UploadAsset from "./upload";

const MultipartUploads = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h6 className="text-[14px] font-medium leading-5">Business License</h6>
        <p className="mt-1 mb-4 text-[12px] leading-4 text-[#525866]">
          Business License recommended.
        </p>
        <UploadAsset />
      </div>
      <div>
        <h6 className="text-[14px] font-medium leading-5">Tax ID</h6>
        <p className="mt-1 mb-4 text-[12px] leading-4 text-[#525866]">
          Tax ID recommended.
        </p>
        <UploadAsset />
      </div>
    </div>
  );
};

export default MultipartUploads;
