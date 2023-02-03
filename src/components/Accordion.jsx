import React from "react";
import { Collapse } from "react-collapse";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

export const Accordion = ({ open, toggle, title, desc }) => {
  return (
    <>
      <div className="pt-[10px]">
        <div
          className="bg-white py-[25px] px-[20px] flex justify-between items-center cursor-pointer"
          onClick={toggle}
        >
          <p className="text-[22px] font-semibold">{title}</p>
          <div className="text-30px">
            {open ? (
              <BiDownArrow style={{ color: "black" }} />
            ) : (
              <BiUpArrow value={{ color: "black" }} />
            )}
          </div>
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-[50px] pb-[20px]">{desc}</div>
      </Collapse>
    </>
  );
};
