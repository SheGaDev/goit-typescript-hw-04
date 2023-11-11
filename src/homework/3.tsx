import { ChangeEvent, useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setValue(value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
