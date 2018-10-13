import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { View } from "react-native";
import * as yup from 'yup';

import { Button } from 'react-native-elements';
import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ flex: 1, width: '86%', display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
          <Field
            name="email"
            placeholder="邮箱"
            component={InputField}
            containerStyle={{ width: '100%' }}
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="密码"
            component={InputField}
            containerStyle={{ width: '100%' }}
          />
          <Button
            title="注册"
            onPress={handleSubmit as any}
            style={{
              marginTop: 30
            }}
            buttonStyle={{
              backgroundColor: "#00BCD4",
              width: '100%',
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 20,
              alignSelf: 'center'
            }}
          />
      </View>
    );
  }
}

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(3, passwordNotLongEnough)
    .max(255)
    .required()
});

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);