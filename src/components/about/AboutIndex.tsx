import Guest from "../layouts/GuestLayout"
import '../../style/about.css'
import Bas2 from '../../assets/bas2.jpg'
import Mission from '../../assets/mission.jpg'
import Histo from '../../assets/histo.jpg'



function About(){
    return(
        <>
        <Guest>
            <div className="aboutMain">
                <section className="sectionTop">
                    <h2>À propos de INVEST PLUS IMMO</h2>
                    <div className="sectionTopContent">
                        <div className="sectionTopTexte">
                            <p> INVEST PLUS IMMO, c’est bien plus qu’une agence.  Une équipe passionnée et engagée, enracinée à Yamoussoukro.  Nous simplifions l’immobilier avec des solutions claires et accessibles. Primo-accédants, investisseurs, entreprises : chacun est accompagné avec soin.  Grâce à notre ancrage local, nous connectons nos clients aux meilleures opportunités.  Transparence, sécurité et confiance guident chaque étape de nos services. Chez INVEST PLUS IMMO, votre projet devient une réalité sereine et réussie.
                            </p>

                        </div>
                        <div className="sectionTopImage">
                            <img src={Bas2} alt="" />

                        </div>

                    </div>
                    

                </section>
                <section className="histoire">
                    <h2>Notre Histoire</h2>
                    <div className="histoireContent">
                        <div className="histoireTexte">
                            <p>Fondée par des professionnels issus du terrain, Invest Plus Immo est née d’un besoin réel :

offrir un service immobilier de confiance, alliant modernité, rigueur et accompagnement humain.

Au fil des années, nous avons su bâtir une réputation basée sur la transparence, la réactivité et la satisfaction client.</p>

                        </div>
                        <div className="histoireImage">
                            <img src={Histo} alt="" />

                        </div>
                    </div>

                </section>
                <section className="vision">
                    <h2>Notre Vision</h2>
                    <div className="visionContent">
                        <div className="visionTexte">
                            <p>Notre vision est de créer un environnement immobilier bienveillant
                                 et performant dans lequel chaque client — qu’il s’agisse d’un primo-accédant découvrant le monde de l’immobilier, d’un investisseur aguerri ou d’une entreprise en quête de nouveaux locaux — se sent pleinement accompagné, compris et en confiance tout au long de son parcours.
                                    Nous mettons l'humain au cœur de chaque projet, en offrant
                                    un suivi personnalisé, des conseils 
                                    clairs et une transparence totale à chaque étape : de
                                    la première 
                                    visite à la signature finale, en passant par la 
                                    recherche de financement ou la conception des espaces.</p>
                            
                        </div>
                        <div className="visionImage">
                            <img src={Mission} alt="" />

                        </div>
                    </div>

                </section>



            </div>

        </Guest>
        
        </>
    )
}
export default About