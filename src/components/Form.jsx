import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, Tooltip, CircleMarker, Polygon } from 'react-leaflet';
import axios from 'axios'

const center = [56.835899, 60.583504]

const colorOptions = {color:'purple'}
const centerPolygon = [
  [56.878734, 60.536936],
  [56.817099, 60.541012],
  [56.863623, 60.656552],
  [56.902341, 60.620503]

]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  } 

  console.log(watch("example")); 

  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>

        <h1>Заполните заявку на обратную связь</h1>

        <div classname='input-group mb-3'> 
          <input 
          {...register('lastname',
          {
            required: true,
            maxLength:50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Фамилия'
          />
        </div>
        {errors?.lastname?.type === 'required' && (<p className='text-danger'>Поле обязательно для заполнения</p>)}
        {errors?.lastname?.type === 'maxLength' && (<p className='text-danger'>Поле не может быть больше 50 симолов</p>)}
        {errors?.lastname?.type === 'pattern' && (<p className='text-danger'>Поле заполнено некорректно</p>)}

        <input 
          {...register('firstname',
          {
            required: true,
            maxLength:20,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Имя'
          />
        {errors?.firstname?.type === 'required' && (<p className='text-danger'>Поле обязательно для заполнения</p>)}
        {errors?.firstname?.type === 'maxLength' && (<p className='text-danger'>Поле не может быть больше 20 симолов</p>)}
        {errors?.firstname?.type === 'pattern' && (<p className='text-danger'>Поле заполнено некорректно</p>)}

        <input 
          {...register('patronymic',
          {
            maxLength:40,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Отчество'
          />
        {errors?.patronymic?.type === 'maxLength' && (<p className='text-danger'>Поле не может быть больше 40 симолов</p>)}
        {errors?.patronymic?.type === 'pattern' && (<p className='text-danger'>Поле заполнено некорректно</p>)}

        <input 
          {...register('email',
          {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
          })}
          type='text'
          className='form-control'
          placeholder='Email'
          />
        {errors?.email?.type === 'required' && (<p className='text-danger'>Поле обязательно для заполнения</p>)}
        {errors?.email?.type === 'pattern' && (<p className='text-danger'>Поле заполнено некорректно</p>)}

        
        <input className='btn btn-outline-primary' type="submit" />
      </form>
      <br/>
      <br/>

      <MapContainer
      center={center}
      zoom={10}
      style={{
        width: '100vw',
        height: "500px"
      }}>
        <TileLayer url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=J3klpikS3YHQ3uWqc7IE'
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'></TileLayer>

        <CircleMarker
        center={center}
        pathOptions={{color:'black'}}
        radius={10}>
        </CircleMarker>

        <Marker position={center}>
          <Popup>Мы находимся тут</Popup>
          <Tooltip>При наведении</Tooltip>
        </Marker>

        <Polygon 
        positions={centerPolygon}
        pathOptions={colorOptions}/>
      </MapContainer>
    </div>
  );
}

export default Form