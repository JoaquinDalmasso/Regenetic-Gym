import { SelectedPage,ClassType } from '@/shared/types'
import image1 from "@/assets/image1.webp"
import image2 from "@/assets/image2.webp"
import image3 from "@/assets/image3.webp"
import image4 from "@/assets/image4.webp"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class.tsx'

const classes: Array<ClassType>= [
  {
    name: "Lesión deportiva",
    description:
      "Cualquier daño físico que presente un deportista tanto en competencia como en entrenamiento. Las lesiones musculares y los esguinces son algunas de las lesiones más comunes. En la mayoría de los casos, se producen a causa de traumatismos o por presentar una carga mayor a la que puede tolerar la articulación.",
    image: image1,
  },
  {
    name: "¿Por qué me lesiono?",
    description:
      "Edad, descanso, estado nutricional. / Calidad y tipo de entrenamiento. / Déficit en movilidad o estabilidad. / Déficit en control motor o fuerza. / Baja calidad en las técnicas de desplazamiento.",
    image: image2,
  },
  {
    name: "Readaptación física",
    description:
      "La clave para superar las lesiones deportivas y optimizar tu recuperación, radica en la readaptación física. / Prevención de recaídas. / Planificaciones especificas a tu tipo de lesión. / Optimización de la función muscular y articular. / Mejora de la confianza y autoestima. / Reducción del dolor crónico.",
    image: image3,
  },
  {
    name: "No dejes que una lesión te detenga",
    description:
      "",
    image: image4,
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ourClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="beneficios" className='w-full bg-primary-100 py-20'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 }
                }}
            >
                <div className="md:w-3/5 text-gray-20">
                  <HText>Readaptación</HText>
                  <p className="py-5">
                  Descubri la importancia de la readaptación física en deportistas lesionados.
                  </p>
                </div>
            </motion.div>
              <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2000px] whitespace-nowrap">
                  {classes.map((item: ClassType, index) => (
                    <Class 
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    />
                  ))}
                </ul>
              </div>
        </motion.div>
    </section>
  )
}

export default ourClasses