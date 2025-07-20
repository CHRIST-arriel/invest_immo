import '../../style/contact.css'
import Guest from '../layouts/GuestLayout'

import { MdLocationPin } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact (){
    return (

    
    <>
    <Guest>
         <div className="maniContact">
                <section className="contactContainer">
                     <div className="contactLeft">
                        <div className="contactBox">
                            <div className="contactIcon">
                                <MdLocationPin />

                            </div>
                            <div className="infoText">SOPIM Cité, Yamoussoukro</div>
                        </div>
                        <div className="contactBox">
                            <div className="contactIcon">
                                <MdOutlineWatchLater />
                            </div>
                            <div className="infoText">
                            Du lundi au vendredi, de 10h à 17h, le samedi de 13h a 17h
                            </div>
                        </div>
                        <div className="contactBox">
                            <div className="contactIcon">
                                <FaPhoneAlt />
                            </div>
                            <div className="infoText">+225 05 65 15 56 38 <br />+225 05 04 04 05 54</div>
                        </div>
                    </div>
                    <div className="map">
                        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.83032193458!2d-5.35281445136715!3d6.786351700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb8970018d73f33%3A0xc48df8a9bc27f914!2sSopim%20cit%C3%A9s!5e0!3m2!1sfr!2sci!4v1753015727934!5m2!1sfr!2sci" 
                            width="400" height="300" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            /></div>
                        </div>
                    
                     <div className="formulaire">
                        <form action="" className="form">
                            <div>
                                <input type="text"  placeholder="Nom"/>
                            </div>
                            <div>
                                <input type="text"  placeholder="Email"/>
                            </div>
                            <div>
                                <textarea name="" id="" placeholder="Message"></textarea>
                            </div>
                            <input type="submit" value='Soumettre' id="soumettre"/>
                        </form>
                    </div>
                </section>
            </div>
        

    </Guest>
    
    </>

    )
}
export default Contact