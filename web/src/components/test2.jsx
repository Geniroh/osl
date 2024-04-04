import React from 'react';

const Test2 = () => {
    return (
        <section className="customer-details-area py-9 md:py-10">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="customer-details-content flex flex-wrap items-center">
                            <div className="icon mr-6">
                                <img src="/img/customer_det_icon.jpg" alt="" />
                            </div>
                            <div className="content flex-grow">
                                <h2 className="title text-xl md:text-2xl font-semibold text-mydark mb-4 md:mb-6">Please select a space</h2>
                                <div className="customer-progress-wrap relative py-4 md:py-8">
                                    <div className="progress h-1 bg-gray-300 rounded-full">
                                        <div className="progress-bar bg-yellow-400 h-full rounded-full" style={{ width: '50%' }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="customer-progress-step absolute left-0 top-0 w-full flex justify-between">
                                        <ul className="flex items-center justify-between w-full">
                                            <li className="text-center">
                                                <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full border-4 border-yellow-400 text-xl font-semibold text-mydark mb-2 md:mb-0">1</span>
                                                <p className="text-xs md:text-sm font-medium text-mydark">Space selection</p>
                                            </li>
                                            <li className="text-center">
                                                <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full border-4 border-yellow-400 text-xl font-semibold text-mydark mb-2 md:mb-0">2</span>
                                                <p className="text-xs md:text-sm font-medium text-mydark">Guest Information</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Test2;
