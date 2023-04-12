import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TopUpItem from "@/components/Details/TopUpItem"
import NominalCard from "@/components/Details/NominalCard"
import PaymentCard from "@/components/Details/PaymentCard"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"


export default function Details({product}) {
    const [data, setData] = useState(product)
    const [idGame, setIdGame] = useState('');

    const handleInputIdGame = (e) => {
        setIdGame(e.target.value)
    }
    
    return (
        <>
            <Head>
                <title>CashLess Shop | Detail</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/icon/logoo.png" />
            </Head>
            <Navbar/>
            <section className="detail pt-lg-60 pb-50 .bg-secondary">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50 pt-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 ">CashLess</h2>
                        <p className="text-lg color-palette-1 mb-0">Grab Your Own Things Here</p>
                    </div>
                    <div className="form col">
                        <TopUpItem
                            img={data.img}
                            title={data.name}
                            type={data.type}
                            idProduct={data.id}
                        />
                        <form method="POST">
                            <div className="md-50">
                                <label id="ID" className="form-label text-lg fw-medium color-palette-1 mb-10" >User
                                    ID</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                                    aria-describedby="UserID" placeholder="Enter your ID"
                                    onChange={handleInputIdGame}/>
                                {idGame? '' :
                                    <span className="text-danger text-xs">
                                    Masukkan ID Game
                                    </span>
                                }
                            </div>
                            <div className="mt-30">
                                <p className="text-lg fw-medium color-palette-1 ">Nominal Top Up</p>
                            </div>
                            <div className="flex-row d-flex flex-wrap pb-md-30 pb-20">
                                {data?.priceList?.map((priceList) => (
                                    <NominalCard item={priceList.item} price={priceList.price} coin={priceList.coin}/>
                                )) }
                            </div>
                            <div className="pb-md-30 pb-20">
                                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                                <div className="flex-row d-flex flex-wrap ">
                                    <PaymentCard/>
                                    <PaymentCard/>
                                    <PaymentCard/>
                                    <PaymentCard/>
                                    <PaymentCard/>
                                </div>
                            </div>
                            {/* <div className="pb-50">
                                <label for="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                                    Account
                                    Name</label>
                                <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                                    name="bankAccount" aria-describedby="bankAccount"
                                    placeholder="Enter your Bank Account Name"/>
                            </div> */}
                            <div className="detail d-sm-block d-flex flex-column w-100 mt-4">
                                {/* <Link href={`checkout/${data.id}`} type="submit"
                                    className="btn btn-submit rounded-pill fw-medium border-0 text-lg">Continue
                                </Link> */}
                                <Link href="/checkout" type="submit">
                                    <button className="button-sub" disabled={!idGame? true : false}>Continue</button>
                                </Link>
                            </div>
                        </form>
                        
                    </div>
                    {/* <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <TopUpItem />
                        </div>
                        
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            
                            
                        </div>
                    </div> */}
                </div>
            </section>
            <Footer/>
        </>

    )
}
export async function getServerSideProps({params}){
    const res = await fetch('http://localhost:3000/api/product/'+params.id)
    const product = await res.json()
    return {
      props:{
        product
      }
    }
}
