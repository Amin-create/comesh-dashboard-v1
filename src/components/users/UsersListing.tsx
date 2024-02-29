import { mdiEye, mdiTrashCan } from '@mdi/js'
import React, { useState } from 'react'
import { useSampleClients } from '../../hooks/sampleData'
import { Client } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'
import UserAvatar from '../UserAvatar'
import { useRouter } from 'next/router';


const UsersListing = () => {

    const router = useRouter();

    const { clients } = useSampleClients()
    console.log("clients", clients)

    const perPage = 5

    const [currentPage, setCurrentPage] = useState(0)

    const clientsPaginated = clients.slice(perPage * currentPage, perPage * (currentPage + 1))

    const numPages = clients.length / perPage

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
        router.push(`/users/${id}`);
    }

    const handleDelete = (id: number) => {
        // console.log("handleDelete called id:", id)
        setIsModalTrashActive(true)
        setUserToDelete(id)
    }

    console.log("clientsPaginated", clientsPaginated)

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
                    Do you realy want to delete user : <b>{userToDelete}</b>
                </p>
                {/* <p>This is sample modal</p> */}
            </CardBoxModal>

            {/* city
            name
            created
            country
            niches
            interests
            social_media_apps
            followers
            followings
            media
            location
            willingToTravel
            typeOfContent
            city
            name */}

            <table>
                <thead>
                    <tr>
                        <th />
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Content Type</th>
                        <th>Created</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {clientsPaginated.map((client: Client) => (
                        <tr key={client.id}>
                            <td className="border-b-0 lg:w-6 before:hidden">
                                <UserAvatar username={client.name} className="w-24 h-24 mx-auto lg:w-6 lg:h-6" />
                            </td>
                            <td data-label="Name">{client.name}</td>
                            <td data-label="Company">{client.country}</td>
                            <td data-label="City">{client.city}</td>
                            <td data-label="Progress" className="lg:w-32">
                                {client.typeOfContent}
                            </td>
                            <td data-label="Created" className="lg:w-1 whitespace-nowrap">
                                <small className="text-gray-500 dark:text-slate-400">{client.created}</small>
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

export default UsersListing
