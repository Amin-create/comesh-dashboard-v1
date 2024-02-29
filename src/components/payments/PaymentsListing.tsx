import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleTransactions } from '../../hooks/sampleData'
import { Payments } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
// import UserAvatar from '../UserAvatar'
import { useRouter } from 'next/router';

const PaymentsListing = () => {

    const router = useRouter();

    const { transactions } = useSampleTransactions()

    const perPage = 5

    const [currentPage, setCurrentPage] = useState(0)

    const transactionsPaginated = transactions.slice(perPage * currentPage, perPage * (currentPage + 1))

    const numPages = transactions.length / perPage

    const pagesList = []

    for (let i = 0; i < numPages; i++) {
        pagesList.push(i)
    }

    const [isModalTrashActive, setIsModalTrashActive] = useState(false)

    const [userToDelete, setUserToDelete] = useState(0)

    const handleModalAction = () => {
        setIsModalTrashActive(false)
    }

    const handleView = (id: number) => {
        router.push(`/payments/${id}`);
    }

    const handleDelete = (id: number) => {
        // console.log("handleDelete called id:", id)
        setIsModalTrashActive(true)
        setUserToDelete(id)
    }

    console.log("transactionsPaginated listing", transactionsPaginated) 

    return (
        <>
            <CardBoxModal
                title="Please confirm"
                buttonColor="danger"
                buttonLabel="Confirm"
                isActive={isModalTrashActive}
                onConfirm={handleModalAction}
                onCancel={handleModalAction}
            >
                <p>
                    Do you realy want to delete this payment from history : <b>{userToDelete}</b>
                </p>
            </CardBoxModal>
            {/* -------------- Payments Listing table -------------- */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Business</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {transactionsPaginated.map((client: Payments) => (
                        <tr key={client.id}>
                            <td data-label="Name">{client.name}</td>
                            <td data-label="Company">{client.business}</td>
                            <td data-label="City">{client.amount}</td>
                            <td data-label="Progress" className="lg:w-32">
                                <span className='capitalize'>
                                    {client.type}
                                </span>
                            </td>
                            <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                                <small className="text-gray-500 dark:text-slate-400">{client.date}</small>
                            </td>
                            <td className="before:hidden lg:w-1 whitespace-nowrap">
                                <Buttons type="justify-start lg:justify-end" noWrap>
                                    <Button
                                        color="info"
                                        icon={mdiEye}
                                        onClick={() => handleView(client.id)}
                                        small
                                    />
                                    <Button
                                        color="danger"
                                        icon={mdiTrashCan}
                                        onClick={() => handleDelete(client.id)}
                                        small
                                    />
                                </Buttons>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
                    <Buttons>
                        {pagesList.map((page) => (
                            <Button
                                key={page}
                                active={page === currentPage}
                                label={page + 1}
                                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                                small
                                onClick={() => setCurrentPage(page)}
                            />
                        ))}
                    </Buttons>
                    <small className="mt-6 md:mt-0">
                        Page {currentPage + 1} of {numPages}
                    </small>
                </div>
            </div>

        </>
    )
}

export default PaymentsListing
