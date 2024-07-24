import React from "react";

export default function Container({ children, style, innerStyle }: Container) {
  return (
    <>
      <section className={`${style} setbody px-4 lg:px-10`}>
        <div className={innerStyle}>{children}</div>
      </section>
    </>
  );
}
