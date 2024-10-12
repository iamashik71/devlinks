import React, { useState } from "react";

const CustomLinks = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <form
      className="p-4 bg-white rounded-lg shadow-sm"
      //   onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Customize your links
      </h1>
      <p className="text-gray-600 mb-6">
        Add/edit/remove links below and then share all your profiles with the
        world.
      </p>

      <fieldset className="mb-6">
        <button
          type="button"
          className="w-full bg-transparent text-[#633CFF] border border-[#633CFF] rounded-lg p-3 hover:bg-[#efebff] mb-4"
          //   onClick={addLink}
          //   ref={addLinkButton}
        >
          + Add new link
        </button>

        <div className="text-center p-4">
          <img
            src="/images/illustration-empty.svg"
            className="mx-auto mb-4"
            alt="Empty illustration"
          />
          <h1 className="text-xl font-semibold text-gray-900">
            Let's get you started
          </h1>
          <p className="text-gray-600">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </fieldset>

      <section className="text-center">
        <button className="w-full bg-[#633CFF] text-white rounded-lg p-3 hover:bg-[#4f32d6] flex justify-center items-center">
          Save
        </button>
      </section>

      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md rounded-t-lg">
          You can Drag and Drop!
          <button
            className="ml-4 text-[#633CFF] font-semibold"
            // onClick={handleClosePopup}
          >
            Got it!
          </button>
          <div className="w-4 h-4 bg-white transform rotate-45 absolute bottom-[-10px] left-1/2 translate-x-[-50%]"></div>
        </div>
      )}
    </form>
  );
};

export default CustomLinks;
