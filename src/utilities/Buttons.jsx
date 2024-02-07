import { Tooltip } from "@chakra-ui/react";
import React, { useContext } from "react";
import {
  BsCheckLg,
  BsExclamationLg,
  BsEyeFill,
  BsQuestionLg,
  BsRecycle,
} from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ModeContext } from "../App";

export default function AddButton(props) {
  return (
    <button
      onClick={() => props.modal(true)}
      className="py-2.5 px-12 rounded bg-themePurple font-medium text-base text-white border border-themePurple hover:bg-transparent hover:text-themePurple"
    >
      Add {props.text}
    </button>
  );
}

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-x-2 font-medium text-base text-white bg-themePurple py-2.5 px-5 border border-themePurple rounded hover:bg-transparent hover:text-themePurple"
    >
      <HiArrowLeft />
      Back
    </button>
  );
}

export function TabButton(props) {
  const { dark } = useContext(ModeContext);
  return (
    <button
      onClick={() => props.set(props.text)}
      className={`font-medium text-xl px-5 py-2.5 ${props.width} border ${
        dark ? "border-themeWhite" : "border-themePurple w"
      } ${
        props.tab === props.text && dark
          ? "bg-themeWhite text-themePurple"
          : props.tab === props.text && !dark
          ? "bg-themePurple text-white"
          : props.tab !== props.text && dark
          ? "text-themeWhite bg-transparent"
          : "text-themePurple bg-transparent"
      }`}
    >
      {props.text}
    </button>
  );
}

export function ModalButtons(props) {
  return (
    <div className="flex justify-end gap-x-2">
      <button
        type="button"
        onClick={props.close}
        className="py-2.5 w-24 rounded font-medium text-sm text-themePurple border border-themePurple hover:bg-themePurple hover:text-white"
      >
        Cancel
      </button>
      <button
        type="submit"
        onClick={props.action}
        disabled={props.disabled}
        className="py-2.5 w-24 rounded font-medium text-sm text-white bg-themePurple border border-themePurple hover:bg-transparent hover:text-themePurple"
      >
        {props.text}
      </button>
    </div>
  );
}

export function DTApproved() {
  const { dark } = useContext(ModeContext);
  return (
    <button
      className={`${
        dark
          ? "text-white bg-themePurple border-themePurple hover:bg-transparent hover:text-themePurple"
          : "text-white bg-themePurple border-themePurple hover:bg-transparent hover:text-themePurple"
      } py-2.5 px-5 rounded-md border`}
    >
      Approved
    </button>
  );
}

export function DTPending() {
  const { dark } = useContext(ModeContext);
  return (
    <button
      className={`${
        dark
          ? "text-black bg-themeOrange border-themeOrange hover:bg-transparent hover:text-themeOrange"
          : "text-black bg-themeOrange border-themeOrange hover:bg-transparent hover:text-themeOrange"
      } py-2.5 px-5 rounded-md border`}
    >
      Pending
    </button>
  );
}

export function DTRejected() {
  const { dark } = useContext(ModeContext);
  return (
    <button
      className={`${
        dark
          ? "text-white bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600"
          : "text-white bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600"
      } py-2.5 px-5 rounded-md border`}
    >
      Rejected
    </button>
  );
}

export function DTApprove(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Approve Driver" aria-label="A tooltip">
      <button
        onClick={props.approve}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-themeOrange border-themeOrange hover:bg-themeOrange hover:text-white"
            : "text-themeOrange border-themeOrange hover:bg-themeOrange hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <BsCheckLg />
      </button>
    </Tooltip>
  );
}

export function DTReject(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Reject Driver" aria-label="A tooltip">
      <button
        onClick={props.reject}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
            : "text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <RxCross2 />
      </button>
    </Tooltip>
  );
}

export function DTView(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="View Details" aria-label="A tooltip">
      <button
        onClick={props.view}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-white text-opacity-50 border-white border-opacity-50 hover:bg-white hover:bg-opacity-50 hover:text-white"
            : "text-gray-500 border-gray-500 hover:bg-gray-500 hover:text-white"
        } p-1 rounded-fullest border-2 `}
      >
        <BsEyeFill />
      </button>
    </Tooltip>
  );
}

export function DTEdit(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Edit" aria-label="A tooltip">
      <button
        onClick={props.edit}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-white border-white hover:bg-white hover:text-themePurple"
            : "text-themePurple border-themePurple hover:bg-themePurple hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <MdModeEditOutline />
      </button>
    </Tooltip>
  );
}

export function DTQuestion(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Complete Registration" aria-label="A tooltip">
      <button
        onClick={props.question}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-white border-white hover:bg-white hover:text-themePurple"
            : "text-black border-black hover:bg-black hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <BsQuestionLg />
      </button>
    </Tooltip>
  );
}

export function DTVerify(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Approve" aria-label="A tooltip">
      <button
        onClick={props.verify}
        className={`${
          dark
            ? "text-white border-white hover:bg-white hover:text-themePurple"
            : "text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <BsExclamationLg />
      </button>
    </Tooltip>
  );
}

export function DTDel(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Delete" aria-label="A tooltip">
      <button
        onClick={props.del}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-white border-white hover:bg-white hover:text-red-600"
            : "text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <RiDeleteBinLine />
      </button>
    </Tooltip>
  );
}

export function DTResend(props) {
  const { dark } = useContext(ModeContext);
  return (
    <Tooltip label="Re-send" aria-label="A tooltip">
      <button
        onClick={props.resend}
        disabled={props.disabled}
        className={`${
          dark
            ? "text-white border-white hover:bg-white hover:text-themeOrange"
            : "text-themeOrange border-themeOrange hover:bg-themeOrange hover:text-white"
        } p-1 rounded-fullest border-2`}
      >
        <BsRecycle />
      </button>
    </Tooltip>
  );
}
