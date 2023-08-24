import React from 'react'

const Table = () => {
    return (

        <>

            <div className=' flex justify-start w-full md:justify-center md:w-full overflow-x-auto text-white mt-32 '>
                <div className='w-fit '>
            <h1 className='text-center text-4xl text-white mb-4'>Transactions</h1>
                    <table className=' w-fit border-2 border-collapse text-sm md:w-full mt-5  md:text-base  '>
                        <thead>
                            <tr className='text-center md:text-center'>
                                <th className='p-4 border-2'>USERID</th>
                                <th className='p-4 border-2'>AMOUNT</th>
                                <th className='p-4 border-2'>METHODE</th>
                                <th className='p-4 border-2'>TIME</th>
                            </tr>
                            <tr className='text-center hover:text-red-700 '>
                                <td className='p-4 border-2'>1218974612384761298374621gu43ug4k2j3geiou2fgeoiu2h3f</td>
                                <td className='p-4 border-2'>123123123</td>
                                <td className='p-4 border-2'>received</td>
                                <td className='p-4 border-2'>:1231@:!@312:!@3</td>
                            </tr>
                            <tr className='text-center hover:text-red-700 '>
                                <td className='p-4 border-2'>1218974612384761298374621gu43ug4k2j3geiou2fgeoiu2h3f</td>
                                <td className='p-4 border-2'>123123123</td>
                                <td className='p-4 border-2'>received</td>
                                <td className='p-4 border-2'>:1231@:!@312:!@3</td>
                            </tr>
                        </thead>
                    </table>
                </div>


            </div>
        </>


    )
}

export default Table
