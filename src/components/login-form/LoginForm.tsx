import React from "react";
import styled from "styled-components";
import { useForm, Controller as ControlledInput } from "react-hook-form";
import { Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import Button from "../button/Button";

const LoginForm = () => {
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(control.getValues());
    console.log(`[Test] form data: ${JSON.parse(data)}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormLabel>Username</FormLabel>
        <ControlledInput
          name="Username"
          as={Input}
          control={control}
          rules={{ required: true }}
          placeholder="Username"
          defaultValue=""
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
        {errors.Username && <FormError>Please input your Username!</FormError>}
      </div>

      <div>
        <FormLabel>Password</FormLabel>
        <ControlledInput
          name="Password"
          as={Input}
          control={control}
          rules={{ required: true }}
          placeholder="Password"
          defaultValue=""
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
        {errors.Password && <FormError>Please input your Password!</FormError>}
      </div>

      <div>
        <FormLabel>Remember me</FormLabel>
        <ControlledInput
          name="Remember"
          as={Checkbox}
          control={control}
          defaultChecked={false}
          defaultValue={false}
        />
      </div>

      <div>
        <Button primary={true} type="submit">
          Log in
        </Button>
        Or{" "}
        <Button primary={false} type="button">
          register now!
        </Button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const FormLabel = styled.label`
  font-weight: 500;
`;

const FormError = styled.span`
  color: red;
`;

export default LoginForm;
