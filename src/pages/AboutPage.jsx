import { Heart, Users, Shield, Target, Award, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import Navigation from '../components/Navigation'

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Дбаємо про людей',
      description: 'Місія нашої платформи - зробити ментальне здоров\'я доступним для кожного'
    },
    {
      icon: Shield,
      title: 'Конфіденційність',
      description: 'Ваші дані та історія сесій повністю захищені та конфіденційні'
    },
    {
      icon: Users,
      title: 'Професіоналізм',
      description: 'Тільки сертифіковані та досвідчені спеціалісти з перевіреними кваліфікаціями'
    },
    {
      icon: Target,
      title: 'Результат',
      description: 'Допомагаємо досягти реальних змін у житті наших клієнтів'
    }
  ]

  const stats = [
    { value: 500, label: 'Психологів', icon: Users, suffix: '+' },
    { value: 10000, label: 'Задоволених клієнтів', icon: Heart, suffix: '+' },
    { value: 50000, label: 'Проведених сесій', icon: Shield, suffix: '+' },
    { value: 4.9, label: 'Середній рейтинг', icon: Award, decimals: 1 }
  ]

  const team = [
    {
      name: 'Анна Коваленко',
      role: 'CEO & Founder',
      image: '👩‍💼',
      description: 'Психолог з 15-річним досвідом, засновник платформи'
    },
    {
      name: 'Максим Петренко',
      role: 'CTO',
      image: '👨‍💻',
      description: 'Експерт у розробці технологічних рішень для healthcare'
    },
    {
      name: 'Оксана Мельник',
      role: 'Head of Operations',
      image: '👩‍⚕️',
      description: 'Клінічний психолог, відповідає за якість сервісу'
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
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
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Heart className="w-12 h-12 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Про Псифіс
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 mb-8"
          >
            Ми робимо ментальне здоров'я доступним для кожного українця
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              Псифіс - це сучасна платформа, що об\'єднує кваліфікованих психологів 
              та психотерапевтів з людьми, які шукають професійну допомогу. 
              Ми віримо, що кожен заслуговує на підтримку та розуміння.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Наші цінності
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8 text-primary-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.suffix || ''}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Наша команда
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6">Наша місія</h2>
            <p className="text-lg text-slate-700 text-center leading-relaxed mb-6">
              Створити світ, де кожна людина має доступ до якісної психологічної допомоги 
              без стигми та бар'єрів. Ми працюємо над тим, щоб ментальне здоров'я було 
              пріоритетом для кожного.
            </p>
            <div className="flex items-center justify-center space-x-4 text-slate-600">
              <Globe className="w-6 h-6" />
              <span>Працюємо по всій Україні</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
