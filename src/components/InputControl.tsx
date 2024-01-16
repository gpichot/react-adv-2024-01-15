import React from "react";
import styles from "./InputControl.module.css";

interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
}

export default function InputControl(props: InputControlProps) {
  const { label, ...inputProps } = props;
  const id = React.useMemo(() => {
    if (props.id) return props.id;

    return `input-${props.name}-${Math.random().toString(36).slice(2)}`;
  }, [props.id, props.name]);
  return (
    <div
      className={`${styles.inputControl} ${props.required && styles.required}`}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type="text" {...inputProps} id={id} />
    </div>
  );
}
