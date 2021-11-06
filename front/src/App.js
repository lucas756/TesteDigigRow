import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material';
import { instance } from './services/api';

function App() {
  const { handleSubmit, register } = useForm();

  const [data, setData] = useState([])

  useEffect(() => {
    instance.get('inputs').then((res) => {
      const { data } = res
      setData(data)
    })
  }, [])

  const submit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submit)}>
        {data.map((item) => (
           item.type === 'submit' ? <Button style={{ width: '30%', margin: 10, marginLeft: '65%' }} variant='contained' type={item.type}>{item.label}</Button> : <TextField style={{marginLeft: '50%', transform: 'translate(-50%)', width: '90%', marginTop: 10 }} type={item.type} placeholder={item.label} {...register(`${item.key}`)} />
           
        ))}
      </form>
    </div>
  );
}

export default App;
