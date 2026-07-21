import { useState } from 'react'
import { ChevronRight, ChevronLeft, Heart, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../components/Navigation'

function TestPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: 'Яка проблема вас турбує найбільше?',
      options: [
        { id: 'a', text: 'Тривога та стрес', icon: '😰' },
        { id: 'b', text: 'Депресія та смуток', icon: '😔' },
        { id: 'c', text: 'Стосунки з партнером', icon: '💑' },
        { id: 'd', text: 'Проблеми з дітьми', icon: '👨‍👩‍👧' },
        { id: 'e', text: 'Самотність', icon: '😢' },
        { id: 'f', text: 'Інше', icon: '🤔' }
      ]
    },
    {
      id: 2,
      question: 'Як давно ви відчуваєте цю проблему?',
      options: [
        { id: 'a', text: 'Менше місяця', icon: '📅' },
        { id: 'b', text: '1-3 місяці', icon: '📆' },
        { id: 'c', text: '3-6 місяців', icon: '🗓️' },
        { id: 'd', text: 'Більше 6 місяців', icon: '📊' },
        { id: 'e', text: 'Більше року', icon: '📈' }
      ]
    },
    {
      id: 3,
      question: 'Який формат консультації вам підходить?',
      options: [
        { id: 'a', text: 'Онлайн (відео)', icon: '💻' },
        { id: 'b', text: 'Онлайн (чат)', icon: '💬' },
        { id: 'c', text: 'Офлайн (особисто)', icon: '🏢' },
        { id: 'd', text: 'Телефон', icon: '📞' }
      ]
    },
    {
      id: 4,
      question: 'Який бюджет ви готові виділити на сесію?',
      options: [
        { id: 'a', text: '500-700 грн', icon: '💵' },
        { id: 'b', text: '700-1000 грн', icon: '💰' },
        { id: 'c', text: '1000-1500 грн', icon: '💳' },
        { id: 'd', text: '1500+ грн', icon: '💎' }
      ]
    },
    {
      id: 5,
      question: 'Який спеціаліст вам потрібен?',
      options: [
        { id: 'a', text: 'Психолог', icon: '🧠' },
        { id: 'b', text: 'Психотерапевт', icon: '👨‍⚕️' },
        { id: 'c', text: 'Психіатр', icon: '🏥' },
        { id: 'd', text: 'Сімейний психолог', icon: '👨‍👩‍👧‍👦' },
        { id: 'e', text: 'Дитячий психолог', icon: '🧒' }
      ]
    },
    {
      id: 6,
      question: 'Який час доби вам зручний?',
      options: [
        { id: 'a', text: 'Ранок (9:00-12:00)', icon: '🌅' },
        { id: 'b', text: 'День (12:00-17:00)', icon: '☀️' },
        { id: 'c', text: 'Вечір (17:00-21:00)', icon: '🌆' },
        { id: 'd', text: 'Будь-який', icon: '🕐' }
      ]
    },
    {
      id: 7,
      question: 'Важливі критерії вибору спеціаліста',
      options: [
        { id: 'a', text: 'Досвід роботи', icon: '⭐' },
        { id: 'b', text: 'Ціна', icon: '💲' },
        { id: 'c', text: 'Відгуки клієнтів', icon: '📝' },
        { id: 'd', text: 'Спеціалізація', icon: '🎯' },
        { id: 'e', text: 'Всі однаково важливі', icon: '✅' }
      ]
    }
  ]

  const handleAnswer = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { duration: 0.5 }
    }
  }

  const optionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Дякуємо за ваші відповіді!
            </h1>
            <p className="text-xl text-slate-600">
              Ми підібрали для вас найкращих спеціалістів
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                name: 'Олена Петренко',
                specialization: 'Клінічний психолог',
                rating: 4.9,
                price: '800 грн',
                match: 95,
                image: '👩‍⚕️'
              },
              {
                name: 'Андрій Мельник',
                specialization: 'Психотерапевт',
                rating: 4.8,
                price: '950 грн',
                match: 92,
                image: '👨‍⚕️'
              },
              {
                name: 'Марія Коваль',
                specialization: 'Сімейний психолог',
                rating: 5.0,
                price: '750 грн',
                match: 88,
                image: '👩‍⚕️'
              }
            ].map((specialist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {specialist.match}% збіг
                </div>
                <div className="text-6xl text-center mb-4">{specialist.image}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{specialist.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{specialist.specialization}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold">{specialist.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">{specialist.price}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full"
                >
                  Записатись
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <button className="btn-secondary">
              <ArrowRight className="w-4 h-4 inline mr-2" />
              Переглянути всіх спеціалістів
            </button>
          </motion.div>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentStep]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">
              Крок {currentStep + 1} з {questions.length}
            </span>
            <span className="text-sm font-medium text-primary-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="card"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-slate-900 mb-8 text-center"
            >
              {currentQuestion.question}
            </motion.h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={option.id}
                  custom={index}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center space-x-4 ${
                    answers[currentQuestion.id] === option.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-slate-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <span className="text-3xl">{option.icon}</span>
                  <span className="font-medium text-slate-700">{option.text}</span>
                  {answers[currentQuestion.id] === option.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto"
                    >
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Назад</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  !answers[currentQuestion.id]
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                <span>{currentStep === questions.length - 1 ? 'Завершити' : 'Далі'}</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Step Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {questions.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-primary-500 scale-125'
                  : index < currentStep
                  ? 'bg-primary-300'
                  : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default TestPage
