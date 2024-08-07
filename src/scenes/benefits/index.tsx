import {SelectedPage}  from "@/shared/types"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import BenefitsPageGraphic from "@/assets/JuaniA.webp"
import MircoV from "@/assets/MircoV.webp"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <div id="profesionales" className="bg-gray-20">
    <section
    className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Profesionales)}
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x:-50 },
                visible: { opacity: 1, x:0 }
                }}
            >
                <HText>Conoce a nuestros profesionales</HText>
            </motion.div>

            {/* JUANI */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                className="mx-auto rounded-3xl"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
                />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                        <div className="relative">
                            <div className=" before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, x:50 },
                                visible: { opacity: 1, x:0 }
                                }}
                                >
                                    <HText>
                                        EL ES JUAN IGNACIO AGUIRRE {" "}
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                    {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x:50 },
                            visible: { opacity: 1, x:0 }
                            }}
                        >
                            <p className="my-5">
                            Con una sólida formación, Juani es diplomado en Preparación Física y tiene una amplia experiencia en preparación física para rugby, así como en readaptación física deportiva en alto rendimiento.
                            </p>
                            <p className="mb-5">
                            <p className="mb-5 flex gap-2"><span className="text-primary-500">Experiencia Laboral: </span>
                            <ul>
                                <li>Preparación Física.</li>
                                <li>Readaptación Física Deportiva.</li>
                                <li>Entrenamiento Deportivo y Salud.</li>
                            </ul>
                            </p>
                            <p className="mb-5"><span className="text-primary-500">Objetivos: </span>
                            Lograr una readaptación física completa y eficaz que les permita volver a competir al máximo nivel.
                            </p>
                            <p className="mb-5 flex gap-2"><span className="text-primary-500">Áreas de interés: </span>
                            <ul>
                                <li>Readaptación física deportiva.</li>

                                <li>Alto rendimiento.</li>

                                <li>Entrenamiento deportivo y salud.</li>
                            </ul>
                            </p>
                            </p>
                            <a href="https://wa.link/sl55vi">
                            <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                                WhatsApp
                            </button>
                            </a>
                        </motion.div>
                </div>
            </div>

            {/* MIRCO */}
            
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                        <div className="relative">
                            <div className=" before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                hidden: { opacity: 0, x:50 },
                                visible: { opacity: 1, x:0 }
                                }}
                                >
                                    <HText>
                                        EL ES MIRCO VILLALBA {" "}
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                    {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0, x:50 },
                            visible: { opacity: 1, x:0 }
                            }}
                        >
                            <p className="my-5">
                            Mirco es nuestro apasionado profesor de Educación Física y estudiante de licenciatura con orientación en salud. Se destaca en la preparación física para deportes de mediano-alto rendimiento, como rugby, fútbol y tenis.
                            </p>
                            <p className="mb-5">
                            <p className="mb-5 flex gap-2"><span className="text-primary-500">Experiencia Laboral: </span>
                            <ul>
                                <li>Preparación Física.</li>
                                <li>Readaptador Físico Deportivo.</li>
                                <li>Disertante en jornadas de capacitación.</li>
                            </ul>
                            </p>
                            <p className="mb-5"><span className="text-primary-500">Objetivos: </span>
                            Mirco se esfuerza por lograr procesos de recuperación con alta calidad y profesionalismo.
                            </p>
                            <p className="mb-5 flex gap-2"><span className="text-primary-500">Áreas de interés: </span>
                            <ul>
                                <li>Rehabilitación de rodillas.</li>
                                <li>Prevención de lesiones.</li>
                                <li>Entrenamiento para diabéticos.</li>
                            </ul>
                            </p>
                            </p>
                            <a href="https://wa.link/0ir5qa">
                            <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                                WhatsApp
                            </button>
                            </a>
                        </motion.div>
                        
                </div>
                <img 
                className="mx-auto rounded-3xl"
                alt="benefits-page-graphic"
                src={MircoV}
                />
            </div>
        </motion.div>
    </section>
    </div>
  )
}

export default Benefits