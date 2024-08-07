import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageGraphic from "@/assets/HomePageGraphic.webp"
import LogoCirculo from "@/assets/LogoCirculo.webp"
import HomePageText from "@/assets/Logo2.webp"
import { motion } from 'framer-motion'


type Props = {
  setSelectedPage: (value: SelectedPage) => void
}


const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id="inicio"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/*IMAGE AND MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
            <motion.div 
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 }
              }}
            >
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  <img alt="home-page-text" src={HomePageText} />
                </div>
              </div>

              <p className="mt-8 text-sm">
              Buscamos tu mejor versión. Somos especialistas en readaptación física y entrenamiento.
              Recuperación de lesiones para un rendimiento óptimo.
              </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div 
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x:0 }
            }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Unete ahora
              </ActionButton>
            </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* Logo circular */}
      {isAboveMediumScreens && (
        <div className="h-[150px] flex items-center justify-center w-full bg-primary-100 py-10">
        <div className="flex justify-center items-center">
          <img alt="logo-circular" src={LogoCirculo} />
        </div>
      </div>
      )}
    </section>
  )
}

export default Home