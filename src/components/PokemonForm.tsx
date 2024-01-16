import React from "react";
import InputControl from "./InputControl";

export default function PokemonForm() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ name, type, height, weight });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        name="name"
        label="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputControl
        name="type"
        label="Type"
        required
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <InputControl
        name="height"
        label="Height"
        type="number"
        value={height}
        onChange={(e) =>
          setHeight(isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber)
        }
      />
      <InputControl
        name="weight"
        label="Weight"
        type="number"
        value={weight}
        onChange={(e) =>
          setWeight(isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber)
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}
