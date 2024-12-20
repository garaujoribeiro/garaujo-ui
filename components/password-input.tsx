"use client";

import { ComponentProps, useState } from "react";
import { InputAdornment, InputAdornmentRoot } from "./input-with-icon";
import { Input } from "./input";
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput: React.FC<Omit<ComponentProps<"input">, "type">> = ({
  ...props
}) => {
  const [show, setShow] = useState(false);
  return (
    <InputAdornmentRoot>
      <Input type={show ? "text" : "password"} {...props} />

      <InputAdornment>
        <Button
          className="w-fit h-fit p-1 rounded-full"
          type="button"
          variant={"ghost"}
          size="icon"
          onClick={() => setShow((show) => !show)}
        >
          {!show ? <Eye /> : <EyeOff />}
        </Button>
      </InputAdornment>
    </InputAdornmentRoot>
  );
};

export { PasswordInput };
