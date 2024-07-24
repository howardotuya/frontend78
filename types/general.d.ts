type InputFieldProps = {
  type: string;
  placeholder: string;
  value: string;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type InputContainer = {
  label: string;
  children: React.JSX.Element;
};

type SignUpFormData = {
  name: string;
  email: string;
  password: string = "";
};

type Container = {
  children: React.JSX.Element;
  style?: string;
  innerStyle?: string;
};
