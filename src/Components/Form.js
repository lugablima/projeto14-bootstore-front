import styled from "styled-components";
import FormButton from "./FormButton";
import Input from "./Input";

export default function Form({ data }) {
  return (
    <Container autoComplete="on" onSubmit={data.form.onSubmit}>
      {data.inputs.map((input, index) => (
        <label key={index} htmlFor={index}>
          {input.label}
          <Input
            id={index}
            onChange={input.onChange}
            value={input.value}
            type={input.type}
            placeholder={input.placeholder}
            required={input.required}
            disabled={input.disabled}
          />
        </label>
      ))}
      <FormButton disabled={data.button.disabled}>{data.button.text}</FormButton>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 36px;

  button {
    margin: 30px 0 20px 0;
  }

  label {
    text-align: left;
    text-transform: uppercase;
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
    color: var(--gray-03);
  }
`;
