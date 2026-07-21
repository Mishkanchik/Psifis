import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function ContactPage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { state: { scrollToFooter: true } })
  }, [navigate])

  return (
    <div className="min-h-screen">
      <Navigation />
    </div>
  )
}

export default ContactPage
