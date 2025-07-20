import '../../style/home.css'
import Guest from '../layouts/GuestLayout'
import Bas1 from'../../assets/bas1.jpg'
import Expert from'../../assets/expert.jpg'
import Trans from'../../assets/trans.jpg'
import Off from'../../assets/off.jpg'
import Desc from'../../assets/desc.jpg'
import Perso from'../../assets/perso.png'
import { Link } from 'react-router-dom'


function Home (){
    return (

    
    <>
    <Guest>
        <div className='homeMain'>
            <section className='banniere'>
                <div className='banniereContent'>
                    <div className='texte'>
                         <h1>
                            L’Immobilier en toute transparence
                        </h1>
                        <p>
                            Invest Plus Immo propose des services immobiliers complets, de la gestion locative à la construction. Laissez-nous vous aider à trouver ou à construire votre maison idéale.

                        </p>

                    </div>
                    <div className='boutons'>
                        
                            <Link to='/Service'> <button className='btn-service' >Nos services</button> </Link> 
                            
                        <Link to="/Contact"><button className='btn-contact'>
                            contactez-Nous
                        </button></Link>
                        

                    </div>
                   

                </div>


            </section>
            <section className='descrip'>
                <div className='descripContener'>
                    <div className='descripLeft'>
                        <h2>Notre Histoire et Mission</h2>
                        <p>
                            Chez Invest Plus Immo, nous avons une longue histoire de prestation de services exceptionnels de construction et d’ouvrages publics. Notre équipe dévouée s’engage dans l’innovation, la qualité et la satisfaction client, stimulant une croissance durable dans le secteur immobilier.
                        </p>
                        <Link to="/About">
                            <button className='btn-about'>Qui sommes-nous ?</button>
                        </Link>
                        
                    </div>
                    <div className='descripRight'>
                        <img src={Desc} alt="" />
                    </div>

                </div>
                
            </section>
            <section className='pourquoi'>
                <h2>Pourquoi choisir INVEST PLUS IMMO</h2>
                <div className='pourquoiContent'>
                    <div className='pourquoiContentTop'>
                        <div className='pourquoiBox'>
                            <div className='boxImage'>
                                <img src={Trans} alt="" />
                            </div>
                            <div className='boxTexte'>
                                <h3>Transparence totale</h3>
                                <p>
                                    Notre slogan, “L’immobilier en toute transparence”,
                                     n’est pas un simple mot. C’est un engagement.
                                      Chez INVEST PLUS IMMO, chaque opération est 
                                      claire, documentée et expliquée au client.

                                </p>
                            </div>
                        </div>
                        <div className='pourquoiBox'>
                            <div className='boxImage'>
                                <img src={Off} alt="" />
                            </div>
                            <div className='boxTexte'>
                                <h3>Une offre complète de services</h3>
                                <p>
                                    De la vente de biens immobiliers à la gestion 
                                    locative, en passant par la conception de plans,
                                     les travaux publics, le nettoyage, et même la 
                                     décoration intérieure, nous vous offrons un 
                                     accompagnement global, clé en main.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='pourquoiContentBottom'>
                        <div className='pourquoiBox'>
                            <div className='boxImage'>
                                <img src={Bas1} alt="" />
                            </div>
                            <div className='boxTexte'>
                                <h3>Une expertise locale</h3>
                                <p>
                                    Basés à Yamoussoukro (SOPIM Cité), nous 
                                    connaissons parfaitement le marché 
                                    foncier et immobilier local. Nous vous
                                     guidons vers les meilleures opportunités, 
                                     en fonction de vos objectifs.


                                </p>
                            </div>
                        </div>
                        <div className='pourquoiBox'>
                            <div className='boxImage'>
                                <img src={Expert} alt="" />
                            </div>
                            <div className='boxTexte'>
                                <h3>Professionnalisme et réactivité</h3>
                                <p>
                                    Notre équipe est formée, disponible, et engagée
                                     à vous offrir un service rapide, soigné 
                                     et respectueux de vos attentes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link to="/Service" className='lien'>
                        <button className='btn-service' id='btn-service'>Voir nos services</button>
                    </Link>
                    

                </div>

            </section>
            <section className='temoin'>
                <h2>Temoignages</h2>
                <div className='temoinContener'>
                    <div className='temoinBox'>
                        <div className='temoinBoxImage'>
                             <img src={Perso} alt="" />

                        </div>
                        <div className='temoinBoxTexte'>
                            <h3>Yao Hervé</h3>
                            <p>“J’avais besoin d’une gestion locative sérieuse pour mon immeuble. Invest Plus Immo s’occupe de tout et je suis tranquille.”</p>

                        </div>
                    </div>
                    <div className='temoinBox'>
                        <div className='temoinBoxImage'>
                            <img src={Perso} alt="" />

                        </div>
                        <div className='temoinBoxTexte'>
                            <h3>Issa Bamba</h3>
                            <p>“Leur service de décoration intérieure a totalement transformé mon espace. Rapide, créatif et efficace !”</p>

                        </div>
                    </div>
                    <div className='temoinBox'>
                        <div className='temoinBoxImage'>
                            <img src={Perso} alt="" />

                        </div>
                        <div className='temoinBoxTexte'>
                            <h3>Nadine A.</h3>
                            <p>“C’est rare de trouver une agence aussi transparente dans le domaine de l’immobilier. Zéro surprise, tout était expliqué de A à Z.”
</p>

                        </div>
                    </div>
                    

                </div>
            </section>

        </div>
        

    </Guest>
    
    </>

    )
}
export default Home