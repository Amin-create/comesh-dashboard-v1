import { mdiGithub, mdiMonitorCellphone, mdiTableBorder, mdiTableOff } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Button from '../../components/Button'
import CardBox from '../../components/CardBox'
import CardBoxComponentEmpty from '../../components/CardBox/Component/Empty'
import LayoutAuthenticated from '../../layouts/Authenticated'
import NotificationBar from '../../components/NotificationBar'
import SectionMain from '../../components/Section/Main'
import SectionTitleLineWithButton from '../../components/Section/TitleLineWithButton'
import TableSampleClients from '../../components/Table/SampleClients'
import { getPageTitle } from '../../config'
import { useSampleClients } from '../../hooks/sampleData'
import { useRouter } from 'next/router';

interface Client {
  id: number;
  city?: string;
  company?: string;
  created?: string;
  created_mm_dd_yyyy?: string;
  login?: string;
  name?: string;
  progress?: string;
}

const UsersPage = () => {

  const { clients } = useSampleClients()

  console.log("clients", clients)

  const router = useRouter();

  const { userId } = router.query;

  const userDetails: Client | undefined = clients.find((item: any) => item.id === Number(userId))

  console.log("userDetails", userDetails)

  return (
    <>
      <Head>
        <title>{getPageTitle('Users Details')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton title="User Details" main></SectionTitleLineWithButton>
        <CardBox className="p-4 mb-6" hasTable>
          {userDetails && (
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-2">
                <p className="text-lg font-semibold">ID</p>
                <p>{userDetails.id}</p>
              </div>
              <div className="col-span-1">
                <p className="text-lg font-semibold">Name</p>
                <p>{userDetails.name}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Company</p>
                <p>{userDetails.company}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">City</p>
                <p>{userDetails.city}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Login</p>
                <p>{userDetails.login}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Created</p>
                <p>{userDetails.created}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Created (MM/DD/YYYY)</p>
                <p>{userDetails.created_mm_dd_yyyy}</p>
              </div>
              <div className="col-span-1">
                <p className="text-lg font-semibold">Progress</p>
                <div className="w-[300px] bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
                  <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: userDetails.progress + "%" }}> {userDetails.progress}%</div>
                </div>
              </div>
            </div>
          )}
        </CardBox>
      </SectionMain>
    </>
  )
}

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default UsersPage
