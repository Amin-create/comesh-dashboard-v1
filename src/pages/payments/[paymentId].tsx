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
import { useSampleTransactions } from '../../hooks/sampleData'
import { useRouter } from 'next/router';
import { Payments } from '../../interfaces'

const UsersPage = () => {

  const { transactions } = useSampleTransactions()

  console.log("transactions", transactions)

  const router = useRouter();

  const { paymentId } = router.query;

  const transactionDetails: Payments | undefined = transactions.find((item: any) => item.id === Number(paymentId))

  console.log("transactionDetails", transactionDetails)

  return (
    <>
      <Head>
        <title>{getPageTitle('Payment Details')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton title="Payment Details" main></SectionTitleLineWithButton>
        <CardBox className="p-4 mb-6" hasTable>
          {transactionDetails && (
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">ID</p>
                <p>{transactionDetails.id}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Account</p>
                <p>{transactionDetails.account}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Amount</p>
                <p>{transactionDetails.amount}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Business</p>
                <p>{transactionDetails.business}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-semibold">Date</p>
                <p>{transactionDetails.date}</p>
              </div>
              <div className="col-span-2">
                <p className="text-lg font-semibold">Name</p>
                <p>{transactionDetails.name}</p>
              </div>
              <div className="col-span-2">
                <p className="text-lg font-semibold">Type</p>
                <p>{transactionDetails.type}</p>
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
