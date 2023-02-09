import { useState } from "react";

const Accordion = ({ data }) => {
  return (
    <div className="accordion p-3">
      {data.map(({ header, body }, key) => (
        <AccordionItem header={header} body={body} key={key} />
      ))}
    </div>
  );
};

const AccordionItem = ({ header, body }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion-item">
      <div className="relative container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <div className="mb-5 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <a href="#">
                <div className="py-5 w-full px-8 bg-white bg-opacity-60 border-2 border-black-600 rounded-2xl shadow-10xl">
                  <button
                    className="flex w-full flex-wrap p-2"
                    onClick={(event) => {
                      setShow(!show);
                      event.preventDefault();
                    }}
                  >
                    <div className="flex flex-col w-full p-3 gap-y-6">
                      <div className="flex w-full justify-between">
                        <h3 className="text-lg font-semibold leading-normal text-left">
                          {header}
                        </h3>
                        {show ? (
                          <svg
                            className="relative top-1"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                              stroke="#4F46E5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="relative top-1"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.25 6.75L9 12L3.75 6.75"
                              stroke="#18181B"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      {show ? (
                        <p className="text-gray-600 font-medium text-left">
                          {body}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
