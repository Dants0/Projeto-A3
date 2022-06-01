import React from 'react'
import { useForm } from 'react-hook-form';
import {ChatTeardrop, Check, FileSearch, IdentificationCard, User} from 'phosphor-react';
import styles from './styles.module.scss';



const RentRegister = () => {
  const {register, handleSubmit} = useForm();
  // const onSubmit = (d) => alert(JSON.stringify(d));
  const onSubmit = (d) => console.log(d);


  return (
    <>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Formulário de Registro</h1>
          </div>
          <div className={styles.box}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">
                <User size={20} color="white" /><input type="text" placeholder="Nome" {...register("Nome", { required: true, maxLength: 20 })}/>
              </label>
              <label htmlFor="">
                <User size={20} color="white"/><input type="text" placeholder="Sobrenome" {...register('Sobrenome')}/>
              </label>
              <label htmlFor="">
                <IdentificationCard size={20} color="white"/><input type="text" placeholder="CPF" {...register('CPF')} />
              </label>
              <label htmlFor="">
                <IdentificationCard size={20} color="white"/><input type="text" placeholder="RG" {...register('RG')}/>
              </label>
              <label htmlFor="">
                <Check size={20} color="white"/><input type="text" placeholder="Status" {...register('Status')}/>
              </label>
              <label htmlFor="">
                <ChatTeardrop size={20} color="white"/><textarea placeholder="Observações" {...register('Observações')}></textarea>
              </label>
              <label htmlFor="" id='importFile'>
                <FileSearch size={20} color="white"/><input type="file"/>
              </label>
              <input type="submit" id={styles.submitData} value='Cadastrar'/>
            </form>
          </div>
        </div>
    </>
  )
}

export default RentRegister