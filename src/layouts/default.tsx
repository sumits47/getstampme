import Head from 'next/head'
import { PropsWithChildren } from 'react'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Get Stamp</title>
        <meta
          name="description"
          content="Launch simple loyalty programs in minutes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen max-w-3xl mx-auto flex flex-col">
        <div className="grow p-4">{children}</div>
      </div>
    </>
  )
}
