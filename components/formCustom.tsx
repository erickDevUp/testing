"use client";
import { useState } from "react";
import SelectCustom from "./SelectCustom";
import { SubmitHandler, useForm } from "react-hook-form";
import Result from "./result";
import InputCustom from "./inputCustom";
import styled from "styled-components";

type Props = { data: Array<String> };
type FormInput = {
  from: string;
  to: string;
  amount: number;
};

export default function FormCustom({ data }: Props) {
  const [show, setShow] = useState(false);
  const [convert, setConvert] = useState({
    from: "",
    amount: 0.0,
    to: "",
    result: 0.0,
  });

  //fetch a la api para convertir
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    fetch("/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        setConvert({ ...response });
        setShow(true);
      });
  };

  return (
    <>
      <Continer>
        <Title>Fonoma Exchange</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCustom register={register}></InputCustom>
          <Section>
            <SelectCustom
              label={"from"}
              currencies={data}
              register={register}
            ></SelectCustom>
            <SelectCustom
              label={"to"}
              currencies={data}
              register={register}
            ></SelectCustom>
          </Section>
          <Button type="submit">Convert</Button>
        </form>
        {show && <Result {...convert} />}
      </Continer>
    </>
  );
}

const Title = styled.h1`
  font-size: x-large;
  margin-bottom: 50px;
  color: #333;
`;

const Continer = styled.div`
  background-color: rgba(219, 234, 254);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Section = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 1rem;
  margin-bottom: 10px;

  color: #555;
  font-size: small;
`;

const Button = styled.button`
  width: 300px;
  background-color: rgb(59, 130, 246);

  height: 30px;
  color: #fff;
  border: none;
  font-weight: bold;
  border-radius: 0.5rem;

  margin-bottom: 25px;
`;
