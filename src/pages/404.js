import React from 'react'

import Layout from '../components/Layout'
import Entry from '../components/Entry'

function NotFoundPage() {
  const html = '<p>Diese Seite gibt es nicht. 🤷‍♂️'
  return (
    <Layout>
      <Entry title="Inhalt nicht verfügbar" slug="/" html={html} />
    </Layout>
  )
}

export default NotFoundPage
