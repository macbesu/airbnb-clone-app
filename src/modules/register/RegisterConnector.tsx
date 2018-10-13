import * as React from 'react';
import { RegisterView } from './ui/RegisterView';
import { RegisterController } from '../../controller/RegisterController';

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <RegisterController>
        {
          ({ submit }: { submit: any }) => <RegisterView submit={this.dummySubmit} />
        }
      </RegisterController>
    );
  }
};
