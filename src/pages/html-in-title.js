import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Entry from '../components/Entry'

function NotFoundPage() {
  const html = 'What happens?'
  return (
    <Layout>
      <Helmet>
        <title>
          Has a `&{'lt;'}b&{'gt;'}` bold `&{'lt;'}/b&{'gt;'}` `&{'lt;'}br &
          {'gt;'}` with `&{'lt;'}img src=x onerror=alert('xss!')&{'gt;'}`
        </title>
      </Helmet>
      <Entry
        fields={{ slug: '/' }}
        frontmatter={{
          title: 'Follow the title'
        }}
        html={html}
      />
    </Layout>
  )
}

export default NotFoundPage
