import { createTheme } from "react-data-table-component";

const primaryStyles = {
  rows: {
    style: {
      minHeight: "80px",
      margin: "4px 0",
      borderRadius: "8px",
      overflow: "hidden",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "500",
      color: "rgba(0, 0, 0, 0.6)",
    },
  },
  cells: {
    style: {
      fontSize: "16px",
      fontWeight: "500",
      color: "black",
      background: "white",
      wordBreak: "break-word",
    },
  },
};

const primaryStylesDark = {
  rows: {
    style: {
      minHeight: "80px",
      margin: "4px 0",
      borderRadius: "8px",
      overflow: "hidden",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "500",
      color: "white",
    },
  },
  cells: {
    style: {
      fontSize: "16px",
      fontWeight: "500",
      color: "white",
      background: "#333333",
      wordBreak: "break-word",
    },
  },
  pagination: {
    style: {
      color: "white",
      fill: "white",
    },
    pageButtonsStyle: {
      color: "white",
      fill: "white",
      "&:disabled": {
        cursor: "unset",
        color: "rgba(255,255,255,0.4)",
        fill: "rgba(255,255,255,0.4)",
      },
      "&:hover:not(:disabled)": {
        backgroundColor: "rgba(255,255,255,0.4)",
      },
      "&:focus": {
        outline: "none",
        backgroundColor: "rgba(255,255,255,0.4)",
      },
    },
  },
  noData: {
    style: {
      color: "white",
    },
  },
};

const theme = createTheme("myTheme", {
  background: {
    default: "transparent",
  },
  divider: {
    default: "transparent",
  },
});

export default primaryStyles;
export { primaryStylesDark };
export { theme };
export const active =
  "py-1 px-4 font-normal text-sm border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded";
export const block =
  "py-1 px-4 font-normal text-sm border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded";
export const blue =
  "py-1 px-4 font-normal text-sm border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded";
export const gray =
  "py-1 px-4 font-normal text-sm border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white rounded";
