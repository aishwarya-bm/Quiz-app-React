import "./button-component.css";
export function Button(props) {
  const { color, btnLabel } = props;
  return (
    <>
      <button style={{ color: color }}>{btnLabel}</button>
    </>
  );
}
