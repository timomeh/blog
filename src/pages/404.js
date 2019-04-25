import React from 'react'

import Layout from '../components/Layout'
import Entry from '../components/Entry'

function NotFoundPage() {
  const html = '<p>Diese Seite gibt es nicht. 🤷‍♂️'
  return (
    <Layout>
      <Entry
        fields={{ slug: '/' }}
        frontmatter={{ title: 'Seite nicht gefunden' }}
        html={html}
      />
    </Layout>
  )
}

export default NotFoundPage
