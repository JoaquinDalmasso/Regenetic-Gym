import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import ContactUsPageGraphic from "@/assets/ImagenFinal.webp"
import HText from "@/shared/HText"
import { useForm, ValidationError } from '@formspree/react'

type Props = {
    setSelectedPage: (value: SelectedPage ) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyles=`mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

  const [state, handleSubmit] = useForm("xdknzgdo");

  return (
    <section id="contacto" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}
        >
            {/* HEADER */}
            <motion.div
            className="md:w-3/5"
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 }
              }}
            >
                <HText>
                    <span className="text-primary-500">SUMATE! </span>TE ESPERAMOS
                </HText>
                <p className="my-5">
                    Nuestro objetivo es ayudarte a recuperar tu salud de forma activa y efectiva, y potenciar tus capacidades para que puedas volver a disfrutar de tu vida.
                    <br/>
                    Creemos que la readaptación no es solo n proceso de rehabilitación, sino una oportunidad de transformación.
                </p>
            </motion.div>

            {/* FORM AND IMAGE*/}
            <div className="mt-10 justify-between gap-8">
              <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y:0 }
              }}
              >
              {state.succeeded ?
                <p className="text-primary-500 mb-5 text-2xl">GRACIAS POR TU MENSAJE!</p> :
                <p></p>
              }
                <form
                onSubmit={handleSubmit}
                >
                  <input
                    className={inputStyles}
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Tu Mail"
                  />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />

                  <textarea 
                  className={inputStyles}
                  rows={4}
                  cols={50}
                  id="message"
                  name="message"
                  placeholder="Mensaje"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />

                  <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                  >
                    ENVIAR
                  </button>
                </form>
              </motion.div>
              <motion.div className="relative mt-16 basis-2/5 md:mt-0 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y:0 }
              }}
              >
                <div className="w-full max-w-custom before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                  <img 
                  className="rounded-full w-full"
                  alt="contact-us-page-graphic"
                  src={ContactUsPageGraphic}
                  />
                </div>
              </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs