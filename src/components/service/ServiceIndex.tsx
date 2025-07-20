import Guest from '../layouts/GuestLayout'
import '../../style/service.css'
import Loti from'../../assets/loti.jpg'
import Promo from'../../assets/promo.jpg'
import Gestion from'../../assets/gestion.jpg'
import Vente from'../../assets/vente.jpeg'
import Concept from'../../assets/concep.jpg'
import Deco1 from'../../assets/deco1.jpg'
import Net1 from'../../assets/net1.jpg'
import Diver from'../../assets/diver.jpg'


function Service (){
    return (
    <>
    <Guest>
        <div className='serviceMain'>
            <section className='service'>
                <h1>Nos Prestations</h1>
                <div className='serviceContent'>
                    <div className='serviceContener'>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Loti} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Travaux lotissement et aménagement foncier</h3>
                                <p>Du terrain brut à l’espace de vie : nous transformons vos parcelles en projets viables et valorisés grâce à nos travaux de lotissement et d’aménagement foncier.</p>
                            </div>
                        </div>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Gestion} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Gestion immobilière</h3>
                                <p>De la location à la valorisation, nous prenons soin de votre patrimoine comme s’il était le nôtre — pour une gestion immobilière sereine, efficace et rentable.</p>
                            </div>
                        </div>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Promo} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Promotion immobilière</h3>
                                <p>De la vision à la réalité, nous développons des projets immobiliers innovants et durables, pensés pour valoriser chaque espace et répondre aux besoins de demain.</p>
                            </div>
                        </div>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Vente} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Vente de biens immobiliers - terrains et maisons</h3>
                                <p>Terrains constructibles, maisons prêtes à vivre — nous connectons acheteurs et vendeurs pour des transactions rapides, sûres et transparentes.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='serviceContener'>
                         <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Concept} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Conception plan de maison</h3>
                                <p>Des idées aux plans, nous dessinons l’espace qui vous ressemble — des conceptions sur mesure pour des maisons belles, fonctionnelles et adaptées à votre style de vie.</p>
                            </div>
                        </div>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Deco1} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Décoration intérieur</h3>
                                <p>Nous métamorphosons les espaces en lieux de vie uniques, où l’élégance rencontre la fonctionnalité — pour des intérieurs qui inspirent, apaisent et ressemblent à ceux qui les habitent.</p>
                            </div>
                        </div>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Net1} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Entretien et nettoyage</h3>
                                <p>Propreté impeccable, sérénité garantie — nous assurons l’entretien et le nettoyage de vos espaces avec rigueur, discrétion et efficacité, pour un confort durable au quotidien.</p>
                            </div>
                        </div>
                        <div className='serviceBox'>
                            <div className='serviceBoxImage'>
                                <img src={Diver} alt="" />
                            </div>
                            <div className='serviceBoxTexte'>
                                <h3>Diverses prestations</h3>
                                <p>De la conception à l’entretien, INVEST PLUS IMMO offre une gamme complète de prestations sur mesure — pour un accompagnement global, efficace et adapté à tous vos besoins immobiliers.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
       

  




    </Guest>
    
    </>

    )
}
export default Service