import { db } from '../services/firebase';
import { addDoc, getDocs, collection, query } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

export const useHero = () => {

    const reference = collection(db, "heroes");
    
    const createHero = async (hero) => {

        const newHero = {
            name: hero.name,
            image: hero.image
        }

        const response = await addDoc(reference, newHero);

        return {
            id: response.id,
            newHero
        }
    }

    const getHeros = async() => {

        const q = query(reference);
        const data = await getDocs(q);
        const results = []

        data.forEach(doc => {
            
            console.log(doc.id, doc.data())
            results.push({
                id: doc.id,
                ...doc.data()
            })
        });

        return results;
    }

    return {
        createHero,
        getHeros
    }
}