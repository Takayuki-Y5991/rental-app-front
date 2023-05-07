import { Button, Select, TextInput, createStyles } from '@mantine/core';
import React from 'react';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { Customer } from '../../types/Customer';
import moment from 'moment';
import { CustomerFormProps } from '../../types/CustomerFormProps';
const useStyles = createStyles(() => ({
  wrapContainer: {
    marginTop: '1rem',
  },
  columns: {
    marginBottom: '1rem',
  },
  buttonArea: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

export const CustomerForm = ({
  customer,
  action,
  notification,
  status,
  setStatus,
}: CustomerFormProps) => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      id: customer.id,
      name: customer.name,
      gender: customer.gender,
      password: customer.password,
      birthday: customer.birthday ? new Date(customer.birthday) : null,
      registerDate:
        customer.registerDate !== null
          ? moment(customer.registerDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
          : new Date(),
      updateDate:
        customer.updateDate !== null
          ? moment(customer.updateDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
          : new Date(),
    },
    validate: {
      name: (value) => (value.length < 2 ? '顧客名は２文字以上で入力してください。' : null),
      gender: (value) => (value === undefined || value === 0 ? '性別を選択してください。' : null),
      birthday: (value) => (value === undefined ? '誕生日を入力してください。' : null),
      password: (value) => (value.length < 8 ? 'パスワードは８文字以上で設定してください' : null),
    },
    transformValues: (value) => ({
      id: value.id,
      name: value.name,
      gender: Number(value.gender),
      password: value.password,
      birthday: moment(value.birthday).format('YYYY-MM-DD'),
      registerDate:
        value.registerDate !== undefined
          ? moment(value.registerDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
          : null,
      updateDate:
        value.updateDate !== undefined
          ? moment(value.updateDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
          : null,
    }),
  });

  const onSubmit = (values: {
    id: number | undefined;
    name: string;
    gender: number;
    password: string;
    birthday: string;
    registerDate: string | null;
    updateDate: string | null;
  }) => {
    const customerData: Customer = {
      ...values,
      birthday: values.birthday ? moment(values.birthday).format('YYYY-MM-DD') : undefined,
      registerDate: values.registerDate
        ? moment(values.registerDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
        : undefined,
      updateDate: values.updateDate
        ? moment(values.updateDate).format('YYYY-MM-DDTHH:mm:ss.SSSSSS')
        : undefined,
    };
    action.mutate(customerData);
    form.reset();
    if (status !== undefined) {
      setStatus?.(!status);
      window.location.reload();
    }
    notification();
  };

  return (
    <div className={classes.wrapContainer}>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          className={classes.columns}
          label="氏名"
          placeholder="ex: 顧客 A"
          withAsterisk
          {...form.getInputProps('name')}
        />
        <Select
          className={classes.columns}
          label="性別"
          placeholder="ex: 男性"
          defaultValue={customer.gender?.toString()}
          withAsterisk
          data={[
            { value: '1', label: '男性' },
            { value: '2', label: '女性' },
          ]}
          {...form.getInputProps('gender')}
        />
        <DateInput
          className={classes.columns}
          label="誕生日"
          valueFormat="YYYY-MM-DD"
          placeholder="ex: 1990/01/01"
          withAsterisk
          {...form.getInputProps('birthday')}
        />
        <TextInput
          className={classes.columns}
          type="password"
          label="パスワード"
          placeholder="ex: ********"
          withAsterisk
          {...form.getInputProps('password')}
        />
        <div className={classes.buttonArea}>
          <Button
            type="submit"
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
            w={100}
          >
            登録
          </Button>
        </div>
      </form>
    </div>
  );
};
