import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [SoTienCanDongTang3, setSoTienCanDongTang3] = useState(0)
  const [SoTienCanDongTang4, setSoTienCanDongTang4] = useState(0)
  const [TienDienNgoaiPhong, setTienDienNgoaiPhong] = useState(0)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: any) =>{
    setTienDienNgoaiPhong(data.total - (data.float2 * 2500 + data.float3 * 3500 + data.float4 * 3500))
    setSoTienCanDongTang3((data.float3 * 3500) + 150000 + +data.water_one_member)
    setSoTienCanDongTang4(data.float4 * 3500 + 150000 + (data.water_one_member * 3) + (TienDienNgoaiPhong / 2))
  }

  return (
    <>
      <Head>
        <title>Tính Tiền Điện Gia Đình 11C</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NgoiNha.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
      </Head>
      <main className={styles.main}>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label  className="form-label">Tổng Tiền Điện</label>
            <input type="number" className="form-control" placeholder='VD: 100000' {...register("total", { required: true })}/>
            {errors.total && <span className="text-danger" >Vui lòng nhập tổng tiền điện</span>}
          </div>
          <div className="mb-3">
            <label  className="form-label">Số Điện Tầng 2</label>
            <input type="number" className="form-control" placeholder='VD: 50' {...register("float2", { required: true })}/>
            {errors.float2 && <span className="text-danger" >Vui lòng nhập tiền điện tầng 2</span>}
          </div>
          <div className="mb-3">
            <label  className="form-label">Số Điện Tầng 3</label>
            <input type="number" className="form-control" placeholder='VD: 50'{...register("float3", { required: true })}/>
            {errors.float3 && <span className="text-danger" >Vui lòng nhập tiền điện tầng 3</span>}
          </div>
          <div className="mb-3">
            <label  className="form-label">Số Điện Tầng 4</label>
            <input type="number" className="form-control" placeholder='VD: 50' {...register("float4", { required: true })}/>
            {errors.float4 && <span className="text-danger" >Vui lòng nhập tiền điện tầng 4</span>}
          </div>
          <div className="mb-3">
            <label  className="form-label">Số Tiền Nước 1 Người</label>
            <input type="number" className="form-control" placeholder='VD: 12000' {...register("water_one_member", { required: true })} />
            {errors.water_one_member && <span className="text-danger" >Vui lòng nhập tiền nước 1 người</span>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Tính Toán</button>
          </div>
        </form>
          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col" className="boder-text">Số Tiền Điện Ngoài Phòng</th>
                <th scope="col" className="boder-text">Số Tiền Tầng 3</th>
                <th scope="col" className="boder-text">Số Tiền Tầng 4</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary-subtle">
                <td >{TienDienNgoaiPhong.toLocaleString()} VNĐ</td>
                <td >{SoTienCanDongTang3.toLocaleString()} VNĐ</td>
                <td >{SoTienCanDongTang4.toLocaleString()} VNĐ</td>
              </tr>
            </tbody>
        </table>
        </div>
      </main>
    </>
  )
}
