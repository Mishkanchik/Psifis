import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Завантаження...')

  useEffect(() => {
    const texts = ['Завантаження...', 'Підготовка...', 'Майже готово...']
    let textIndex = 0
    
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length
      setLoadingText(texts[textIndex])
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(textInterval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto">
            <Heart className="w-full h-full text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full animate-ping" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">Псифіс</h1>
        <p className="text-white/80 mb-8">{loadingText}</p>
        
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <p className="text-white/60 mt-4 text-sm">{Math.round(Math.min(progress, 100))}%</p>
      </div>
    </div>
  )
}

export default Preloader
