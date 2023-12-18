import Link from 'next/link';
import Image from 'next/image';

export default function Section () {
    return ( 
        <section className="sm:p-20 mt-10 sm:flex">
            <div id="present"></div>
            <div>
            <Image  
                        className="m-20 mb-0 sm:mb-0 p-10 rounded-full"
                        src="/profile.jpg" 
                        alt="Photo de profil" 
                        width={250}
                        height={250}
                    />
            </div>
            <div  className="inline-block mb-10 mt-5 sm:mt-5 m-20">
            <h2>Mon Parcours</h2>
                <p> Après un bac littéraire et un bac professionnel en mécanique, j&apos;ai commencé à travailler. 
                    Pendant le confinement, j&apos;ai décidé de me lancer dans l&apos;e-commerce en utilisant le CMS Shopify. 
                    C&apos;est là que j&apos;ai mis un premier pied dans le monde du code en cherchant à personnaliser mes projets par moi-même.</p>
                <p className="mt-3">J&apos;ai appris les bases du HTML, du CSS et du langage C, ce qui a éveillé mon intérêt pour la programmation. 
                    J&apos;ai développé le désir de me reconvertir dans ce domaine. Malheureusement, le confinement a pris fin, et j&apos;ai dû reprendre une activité salariée. 
                    Pendant deux ans, j&apos;ai travaillé dans le secteur de la restauration, occupant des postes de management et d&apos;exécutif pur.</p>
                <p className="mt-3">En 2022, j&apos;ai ressenti à nouveau l&apos;appel de la formation en développement. Cela m&apos;a conduit à une décision importante : en septembre 2023, 
                    j&apos;ai intégré le BTS SIO au Greta de Quimper pour devenir développeur.</p>
            </div>
    </section>
    )
}