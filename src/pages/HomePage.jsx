import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Heart, 
  Search, 
  Star, 
  Shield, 
  Users, 
  MessageCircle, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Brain,
  Baby,
  Users2,
  Stethoscope,
  ChevronLeft
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import Navigation from '../components/Navigation'

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    if (location.state?.scrollToFooter) {
      const footer = document.querySelector('footer')
      if (footer) {
        setTimeout(() => {
          footer.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
    if (location.state?.scrollToMap) {
      const mapSection = document.getElementById('map')
      if (mapSection) {
        setTimeout(() => {
          mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.state])

  useEffect(() => {
    if (location.hash === '#map') {
      const mapSection = document.getElementById('map')
      if (mapSection) {
        setTimeout(() => {
          mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }
    }
  }, [location.hash])

  const therapists = [
    {
      id: 1,
      name: 'Олена Петренко',
      specialization: 'Клінічний психолог',
      experience: '8 років',
      rating: 4.9,
      reviews: 127,
      price: '800 грн',
      image: '👩‍⚕️',
      location: 'Київ'
    },
    {
      id: 2,
      name: 'Андрій Мельник',
      specialization: 'Психотерапевт',
      experience: '12 років',
      rating: 4.8,
      reviews: 98,
      price: '950 грн',
      image: '👨‍⚕️',
      location: 'Львів'
    },
    {
      id: 3,
      name: 'Марія Коваль',
      specialization: 'Сімейний психолог',
      experience: '6 років',
      rating: 5.0,
      reviews: 84,
      price: '750 грн',
      image: '👩‍⚕️',
      location: 'Київ'
    },
    {
      id: 4,
      name: 'Ігор Савченко',
      specialization: 'Психіатр',
      experience: '15 років',
      rating: 4.7,
      reviews: 156,
      price: '1200 грн',
      image: '👨‍⚕️',
      location: 'Одеса'
    },
    {
      id: 5,
      name: 'Наталія Бойко',
      specialization: 'Дитячий психолог',
      experience: '10 років',
      rating: 4.9,
      reviews: 92,
      price: '650 грн',
      image: '👩‍⚕️',
      location: 'Харків'
    },
    {
      id: 6,
      name: 'Олександр Тимошенко',
      specialization: 'Психотерапевт',
      experience: '7 років',
      rating: 4.6,
      reviews: 67,
      price: '850 грн',
      image: '👨‍⚕️',
      location: 'Київ'
    }
  ]

  const maxSlide = Math.max(0, therapists.length - slidesPerView)

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }

  const categories = [
    { id: 'personal', name: 'Особиста терапія', icon: Heart },
    { id: 'couple', name: 'Парна терапія', icon: Users },
    { id: 'child', name: 'Дитяча терапія', icon: Heart },
    { id: 'psychiatry', name: 'Психіатрія', icon: Shield },
    { id: 'corporate', name: 'Корпоративний', icon: Users },
  ]

  const issues = [
    { id: 1, name: 'Депресія', category: 'personal' },
    { id: 2, name: 'Тривога', category: 'personal' },
    { id: 3, name: 'Панічні атаки', category: 'personal' },
    { id: 4, name: 'Стосунки', category: 'couple' },
    { id: 5, name: 'Самотність', category: 'personal' },
    { id: 6, name: 'Вигорання', category: 'personal' },
    { id: 7, name: 'ПТСР', category: 'personal' },
    { id: 8, name: 'Дитячі проблеми', category: 'child' },
  ]

  const faqs = [
    {
      question: 'Як вибрати психолога?',
      answer: 'Ознайомтесь з профілями спеціалістів, читайте відгуки та оберіть того, до кого відчуваєте довіру. Перша консультація допоможе зрозуміти, чи підходить вам терапевт.'
    },
    {
      question: 'Скільки коштує консультація?',
      answer: 'Ціни варіюються від 500 до 1500 грн залежно від кваліфікації спеціаліста та типу терапії. Багато психологів пропонують знижки на першу сесію.'
    },
    {
      question: 'Чи конфіденційні сесії?',
      answer: 'Так, все що обговорюється на сесії є суворо конфіденційним. Психологи дотримуються етичного кодексу та законодавства про захист персональних даних.'
    },
    {
      question: 'Як відбувається онлайн-консультація?',
      answer: 'Онлайн-сесії проводяться через відеозв\'язок (Zoom, Google Meet) або у чаті. Вам знадобиться стабільний інтернет та тихе місце для розмови.'
    },
  ]

  const filteredTherapists = therapists.filter(therapist => {
    const matchesCategory = selectedCategory === 'all' || therapist.categories.includes(selectedCategory)
    const matchesSearch = therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         therapist.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-accent-100"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Знайдіть психолога,
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {' '}який вас зрозуміє
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            Платформа для пошуку кваліфікованих психологів та психотерапевтів. 
            Онлайн та офлайн консультації для вашого ментального здоров'я.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/specialists">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                Знайти спеціаліста
              </motion.button>
            </Link>
            <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Записатись на консультацію
              </motion.button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: 500, label: 'Психологів', color: 'text-primary-600', suffix: '+' },
              { value: 10000, label: 'Клієнтів', color: 'text-accent-600', suffix: '+', prefix: '' },
              { value: 50000, label: 'Сесій', color: 'text-primary-600', suffix: '+', prefix: '' },
              { value: 4.9, label: 'Рейтинг', color: 'text-accent-600', suffix: '', prefix: '', decimals: 1 }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl font-bold ${stat.color}`}>
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      {/* All Therapies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Всі види терапії
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Оберіть підхід, який найкраще підходить для ваших потреб
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Brain,
                title: 'Когнітивно-поведінкова терапія',
                description: 'Допомагає змінити негативні думки та поведінкові патерни',
                color: 'bg-primary-100',
                iconColor: 'text-primary-600'
              },
              {
                icon: Heart,
                title: 'Гештальт-терапія',
                description: 'Фокусується на поточному досвіді та усвідомленості',
                color: 'bg-accent-100',
                iconColor: 'text-accent-600'
              },
              {
                icon: Users2,
                title: 'Сімейна терапія',
                description: 'Робота з сімейними конфліктами та стосунками',
                color: 'bg-primary-100',
                iconColor: 'text-primary-600'
              },
              {
                icon: Baby,
                title: 'Дитяча терапія',
                description: 'Психологічна допомога дітям та підліткам',
                color: 'bg-accent-100',
                iconColor: 'text-accent-600'
              },
              {
                icon: Stethoscope,
                title: 'Психіатрія',
                description: 'Медичне лікування психічних розладів',
                color: 'bg-primary-100',
                iconColor: 'text-primary-600'
              },
              {
                icon: Users,
                title: 'Парна терапія',
                description: 'Робота з парами для покращення стосунків',
                color: 'bg-accent-100',
                iconColor: 'text-accent-600'
              },
              {
                icon: Shield,
                title: 'Психоаналіз',
                description: 'Дослідження несвідомих процесів та дитячих травм',
                color: 'bg-primary-100',
                iconColor: 'text-primary-600'
              },
              {
                icon: Heart,
                title: 'Емоційно-фокусована терапія',
                description: 'Робота з емоціями та емоційною регуляцією',
                color: 'bg-accent-100',
                iconColor: 'text-accent-600'
              }
            ].map((therapy, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${therapy.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <therapy.icon className={`w-8 h-8 ${therapy.iconColor}`} />
                </motion.div>
                <h3 className="font-bold mb-2 text-slate-900">{therapy.title}</h3>
                <p className="text-slate-600 text-sm">{therapy.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Популярні теми
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Знайдіть спеціаліста, який допоможе з вашою ситуацією
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {issues.map((issue, index) => (
              <motion.button
                key={issue.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white rounded-full border border-slate-200 text-slate-700 hover:border-primary-500 hover:text-primary-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {issue.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Therapists Section */}
      <section id="specialists" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Наші спеціалісти
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-center mb-8 max-w-2xl mx-auto"
          >
            Кваліфіковані психологи готові допомогти вам
          </motion.p>

          {/* Slider */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6"
                animate={{ x: `-${currentSlide * (100 / slidesPerView)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {therapists.map((therapist) => (
                  <motion.div
                    key={therapist.id}
                    whileHover={{ y: -10 }}
                    className="card group flex-shrink-0"
                    style={{ width: `${100 / slidesPerView}%` }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="text-6xl text-center mb-4"
                    >
                      {therapist.image}
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{therapist.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{therapist.specialization}</p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{therapist.rating}</span>
                      <span className="text-slate-500 text-sm">({therapist.reviews} відгуків)</span>
                    </div>

                    <div className="flex items-center text-slate-600 text-sm mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      {therapist.experience} досвіду
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-900">{therapist.price}</span>
                      <Link to={`/specialist/${therapist.id}`}>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary py-2 px-4 text-sm"
                        >
                          Профіль
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-3 rounded-full ${
                  currentSlide === 0 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                disabled={currentSlide === maxSlide}
                className={`p-3 rounded-full ${
                  currentSlide === maxSlide 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/specialists">
              <button className="btn-secondary">
                Переглянути всіх спеціалістів
                <ChevronRight className="w-4 h-4 inline ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Наші гарантії
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, color: 'text-primary-600', title: 'Конфіденційність', desc: 'Всі дані захищені та залишаються між вами та психологом' },
              { icon: CheckCircle, color: 'text-accent-600', title: 'Кваліфікація', desc: 'Тільки ліцензовані та сертифіковані спеціалісти' },
              { icon: Users, color: 'text-primary-600', title: 'Підтримка', desc: 'Наша команда готова допомогти 24/7' },
              { icon: Heart, color: 'text-accent-600', title: 'Безпека', desc: 'Безпечне платіжне середовище та захист даних' }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card text-center"
              >
                <guarantee.icon className={`w-10 h-10 ${guarantee.color} mx-auto mb-4`} />
                <h3 className="font-bold mb-2">{guarantee.title}</h3>
                <p className="text-slate-600 text-sm">{guarantee.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Питання та відповіді
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card"
              >
                <h3 className="font-bold text-lg mb-2 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Готові почати свій шлях до покращення?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 mb-8 text-lg"
          >
            Знайдіть свого ідеального психолога вже сьогодні
          </motion.p>
          <Link to="/specialists">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg text-lg"
          >
            Знайти психолога
          </motion.button>
          </Link>
        </div>
      </section>

      {/* Map Section */}
        <section id="map" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ми на карті
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Map on left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1732889265715!2d30.52357841562169!3d50.45009997947537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50ff555555%3A0x4f4f4f4f4f4f4f4f!2z0JrQuNC10LIsINCa0LjRgNC-0LLQsNGPINGD0LsuLCAx!5e0!3m2!1suk!2sua!4v1784659155900!5m2!1suk!2sua"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>

              {/* Description on right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Наше розташування</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Ми знаходимося в самому центрі Києва, що дозволяє легко дістатися до нас будь-яким транспортом.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Адреса</h4>
                      <p className="text-slate-600">вул. Хрещатик, 1, Київ, Україна</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Години роботи</h4>
                      <p className="text-slate-600">Пн-Пт: 9:00 - 20:00<br/>Сб-Нд: 10:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Телефон</h4>
                      <p className="text-slate-600">+380 44 123 4567</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Псифіс</span>
              </div>
              <p className="text-slate-400">
                Платформа для пошуку психологів та психотерапевтів в Україні
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Напрямки</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Особиста терапія</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Парна терапія</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дитяча терапія</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Психіатрія</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компанія</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Про нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для бізнесу</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакти</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  info@psifis.ua
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  +380 44 123 4567
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Київ, Україна
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 Псифіс. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
