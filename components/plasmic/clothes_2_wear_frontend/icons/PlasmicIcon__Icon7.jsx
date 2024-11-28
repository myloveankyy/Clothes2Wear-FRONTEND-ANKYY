// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5 3a1 1 0 000 2h1.22l.305 1.222a.993.993 0 00.01.042l1.358 5.43-.893.892C5.74 13.846 6.632 16 8.414 16H17a1 1 0 000-2H8.414l1-1H16a1 1 0 00.894-.553l3-6A1 1 0 0019 5H8.28l-.31-1.243A1 1 0 007 3H5zm13 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
