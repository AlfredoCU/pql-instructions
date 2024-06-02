import classNames from "classnames";
import "./EmptyState.css";

type TEmptyState = {
  readonly src: string;
  readonly round?: boolean;
  readonly message: string;
};

export default function EmptyState({ src, message, round }: TEmptyState) {
  return (
    <div className="empty-state">
      <img
        src={src}
        alt={message}
        className={classNames({ "img-round": round })}
      />
      <h1>{message}</h1>
    </div>
  );
}
