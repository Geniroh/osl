import { Row, Col } from 'antd'
import React from 'react'

const ProgressBar = ({ firstNum, firstText, secondNum, secondText, title}) => {
  return (
    <div className='w-full py-10 bg-white'>
       <Row>
            <Col xs={20} md={20} className="mx-auto">
                <h2 className="text-2xl md:text-[24px] text-[#010D33] font-semibold">{title}</h2>
                <div className="relative py-4 md:py-8">
                    <div className="h-2 bg-gray-300 rounded-full">
                        <div className="bg-[#FFA903] h-full rounded-full" style={{ width: '50%' }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className="absolute left-0 top-0 md:top-[15px] w-full flex justify-between">
                        <ul className="flex items-center justify-between w-full">
                            <li className="text-center">
                                <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full border-4 border-[#FFA903] text-xl font-semibold text-mydark mb-2 md:mb-0">{firstNum}</span>
                                <p className="text-md md:text-lg font-medium text-mydark">{firstText}</p>
                            </li>
                            <li className="text-center">
                                <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full border-4 border-[#FFA903] text-xl font-semibold text-mydark mb-2 md:mb-0">{secondNum}</span>
                                <p className="text-md md:text-lg font-medium text-mydark">{secondText}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>  
       </Row>
    </div>
  )
}

export default ProgressBar