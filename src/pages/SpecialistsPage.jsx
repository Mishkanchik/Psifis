import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Star, Clock, MapPin, ChevronRight, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import AnimatedDropdown from '../components/ui/animated-dropdown'

function SpecialistsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  const categories = [
    { id: 'all', name: 'Всі терапії' },
    { id: 'personal', name: 'Особиста терапія' },
    { id: 'couple', name: 'Парна терапія' },
    { id: 'child', name: 'Дитяча терапія' },
    { id: 'psychiatry', name: 'Психіатрія' },
  ]

  const priceRanges = [
    { id: 'all', name: 'Всі ціни' },
    { id: 'low', name: 'до 700 грн' },
    { id: 'medium', name: '700-1000 грн' },
    { id: 'high', name: '1000+ грн' },
  ]

  const categoryItems = categories.map(cat => ({ name: cat.name, id: cat.id }))
  const priceRangeItems = priceRanges.map(range => ({ name: range.name, id: range.id }))

  const therapists = [
    {
      id: 1,
      name: 'Олена Петренко',
      specialization: 'Клінічний психолог',
      experience: '8 років',
      rating: 4.9,
      reviews: 127,
      price: 800,
      categories: ['personal', 'couple'],
      image: '👩‍⚕️',
      location: 'Київ',
      available: true
    },
    {
      id: 2,
      name: 'Андрій Мельник',
      specialization: 'Психотерапевт',
      experience: '12 років',
      rating: 4.8,
      reviews: 98,
      price: 950,
      categories: ['personal', 'psychiatry'],
      image: '👨‍⚕️',
      location: 'Львів',
      available: true
    },
    {
      id: 3,
      name: 'Марія Коваль',
      specialization: 'Сімейний психолог',
      experience: '6 років',
      rating: 5.0,
      reviews: 84,
      price: 750,
      categories: ['couple', 'child'],
      image: '👩‍⚕️',
      location: 'Київ',
      available: false
    },
    {
      id: 4,
      name: 'Ігор Савченко',
      specialization: 'Психіатр',
      experience: '15 років',
      rating: 4.7,
      reviews: 156,
      price: 1200,
      categories: ['psychiatry'],
      image: '👨‍⚕️',
      location: 'Одеса',
      available: true
    },
    {
      id: 5,
      name: 'Наталія Бойко',
      specialization: 'Дитячий психолог',
      experience: '10 років',
      rating: 4.9,
      reviews: 92,
      price: 650,
      categories: ['child'],
      image: '👩‍⚕️',
      location: 'Харків',
      available: true
    },
    {
      id: 6,
      name: 'Олександр Тимошенко',
      specialization: 'Психотерапевт',
      experience: '7 років',
      rating: 4.6,
      reviews: 67,
      price: 850,
      categories: ['personal'],
      image: '👨‍⚕️',
      location: 'Київ',
      available: true
    },
  ]

  const filteredTherapists = therapists
    .filter(therapist => {
      const matchesCategory = selectedCategory === 'all' || therapist.categories.includes(selectedCategory)
      const matchesSearch = therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           therapist.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      
      let matchesPrice = true
      if (selectedPriceRange === 'low') matchesPrice = therapist.price < 700
      else if (selectedPriceRange === 'medium') matchesPrice = therapist.price >= 700 && therapist.price <= 1000
      else if (selectedPriceRange === 'high') matchesPrice = therapist.price > 1000

      return matchesCategory && matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return 0
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Знайдіть свого ідеального психолога
          </h1>
          <p className="text-xl text-slate-600">
            {filteredTherapists.length} спеціалістів готові допомогти
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Пошук за іменем або спеціалізацією..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3 lg:col-span-1">
              <AnimatedDropdown
                items={categoryItems}
                text={categories.find(c => c.id === selectedCategory)?.name || 'Всі'}
                onSelect={(item) => setSelectedCategory(item.id)}
              />
            </div>

            {/* Price Filter */}
            <div className="md:col-span-3 lg:col-span-1">
              <AnimatedDropdown
                items={priceRangeItems}
                text={priceRanges.find(r => r.id === selectedPriceRange)?.name || 'Всі ціни'}
                onSelect={(item) => setSelectedPriceRange(item.id)}
              />
            </div>

            {/* Sort */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-600">Сортувати:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'rating', label: 'За рейтингом' },
                    { id: 'price', label: 'За ціною' },
                    { id: 'reviews', label: 'За відгуками' }
                  ].map(option => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSortBy(option.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        sortBy === option.id
                          ? 'bg-primary-500 text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Therapists Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTherapists.map((therapist) => (
            <motion.div
              key={therapist.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card relative"
            >

              <div className="text-6xl text-center mb-4">{therapist.image}</div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">{therapist.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{therapist.specialization}</p>
              
              <div className="flex items-center space-x-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{therapist.rating}</span>
                <span className="text-slate-500 text-sm">({therapist.reviews} відгуків)</span>
              </div>

              <div className="flex items-center text-slate-600 text-sm mb-2">
                <Clock className="w-4 h-4 mr-1" />
                {therapist.experience} досвіду
              </div>

              <div className="flex items-center text-slate-600 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {therapist.location}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-slate-900">{therapist.price} грн</span>
              </div>

              <Link to={`/specialist/${therapist.id}`}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                >
                  Профіль
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredTherapists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Спеціалістів не знайдено
            </h3>
            <p className="text-slate-600">
              Спробуйте змінити параметри пошуку
            </p>
          </motion.div>
        )}
        </div>
      </div>
    </div>
  )
}

export default SpecialistsPage
