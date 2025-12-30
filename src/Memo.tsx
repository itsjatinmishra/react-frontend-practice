import React, { useState, useEffect, memo } from "react";

type ChildProps = {
  name: string;
};

const Child = memo(({ name }: ChildProps) => {
  useEffect(() => {
    console.log("Child Rendered");
  }, []);

  return <>{name}</>;
});

const Memo: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("John Doe");

  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>

      <br />

      {`The value of count is: ${count}`}

      <br />

      <Child name={name} />

      <br />

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default Memo;
