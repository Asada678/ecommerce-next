import { FC, ReactNode } from "react";
// import Ticker from "react-ticker";
import style from "./Marquee.module.css";
import classname from "classnames";

interface Props {
  children: ReactNode | ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = classname(style.root, {
    [style.secondary]: variant === "secondary",
  });
  return (
    <div className={rootClassName}>
      <div className={style.container}>{children}</div>
      {/* <Ticker offset={80}>
      React 18では動作しないためコメントアウト
        {() => (
          <>
          </>
        )}
      </Ticker> */}
    </div>
  );
};

export default Marquee;
