import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'
import {useState} from 'react'

const Description = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div>

      <h3>Практическая работа 4</h3>
      <div
      style={{
        display: 'flex',
        backgroundColor: 'cornsilk',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
        {/* // 1 animation */}
        <motion.div id="seasons"
        initial={{
          opacity:1,
          scale:0
        }}
        animate={{
          opacity:1,
          scale:1,
        }}
        >
          <motion.img
          src='img/animation/winter.png'
          width={100}
          
          initial={{
            y:20,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:0.2
          }}
          />
          <motion.img
          src='img/animation/spring.png'
          width={100}
          
          initial={{
            y:20,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:0.4
          }}
          
          />
          <motion.img
          src='img/animation/summer.png'
          width={100}
          
          initial={{
            y:20,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:0.6
          }}
          
          />
          <motion.img
          src='img/animation/autumn.png'
          width={100}
          
          initial={{
            y:20,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:0.8
          }}
          
          />

        </motion.div>

        {/* // 2 animation */}
        <motion.div id='parent'
        layout
        data-isOpen={isOpen}
        initial={{
          backgroundColor:'black',
          borderRadius:50,
        }}

        onClick={() => setIsOpen(!isOpen)}
        >
          <p
          layout
          style={{
            color: 'white', 
            fontSize: '20px', 
            fontWeight: 'bold',
            textAlign:'center'}}>
          Открой меня</p>
        </motion.div>

        {/* // 3 animation */}
        <motion.div
        initial={{
          backgroundColor: 'green',
          width: '100px',
          height: '100px',
          margin: '50px'
        }}
        className="box"
        // в анимации как бы задано 5 шагов в []
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
        

      </div>


        <div>
          <h4>Пример использования framer-motion</h4>
          
         

          <motion.img
          width={'15%'}
          src='img/icon.png'
          alt=''
          
          //анимация
          animate={{rotate:360}}
          transition={{
            delay:1,
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: 'reverse',
            type: 'inertia'
          }}
          />

          <motion.p
          initial={{
            x:-1000,
            opacity:0
          }}

          animation={{
            x: 500,
            opacity: 1
          }}
          transition={{
            delay:1,
            duration: 2,
            type: 'tween'
          }}>
            Текст, который появится
          </motion.p>
        </div>

        <motion.div id='div1'
        initial={{
          x:-1000,
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        transition={{
          delay:1,
          duration: 2
        }}
        >
         Variants are a declarative way to orchestrate complex animations throughout a component tree. By providing multiple components with a variants object with visual states of the same name, they can all be animated in sync by the switch of a single animate prop
        </motion.div>

        <motion.div id='div2'
        initial={{
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          delay:1,
          duration: 2
        }}
        >
          <motion.img
          src='img/banner-new.jpeg'
          className='banner'
          width={850}

          initial={{
            opacity:0.6
          }}

          transition={{
            duration: 5,
          }}
          whileTap={{
            rotate: 360
          }}
          
          />
        </motion.div>
        
        <div id='divImg'>
          <motion.div id='div3'
            initial={{
              opacity:0,
              scale:0.5
            }}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              duration: 2
            }}
            >
            <motion.img
            src='img/banner-new.jpeg'
            className='ball'
            width={300}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration: 5,
            }}
            whileHover={{
              scale:2,
              transition: {
                duration: 2
              }
            }}
            
            />
          </motion.div>

          <motion.div id='div4'
            initial={{
              opacity:0,
              scale:0.5
            }}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              duration: 2
            }}
            >
            <motion.img
            drag='x'
            src='img/banner-new.jpeg'
            className='ball'
            width={300}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration: 2,
            }}
            whileDrag={{
              scale:1.5,
            }}
            
            />
          </motion.div>

          <motion.button
          className='btn btn-primary'
          whileHover={{
            scale:1.2
          }}>
            Нажми меня
          </motion.button>
      </div>


    </div>
    
  )
}

export default Description