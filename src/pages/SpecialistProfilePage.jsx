import { useParams, Link } from 'react-router-dom'
import { Star, Clock, MapPin, Mail, Phone, Calendar, ChevronLeft, Shield, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

function SpecialistProfilePage() {
  const { id } = useParams()

  // Mock specialist data - in real app this would come from API
  const specialists = {
    1: {
      id: 1,
      name: 'Олена Петренко',
      specialization: 'Клінічний психолог',
      experience: '8 років',
      rating: 4.9,
      reviews: 127,
      price: '800 грн',
      location: 'Київ',
      categories: ['personal', 'couple'],
      image: '👩‍⚕️',
      about: 'Психолог з 8-річним досвідом роботи. Спеціалізуюся на роботі з тривожними розладами, депресією та проблемами у стосунках. Використовую когнітивно-поведінкову терапію та гештальт-підхід.',
      education: [
        'НаУКМА, Психологія, 2016',
        'Інститут психодрами та психотерапії, 2018',
        'Курси КПТ, 2020'
      ],
      methods: ['КПТ', 'Гештальт-терапія', 'Психоаналіз'],
      languages: ['Українська', 'Англійська'],
      workingHours: 'Пн-Пт: 9:00 - 18:00'
    },
    2: {
      id: 2,
      name: 'Андрій Мельник',
      specialization: 'Психотерапевт',
      experience: '12 років',
      rating: 4.8,
      reviews: 98,
      price: '950 грн',
      location: 'Львів',
      categories: ['personal', 'psychiatry'],
      image: '👨‍⚕️',
      about: 'Досвідчений психотерапевт, який працює з широким спектром психологічних проблем. Моя мета - допомогти клієнтам знайти внутрішню рівновагу та гармонію.',
      education: [
        'ЛНУ ім. Івана Франка, Психологія, 2012',
        'Український інститут психодрами, 2015'
      ],
      methods: ['Психоаналіз', 'Екзистенціальна терапія', 'Сімейна терапія'],
      languages: ['Українська', 'Польська'],
      workingHours: 'Пн-Сб: 10:00 - 20:00'
    },
    3: {
      id: 3,
      name: 'Марія Коваль',
      specialization: 'Сімейний психолог',
      experience: '6 років',
      rating: 5.0,
      reviews: 84,
      price: '750 грн',
      location: 'Київ',
      categories: ['couple', 'child'],
      image: '👩‍⚕️',
      about: 'Сімейний психолог, який допомагає парам та сім\'ям подолати кризи та покращити стосунки. Працюю з дітьми від 5 років.',
      education: [
        'КНУ ім. Тараса Шевченка, Психологія, 2018',
        'Курси сімейної терапії, 2020'
      ],
      methods: ['Сімейна терапія', 'Графова терапія', 'КПТ'],
      languages: ['Українська'],
      workingHours: 'Пн-Пт: 8:00 - 17:00'
    },
    4: {
      id: 4,
      name: 'Ігор Савченко',
      specialization: 'Психіатр',
      experience: '15 років',
      rating: 4.7,
      reviews: 156,
      price: '1200 грн',
      location: 'Одеса',
      categories: ['psychiatry'],
      image: '👨‍⚕️',
      about: 'Лікар-психіатр вищої категорії. Спеціалізуюся на діагностиці та лікуванні депресивних та тривожних розладів.',
      education: [
        'ОДМУ, Лікувальна справа, 2009',
        'Інститут психіатрії АМН України, 2011'
      ],
      methods: ['Медикаментозна терапія', 'Психотерапія'],
      languages: ['Українська', 'Російська', 'Англійська'],
      workingHours: 'Пн-Пт: 9:00 - 18:00'
    }
  }

  const specialist = specialists[id] || specialists[1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/specialists" className="inline-flex items-center text-slate-600 hover:text-primary-600 mb-6">
            <ChevronLeft className="w-5 h-5 mr-1" />
            Повернутись до спеціалістів
          </Link>

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center text-7xl">
                  {specialist.image}
                </div>
              </div>

              {/* Info */}
              <div className="flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{specialist.name}</h1>
                    <p className="text-primary-600 font-medium text-lg mb-2">{specialist.specialization}</p>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{specialist.rating}</span>
                        <span className="text-slate-500">({specialist.reviews} відгуків)</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {specialist.experience} досвіду
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {specialist.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="text-3xl font-bold text-slate-900">{specialist.price}</div>
                  <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary"
                    >
                      Зв'язатись з психологом
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card mb-6"
          >
            <h2 className="text-2xl font-bold mb-4">Про мене</h2>
            <p className="text-slate-700 leading-relaxed">{specialist.about}</p>
          </motion.div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-600" />
                Освіта
              </h3>
              <ul className="space-y-3">
                {specialist.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{edu}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-600" />
                Методи роботи
              </h3>
              <div className="flex flex-wrap gap-2">
                {specialist.methods.map((method, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card mb-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-slate-600" />
                  Мови
                </h3>
                <div className="flex flex-wrap gap-2">
                  {specialist.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-slate-600" />
                  Години роботи
                </h3>
                <p className="text-slate-700">{specialist.workingHours}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-bold mb-4">Зв'язатись з психологом</h3>
            <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full"
              >
                Заповнити форму для запису
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SpecialistProfilePage
