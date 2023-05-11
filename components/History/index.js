import React from 'react';
import HistoryRow from './historyRow';
import HistoryTotal from './historyTotal';

const History = () => {
    const titikPrice =(numb)=>{
        return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    return (
        <>
            <section className="overview overflow-auto">
                <main className="main-wrapper">
                    <div className="ps-lg-0">
                        <div className="top-up-categories mb-30">
                            <h2 className="text-4xl fw-bold color-palette-1 mb-30">History Purchase</h2>
                            <div className="wrapper">
                                <HistoryTotal title="Total Spent" total={titikPrice(8000000)}/>
                                <HistoryTotal title="Total Cash Coin" total={titikPrice(800000)}/>
                            </div>
                        </div>
                        <div className="latest-transaction">
                            <div className="main-content main-content-table overflow-auto">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr className="color-palette-1">
                                            <th className="text-start fw-bold" scope="col">Game</th>
                                            <th className="text-start fw-bold" scope="col ">Item</th>
                                            <th className="text-start fw-bold" scope="col">Price</th>
                                            <th className="text-start fw-bold" scope="col">Cash Coin</th>
                                            <th className="text-start fw-bold" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <HistoryRow title="Minta" item={5} img="img/overview-1.png" type="PC" price={2000} coin={2} status="Pending"/>
                                        <tr className="align-middle text-center">
                                            <th scope="row">
                                                <img className="float-start me-3 mb-lg-0 mb-3" src="img/overview-2.png"
                                                    width="80" height="60" alt=""/>
                                                <div className="game-title-header">
                                                    <p className="game-title fw-medium text-start color-palette-1 m-0">Call of
                                                        Duty:Modern</p>
                                                    <p className="text-xs fw-normal text-start color-palette-2 m-0">Desktop</p>
                                                </div>
                                            </th>
                                            <td>
                                                <p className="fw-medium text-start color-palette-1 m-0">550 Gold</p>
                                            </td>
                                            <td>
                                                <p className="fw-medium text-start color-palette-1 m-0">Rp 740.000</p>
                                            </td>
                                            <td>
                                                <p className="fw-medium text-start color-palette-1 m-0">+35</p>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="float-start icon-status success"></span>
                                                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                                                        Success</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="align-middle text-center">
                                            <th scope="row">
                                                <img className="float-start me-3 mb-lg-0 mb-3" src="img/overview-3.png"
                                                    width="80" height="60" alt=""/>
                                                <div className="game-title-header">
                                                    <p className="game-title fw-medium text-start color-palette-1 m-0">Clash of
                                                        Clans</p>
                                                    <p className="text-xs fw-normal text-start color-palette-2 m-0">Mobile</p>
                                                </div>
                                            </th>
                                            <td>
                                                <p className="fw-medium text-start color-palette-1 m-0">100 Gold</p>
                                            </td>
                                            <td>
                                                <p className="fw-medium text-start color-palette-1 m-0">Rp 120.000</p>
                                            </td>
                                            <td>
                                                <p className="fw-medium text-start color-palette-1 m-0">+8</p>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="float-start icon-status failed"></span>
                                                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">Failed
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                        

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default History;
