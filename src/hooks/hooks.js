import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useForm = (initialValues) => {

  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  }

  const resetForm = () => {
    setForm(initialValues);
  }

  return { form, onChange, resetForm }
};

export const usePrivatePage = (token) => {
  const history = useNavigate();

  useEffect(() => {

    if (! token){
      window.alert('A sessão expirou. Faça login novamente.')
      history.replace('/');
    };
  }, [history]);
};