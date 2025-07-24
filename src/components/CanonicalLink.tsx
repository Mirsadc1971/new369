import React from 'react'
import { Helmet } from 'react-helmet-async'

interface CanonicalLinkProps {
  href: string
}

const CanonicalLink: React.FC<CanonicalLinkProps> = ({ href }) => {
  return (
    <Helmet>
      <link rel="canonical" href={href} />
    </Helmet>
  )
}

export default CanonicalLink